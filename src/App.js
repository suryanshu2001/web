import React from "react";
import './index.css';
import Top from "./components/top";
import Navbar from "./components/menuebar";
import Preview from "./components/previewimg";
import Events from "./components/events";
import Newsroom from "./components/newsroom";
import Body from "./components/body";
import Home from "./components/home";
import { Route, Routes,Link,useNavigate } from "react-router-dom";
import { RegForm } from "./components/userForm";




function App() {
  const navigate=useNavigate();
  return (
    <div className="App">
         <button className="border-double border-4 border-gray-500" onClick={()=>navigate('/')}>Home</button>
         <button className="border-double border-4 border-gray-500" onClick={()=>navigate('user/add')}>REGISTER</button>
         <button>::</button>
         <button className="border-double border-4 border-gray-500">LOGIN</button>
    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user/add" element={<RegForm/>}/>
  </Routes>
  </div>  
       
  );
}

export default App;
