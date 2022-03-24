import React from 'react';
import Test from '../Test/Test';

const Menubar = ({ country }) => {
    return (
        <div>
            <h1>Manubar {country}</h1>
            <Test country={'Uganda'}></Test>
        </div>
    );
};

export default Menubar;