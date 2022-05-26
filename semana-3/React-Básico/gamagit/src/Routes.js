import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from './pages/Home';
import Repositories from "./pages/Repositories";

export default function NavRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>}  />
                <Route path='/repositories' element={<Repositories/>}  />
            </Routes>
        </BrowserRouter>
    )
}