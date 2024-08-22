import { useEffect, useState,useContext } from 'react';
import {LOGO_URL} from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import userContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
const Header = () => {
    const [btnNameReact,setbtnNameReact] = useState("Login");
    useEffect(()=>{
    },[btnNameReact]);

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(userContext);

    // Subcribe to the store using selector
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                <li className='px-2'>Online Status: {onlineStatus? "🟢":"🔴"}</li>
                <li className='px-2'><Link to="/">Home</Link></li>
                <li className='px-2'><Link to="/about">About Us</Link></li>
                <li className='px-2'><Link to="/grocery">Grocery</Link></li>
                <li className='px-2'><Link to="/contact">Contact Us</Link></li>
                <li className='px-2 font-bold text-xl'><Link to="/cart">Cart({cartItems.length})</Link></li>
                <button className='login' onClick={()=>{btnNameReact=="Login" ? setbtnNameReact("Logout"):setbtnNameReact("Login");}}>{btnNameReact}</button>
                <li className='font-bold'> ({loggedInUser})</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;