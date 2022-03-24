import React, { useState } from 'react';

const Test = () => {
    const [count, setCount] = useState(11);

    console.log(count);
    setCount(22);

    console.log(count);
    return (
        <div>
            <h2>This is Test</h2>
            <div className="count mt-5">;
                <button onClick={count} className='ms-3 p-3'>+</button>
                <button className='ms-3 p-3'>-</button>
            </div>
        </div>
    );
};

export default Test;