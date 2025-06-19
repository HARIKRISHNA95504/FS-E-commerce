# FS-E-commerce
# step-1
* create react app
```
npx create react app .
```
* install react router dom
```
npm install react-router-dom
```
* to start the react project
```
npm start
```
# Backend
# installation dependecies
* create a folder in e-commerce
* the folder name should be backend
* install dependecies in the respected path
```
PS C:\Users\HARIKRISHNA\Desktop\E-commerce\backend>
```
# step - 1
* To install express js by this command
* creating a package.json file by
```
PS C:\Users\HARIKRISHNA\Desktop\E-commerce\backend> npm init
```
```
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (backend)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to C:\Users\HARIKRISHNA\Desktop\E-commerce\backend\package.json:

{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}


Is this OK? (yes) yes
```
# step - 2
* then install express
```
PS C:\Users\HARIKRISHNA\Desktop\E-commerce\backend> npm install express
```
* output
```
added 67 packages, and audited 68 packages in 3s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```
# step - 3
* install jsonwebtoken package
```
PS C:\Users\HARIKRISHNA\Desktop\E-commerce\backend> npm install jsonwebtoken
```
* output
```

added 13 packages, and audited 81 packages in 1s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```
# step-4
* to install mongoose
* for mongoDb support
```
PS C:\Users\HARIKRISHNA\Desktop\E-commerce\backend> npm install mongoose
```
* output
```

added 17 packages, and audited 98 packages in 5s

15 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```
# step - 5
* we will install multer
* we can store the images in the backend folder that we will upload using our admin pannel
```
PS C:\Users\HARIKRISHNA\Desktop\E-commerce\backend> npm install multer
```
# step - 6
* we will install cors
* using this we can add the permission to our application to access the backend
```
PS C:\Users\HARIKRISHNA\Desktop\E-commerce\backend> npm install cors
```
# Admin Panel :
# change directory to admin folrder
```
PS C:\Users\HARIKRISHNA\Desktop\E-commerce> cd .\admin\
```
# install React App 
* for installation :
```
npm create vite@latest .
```
# in the terminal you give this way to install react app
```
PS C:\Users\HARIKRISHNA\Desktop\E-commerce\admin> npm create vite@latest .
```
* then select "React"
* And "Javascript"
```
PS C:\Users\HARIKRISHNA\Desktop\E-commerce\admin> npm create vite@latest .

> npx
> create-vite .

│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Scaffolding project in C:\Users\HARIKRISHNA\Desktop\E-commerce\admin...
│
└  Done. Now run:

  npm install
  npm run dev

```
* After that we have to install the nodemodules with all dependensis
```
npm install
```
```
PS C:\Users\HARIKRISHNA\Desktop\E-commerce\admin> npm install
```
* run the react app with this command :
```
npm run dev
```
```
PS C:\Users\HARIKRISHNA\Desktop\E-commerce\admin> npm run dev
```
* After Running the successfull app
* you can clean the existed with your requirements
* index.html
```
<title>Admin Panel</title>
```
* App.jsx
```
import React from "react";

const App = ()=>{
  return(
    <div>

    </div>
  )
}
export default App;
```
* after Delete the App.css file
* index.css
* clear the css style in index.csss
* After that in assets folder we have one react.svg file
* that react.svg file delete it
* then copy the images in assets folder in frontend
* that are paste in the admin folder in assests
* Add font from the google font
* Poppins font , Regular 400
* index.html
```
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Admin Panel</title>
  </head>
```
* index.css
```
body{
  margin: 0;
  font-family: "Poppins";
  background-color: #f6f6f6;
  height: 100vh;
}
```
# Now we will create the folder structure for our Admin Panel 
* Under Src folder we will create one new folder the name should be Components
* Components folder created
* Create another folder same under the src folder the name should be Pages
* Pages folder created
* Under the Pages folder create a new folder the name should be Admin
* Admin folder created
* in Admin folder create a new file Admin.jsx
* Admin.jsx
```
import React from "react";
import './Admin.css'
const Admin = ()=>{
    return(
        <div className="admin">

        </div>
    )
}
export default Admin;
```
# React-Router-Dom
* we have to install this react-router-dom for routing process
# install :
* command :
```
npm install react-router-dom
```
```
PS C:\Users\HARIKRISHNA\Desktop\E-commerce\admin> npm install react-router-dom
```
* for routing we wrap the app
* using browser router
* main.jsx
```
import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

