import React, { useEffect, useState } from 'react';

import './Component.css';

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');

    const clickHandler = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const changeHandler = (e) => {
        setValue({
            ...value,
            [e.target.id]: [e.target.value],
        });
    };

    useEffect(() => {
        document.title = `You have clicked ${count} times`;
        console.log('component re-rendered only when state.count is changed');
    }, [count]);

    return (
        <div className='Component'>
            <h1>
                React Hooks Tutorial 7 - useEffect runs after every render -
                componentDidMount and componentDidUpdate
            </h1>
            <button onClick={clickHandler}>Click {count} times</button>
            <input type='text' id='value' onChange={changeHandler} />
        </div>
    );
}

export default HookCounterOne;
