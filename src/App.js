import React from 'react';

import './App.css';
import HookCounterOne from './components/HookCounterOne';
import HookTwo from './components/HookTwo';
import HookThree from './components/HookThree';
import HookFour from './components/HookFour';
import HookFive from './components/HookFive';

function App() {
    return (
        <div className='App'>
            <p>note: select appropriate component by commenting in or out</p>
            <HookCounterOne />
            <HookTwo />
            <HookThree />
            <HookFour />
            <HookFive />
        </div>
    );
}

export default App;
