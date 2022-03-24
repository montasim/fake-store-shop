import React from 'react';

const Test = ({ count }) => {
    return (
        <div>
            <h2>This is Test</h2>
            <div className="count mt-5">
                {count()};
                <button className='ms-3 p-3'>+</button>
                <button className='ms-3 p-3'>-</button>
            </div>
        </div>
    );
};

export default Test;