import React, { useState } from 'react';

const Test = () => {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <h1>{number}</h1>
            <h2>This is Test</h2>
            <div number={number} className="count mt-5">;
                <button onClick={() => setNumber(number + 1)} className='ms-3 p-3'>+</button>
                <button onClick={() => setNumber(number - 1)} className='ms-3 p-3'>-</button>
            </div>
        </div>
    );
};

export default Test;