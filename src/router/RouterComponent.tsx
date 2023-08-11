import React, {useState, createContext} from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    HashRouter,
} from "react-router-dom";
import DashboardComponent from "../view/dashboard/DashboardComponent";

export default function RouterComponent() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/test" element={<DashboardComponent></DashboardComponent>}/>
            </Routes>
        </BrowserRouter>
    )
}