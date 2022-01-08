import React from 'react';
import './animals-page.scss';
import {Animals} from "../../components/animals/animals";


export const AnimalsPage = () => {
    return (
        <div className="animals-page-wrapper">
            <h1>animals-page</h1>
            <div className="animals-components-wrapper">
                <Animals/>
                <Animals/>
                <Animals/>
                <Animals/>
                <Animals/>
                <Animals/>
                <Animals/>
            </div>
        </div>
    );
};