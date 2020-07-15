import React, { useState, useEffect } from 'react';

function HookThree() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        //cleanup function
        return () => {
            clearInterval(interval);
        };
    }, []);
    // if we use prevCount, there is no need to set dependency for count

    useEffect(() => {
        console.log(count);
    }, [count]);

    return (
        <div>
            <h1>
                React Hooks Tutorial 10/11 - useEffect with cleanup and
                dependencies
            </h1>
            <h3>{count}</h3>
        </div>
    );
}

export default HookThree;
