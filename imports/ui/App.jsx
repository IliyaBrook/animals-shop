import React from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import {Router} from "./Router";

export const App = () => {
    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter>);
};
