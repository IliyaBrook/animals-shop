import React from 'react';
import './animals.scss';

export const Animals = () => {
    return (
        <div className="animals-component-wrapper">
            <h1>Animal</h1>
            <div className="animals-wrapper">
                <div className="animal-wrapper">
                    <div className="animal-square">
                        animal content
                    </div>
                </div>
            </div>
        </div>
    );
};