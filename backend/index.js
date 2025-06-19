const port = 4000;
const express = require('express')

const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { type } = require('os');
const { request } = require('http');

// what ever request  get from the response will be automaticaly passed json 
app.use(express.json());

//this will used to connect express app on 400port
app.use(cors())

// Database connection with mongoDB
mongoose.connect('mongodb+srv://Harikrishna:%4020FH1a0596@cluster0.yx9j4d9.mongodb.net/e-commerce')

// APT CREATION 

app.get('/',(request,response)=>{
    response.send("Express App is Running ")
})

// Text image storage engine

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

// Create a upload Endpoint for images

app.use('/images',express.static('upload/images'))

app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        message: 'File uploaded successfully', 
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    }
    )
})

// Schema for creating products
    const Product = mongoose.model("Product",{
        id:{
            type:Number,
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        image:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required:true,
        },
        new_price:{
            type:Number,
            required:true,
        },
        old_price:{
            type:Number,
            required:true,
        },
        date:{
            type:Date,
            default:Date.now,
        },
        available:{
            type:Boolean,
            default:true,
        }
    })

    app.post('/addproduct',async(request,response)=>{
        let products = await Product.find({})
        let id;
        if(products.length>0){
            let last_product_array = products.slice(-1)
            let last_product = last_product_array[0];
            id =last_product.id+1;
        }else{
            id=1;
        }
        const product = new Product({
            id:id,
            name:request.body.name,
            image:request.body.image,
            category:request.body.category,
            new_price:request.body.new_price,
            old_price:request.body.old_price,
        })
        console.log(product)
        await product.save()
        console.log('Saved')
        response.json({
            success:true,
            name:request.body.name
        })
    })
 // Creting API FOR DELETE PRODUCTS
 app.post('/removeproduct',async(request,response)=>{
    await Product.findOneAndDelete({id:request.body.id});
    console.log('removed product')
    response.json({
        success:true,
        name:request.body.name
    })
 })

 // Creating API FOR GETTING ALL PRODUCTS
 app.get('/allproducts',async(request,response)=>{
    let products = await Product.find({});
    console.log("ALL PRODUCTS FETCHED")
    response.send(products);
 })

 // Schema creating for User MOdel
 const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
 })

 // Creating End Point For registering the user
 app.post('/signup',async(request,response)=>{
        let check = await Users.findOne({email:request.body.email})
        if(check){
          return  response.status(400).json({success:false,errors:"existing user found with same email or mobile"})
        }
        let cart ={};
        for(let i = 0;i<300;i++){
            cart[i]=0;
        }
        const user = new Users({
            name:request.body.username,
            email:request.body.email,
            password:request.body.password,
            cartData:cart,
        })
        await user.save();
        const data = {
            user:{
                id:user.id
            }
        }
        const token = jwt.sign(data,'secret_ecom');
        response.json({success:true,token})
 })

 // Creating end point to the User Login
  app.post('/login',async(request,response)=>{
    let user = await Users.findOne({email:request.body.email});
    if(user){
        const passCompare = request.body.password === user.password;
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            response.json({success:true,token});
        }
        else{
            response.json({
                success:false,errors:"wrong Password"
            })
        }
    }else{
        response.json({success:false,errors:"Wrong Email Id"})
    }
  })

app.listen(port,(error)=>{
    if(!error){
        console.log('Server Running on Port' +port)
    }else{
        console.log("Error"+error)
    }
})