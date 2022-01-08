import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/home-page/home-page";
import {Navbar} from "./components/navbar/navbar/navbar";
import {AnimalsPage} from "./pages/animals/animals-page";
import {AboutPage} from "./pages/about/about-page";
import {ContactsPage} from "./pages/contacts/contacts-page";

export const Router = () => {
    
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/animals-page" element={<AnimalsPage/>}/>
                <Route path="/about-page" element={<AboutPage/>}/>
                <Route path="/contacts-page" element={<ContactsPage/>}/>
            </Routes>
        </>
    );
};
