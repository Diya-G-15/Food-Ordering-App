import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore.js";
import { IoMdMenu } from "react-icons/io";
import { CiUser , CiSearch} from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    // const data=useContext(UserContext);
    const { loggedInUser } = useContext(UserContext);
    // console.log("loggeduser",loggedInUser)
    // console.log("data",data)
    //s
    //subscribing to store ===reading data from store using selector
    const cartItems = useSelector((store) => {
        // console.log(appStore,"appstore");
        // console.log(store.cart.items)
        return store.cart.items
    })


    // return (<div className=" flex justify-between bg-red-100 shadow-lg  ">

    //     <div className="h-30 w-20">
    //         <img className="h-20 w-20 object-cover mx-4 rounded-full  " src={LOGO_URL}></img>
    //         <h2 className="mx-4 text-lg font-medium w-20 text-center">Foodlify</h2>
    //     </div>
    //     <div className="  mt-4 mr-14 text-xl text-slate-950 font-medium">
    //         <ul className="flex flex-wrap">
    //             {/* <li className="p-5 ">
    //             <Link to="/grocery">Grocery</Link>
    //             </li> */}
    //             {/* <li  className="p-5 ">{onlineStatus===true?"🟢":"🔴"}</li> */}
    //             <li className="p-5 hover:border-b-4 border-[#f05a35]">
    //                 <Link className=" " to="/">Home</Link></li>
    //             <li className="p-5 hover:border-b-4 border-[#f05a35]  ">
    //                 <Link to="/about">About</Link>
    //             </li>
    //             <li className="font-bold text-xl p-5 hover:border-b-4 border-[#f05a35]">
    //                 <Link to="/cart">Cart({" " + cartItems.length + "items "})</Link></li>
    //             <li className="p-5 hover:border-b-4 border-[#f05a35] ">
    //                 <Link to="/contact">Contact Me</Link></li>
    //             {loggedInUser && <li className="p-5 border-2 border-black bg-red-300 rounded-full min-w-32" >{loggedInUser}</li>}
    //             {/* <li className="p-5 border-2 border-black bg-red-300 rounded-full min-w-30" >{loggedInUser}</li> */}
    //             <button className="font-semibold text-2xl p-3 mt-2 mb-1 w-28 ml-[15]  pointer-events-auto border-solid border-slate-800 border-2  bg-[#f05a35]" onClick={() => {
    //                 btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")

    //             }}>{btnName}</button>
    //         </ul>
    //     </div>
    // </div>)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }
    return (
        <nav className="bg-primary shadow-md p-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/">
            <div className="flex  gap-2">
            <img src={LOGO_URL} className="h-16 w-16 object-cover rounded-full"></img>
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">Foodlify</span>
            </div>
            </div>
            </Link>
  
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-white hover:border-b-2 hover:border-white px-3 py-2  text-lg font-medium">Home</Link>
                <Link to="/about" className="text-white hover:border-b-2 hover:border-white px-3 py-2  text-lg font-medium">About</Link>
                <Link to="/contact" className="text-white hover:border-b-2 hover:border-white px-3 py-2  text-lg font-medium">Contact</Link>
              </div>
            </div>
  
            {/* Icons */}
            <div className="flex items-center">
              <Link to="/account"  className="hidden md:flex ml-4 text hover:text-primary hover:scale-125 ease-in-out">
                <CiUser className="h-6 w-6 font-medium  text-white " />
              </Link> 
              <Link   to="/cart" className="ml-4 font-medium text-white hover:scale-125 ease-in-out flex ">
                <FaShoppingCart className="h-6 w-6" /><span className="font-medium ">({" " + cartItems.length + "items "})</span>
              </Link>
            </div>
  
            {/* Mobile menu button and cart */}
            <div className="md:hidden flex items-center">
              <button  onClick={toggleMenu} className="text-white">
                {isMenuOpen ? <MdClose className="h-6 w-6" /> : <IoMdMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-white  block px-3 py-2  text-base font-medium">Home</Link>
              <Link href="/home" className="text-white  block px-3 py-2  text-base font-medium">About</Link>
              <Link href="/about" className="text-white  block px-3 py-2  text-base font-medium">Contact</Link>
              <Link to="/account" className="text-white   px-3 py-2  text-base font-medium block">Account</Link>

            </div>
            {/* <div className="px-4 py-3">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CiSearch className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="mt-3 flex justify-center">
                <button  className="flex-1 justify-center text-gray-600 hover:text-primary">
                  <CiUser className="h-5 w-5 mr-2" />
                  Account
                </button>
              </div>
            </div> */}
          </div>
        )}
      </nav>
    )
}
export default Header;