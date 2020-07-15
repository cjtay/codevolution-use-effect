import React, { useState, useEffect } from 'react';

import './Component.css';

import './Component.css';

function HookTwo() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log('logMousePosition function called when mouse move');
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        console.log('useEffect called only once on Initial render');
        window.addEventListener('mousemove', logMousePosition);
    }, []);

    return (
        <div className='Component'>
            <h1>
                React Hooks Tutorial 9 - useEffect only once - similar to
                componentDidMount
            </h1>
            <h3>
                X - {x} Y - {y}
            </h3>
        </div>
    );
}

export default HookTwo;
