import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from './Home';
import Repositories from "./Repositories";

export default function NavRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>}  />
                <Route path='/repositories'  element={<Repositories/>}  />
            </Routes>
        </BrowserRouter>
    )
}