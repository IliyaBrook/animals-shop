import React from 'react';
import './navbar-buttons.scss';
import {useLocation, useNavigate} from "react-router-dom";

export const NavbarButtons = ({width}) => {
    const navigate = useNavigate();
    const buttonActiveStyle = {backgroundColor: "rgba(240, 237, 77, 0.85)"};
    const path = useLocation().pathname;

    const RenderByWidth = () => {
        return width > 476 && (
            <div className="navbar-buttons">
                <button
                    onClick={() => navigate("/")}
                    style={path === "/" ? buttonActiveStyle : null}
                    className="btn-nav-bar"
                >Main
                </button>

                <button
                    onClick={() => navigate("/animals-page")}
                    style={path === "/animals-page" ? buttonActiveStyle : null}
                    className="btn-nav-bar"
                >Animals
                </button>

                <button
                    onClick={() => navigate("/about-page")}
                    style={path === "/about-page" ? buttonActiveStyle : null}
                    className="btn-nav-bar"
                >About
                </button>

                <button
                    onClick={() => navigate("/contacts-page")}
                    style={path === "/contacts-page" ? buttonActiveStyle : null}
                    className="btn-nav-bar"
                >Contacts
                </button>
            </div>
        );
    };

    return <RenderByWidth/>;
};