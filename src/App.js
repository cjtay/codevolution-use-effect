import React from 'react';

import './App.css';
import HookCounterOne from './components/HookCounterOne';
import HookTwo from './components/HookTwo';

function App() {
    return (
        <div className="App">
            <HookCounterOne />
            <HookTwo />
        </div>
    );
}

export default App;
