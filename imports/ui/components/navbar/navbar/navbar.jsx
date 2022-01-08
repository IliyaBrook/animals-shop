import React, {useEffect, useState} from 'react';
import './navbar.scss';

import {Cart} from "../cart-and-dropdown/cart";
import {NavbarButtons} from "../navbar-buttons/navbar-buttons";
import {Logo} from "../logo/logo";
import {SmallSizeDropdown} from "../dropdown-smallSize/smallSize-dropdown";

export const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.outerWidth);
    useEffect(() => {
        const sizeHandler = event => {
            return setWindowWidth(event.target.outerWidth);
        };
        window.addEventListener('resize', sizeHandler);
        return () => removeEventListener('resize', sizeHandler);
    }, [windowWidth]);


    return (
        <div className="nav-bar-wrapper">
            <div className="nav-bar-content">
                <SmallSizeDropdown width={windowWidth}/>
                <Logo width={windowWidth}/>
                <NavbarButtons width={windowWidth}/>
                <Cart width={windowWidth}/>
            </div>
        </div>
    );
};