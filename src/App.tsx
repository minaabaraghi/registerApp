import './App.css';
import React from 'react';
import Welcome from './pages/welcome';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import BasePage from './routes/basePage';

function App() {
    return (
        <div
            style={{
                marginTop: '5vh',
                display: 'ruby-text',
                height: '100vh',
                maxWidth: '600px',
                textAlign: 'center',
                alignContent: 'center',
                backgroundColor: 'antiquewhite',
                position: 'relative',
                margin: '0% auto 0',
                minHeight: '100vh',
            }}
            className="App"
        >
            <BrowserRouter>
                <BasePage />
            </BrowserRouter>
        </div>
    );
}

export default App;
