import React from 'react';

import './App.css';
import HookCounterOne from './components/HookCounterOne';
import HookTwo from './components/HookTwo';

function App() {
    return (
        <div className='App'>
            <h1>Updated from macbook</h1>
            <HookCounterOne />
            <HookTwo />
        </div>
    );
}

export default App;
