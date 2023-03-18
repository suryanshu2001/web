import React from "react";
import '../index.css';
import Top from "./top";
import Navbar from "./menuebar";
import Preview from "./previewimg";
import Events from "./events";
import Newsroom from "./newsroom";
import Body from "./body";

function home() {
    return(
        <div >    
          <Top/>
        <div className="mx-auto py-2 px-3 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
          <Navbar/>
        </div>
        < div className="w-3/5 ml-14 mt-6 py-3 flex-row float-left">
          <Preview/>
          <Newsroom/>
          <Events/>
        </div>
        <div className="w-1/5 ml-1 mt-6 mr-4 flex-row-reverse float-right">
           <Body/>
        </div>
        </div>
    )
}
export default home