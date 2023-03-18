import React from "react";
import '../index.css';
import { Router,route,link,useNavigate } from "react-router-dom";

function Navbar() {
    const navigate=useNavigate();
    return(
        <div className="grid grid-cols-6 divide-x">
            <button className="p-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Aboutus</button>
            <button className="p-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={()=>navigate('/')}>Home</button>
            <button className="p-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Newsroom</button>
            <button className="p-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Events</button>
            <button className="p-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Gallary</button>
            <button className="p-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Oppertunities</button>
            
        </div>
    )
}
export default Navbar