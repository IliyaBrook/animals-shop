import React from 'react';
import './smallSize-dropdown.scss';
import {useNavigate} from "react-router-dom";

export const SmallSizeDropdown = ({width}) => {
    const navigate = useNavigate();

    const RenderByWidth = () => {
        return width < 477 && (
            <div
                className="dropdown-small-wrapper">
                <div className="dropdown-small-trigger"
                     data-bs-toggle="dropdown"
                     id="dropdownMenuButton1"
                     aria-expanded="false"
                >
                    <img src="/images/nav-bar-cart/hamburger1.png" alt="hamburger"/>
                </div>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <a
                            className="dropdown-item"
                            onClick={() => navigate("/")}
                        >Main</a>
                    </li>
                    <li>
                        <a
                            className="dropdown-item"
                            onClick={() => navigate("/animals-page")}
                        >Animals</a>
                    </li>
                    <li>
                        <a
                            className="dropdown-item"
                            onClick={() => navigate("/about-page")}
                        >About</a>
                    </li>
                    <li>
                        <a
                            className="dropdown-item"
                            onClick={() => navigate("/contacts-page")}
                        >Contacts</a>
                    </li>
                </ul>
            </div>
        );
    };


    return <RenderByWidth/>;
};