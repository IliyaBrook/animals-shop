import React from 'react';
import './logo.scss';

export const Logo = ({width}) => {
    const RenderByWidth = () => {
        return width > 572 && (
            <div className="logo">
                <div className="navbar-logoSquare">
                    <img
                        src="/images/nav-bar-logo/rectangle-logo.svg"
                        alt="rectangle-logo"
                    />
                    <div className="logo-pow-img">
                        <img
                            src="/images/nav-bar-logo/logo-pow.svg"
                            alt="pow"/>
                    </div>
                </div>
                <div className="logo-title">
                    <p>HAPPY PET</p>
                </div>
            </div>
        );
    };

    return <RenderByWidth/>;
};