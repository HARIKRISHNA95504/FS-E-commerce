import React, { useContext, useRef, useState } from "react"
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom"
import { ShopContext } from "../../Context/ShopContext"
import nav_dropdown from '../Assets/nav_dropdown.png'
const Navbar =()=>{
    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems}=useContext(ShopContext)
    const menuRef = useRef();

    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open');
    }
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to='/login'><button>Login</button></Link>}
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    //      <div className="flex justify-around items-center shadow-md py-4 px-6 bg-white sticky top-0 z-50">
    //   {/* Logo */}
    //   <div className="flex items-center gap-2">
    //     <img src={logo} alt="logo" className="h-8 w-auto" />
    //     <p className="text-xl font-semibold text-gray-900">SHOPPER</p>
    //   </div>

    //   {/* Menu */}
    //   <ul className="flex items-center gap-10 text-gray-600 text-sm font-semibold">
    //     <li className="flex flex-col items-center cursor-pointer gap-1">
    //       Shop
    //       <hr className="w-4/5 h-[3px] rounded bg-red-500 border-none" />
    //     </li>
    //     <li className="cursor-pointer hover:text-gray-800">Men</li>
    //     <li className="cursor-pointer hover:text-gray-800">Women</li>
    //     <li className="cursor-pointer hover:text-gray-800">Kids</li>
    //   </ul>

    //   {/* Login & Cart */}
    //   <div className="flex items-center gap-6 relative">
    //     <button className="w-[90px] h-[30px] border border-gray-400 rounded-full text-gray-600 text-base font-medium hover:bg-gray-100 transition">
    //       Login
    //     </button>
    //     <div className="relative">
    //       <img src={cart_icon} alt="cart" className="h-7 w-auto" />
    //       <div className="absolute -top-2 -right-3 w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
    //         0
    //       </div>
    //     </div>
    //   </div>
    // </div>
    )
}
export default Navbar;