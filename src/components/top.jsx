import React from "react";
import '../index.css';
import { Router,route,link,useNavigate } from "react-router-dom";
import { RegForm } from "./userForm";

function Top() {
    const navigate=useNavigate();
    return(
        <div>
            <img src="https://silicon.ac.in/wp-content/themes/sit/assets/img/sit-logo.svg" alt="SiliconTech"/>
        </div>
    )
}
export default Top