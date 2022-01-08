import React from 'react';
import './cart.scss';
import {CartCircle} from "./cart-circle";

export const Cart = ({width}) => {
    return (
        <div className="dropdown">
            {
                width > 650 && <CartCircle/>
            }
            {
                width < 478 && <CartCircle/>
            }
            <div className="price">
                <p>200$</p>
            </div>
            <div
                className="triangle-button"
                data-bs-toggle="dropdown"
            />

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                <li>
                    <a className="dropdown-item">Action</a>
                </li>
                <li>
                    <a className="dropdown-item">Another action</a>
                </li>
                <li>
                    <a className="dropdown-item">Something else here</a>
                </li>
            </ul>
        </div>
    );
};