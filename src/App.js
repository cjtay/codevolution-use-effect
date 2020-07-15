import React from 'react';

import './App.css';
import HookCounterOne from './components/HookCounterOne';
import HookTwo from './components/HookTwo';
import HookThree from './components/HookThree';

function App() {
    return (
        <div className='App'>
            <h1>Updated from macbook</h1>
            <HookCounterOne />
            <HookTwo />
            <HookThree />
        </div>
    );
}

export default App;
