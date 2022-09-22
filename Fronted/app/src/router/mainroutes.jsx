import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../component/home";
import { Jobs } from "../component/jobdes";

export const Mainroutes = ()=>{


    return <div>
             <Routes>
                 <Route path="/" element={<Home/>}/>
                 <Route path="/desc/:id" element={<Jobs/>}/>
             </Routes>
    </div>
}