import React from 'react';
import './Menubar.css'

const Menubar = ({ count }) => {
    return (
        <div>
            <div className="container py-5 mx-auto">
                <div className="d-flex justify-content-around align-items-center">
                    <div className="container col-md-2 mx-auto">
                        <h2 className='hover-effect'>LOGO</h2>
                    </div>
                    <div className="container col-md-9 menu-container d-flex justify-content-end mx-auto">
                        <li className='items me-4 p-2 hover-effect'>Home</li>
                        <li className='items me-4 p-2 hover-effect'>Contact</li>
                        <li className='items me-4 p-2 hover-effect'>Cart <sup>{count}</sup></li>
                        <li className='items me-4 p-2 hover-effect'>Login</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;