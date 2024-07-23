import './App.css';
import React, {useState} from 'react';
import Welcome from './pages/welcome';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import BasePage from './routes/basePage';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
function App() {
    const [mode, setMode] = useState(true);
    const darkTheme = createTheme({
        palette: {
            mode: mode ? 'dark' : 'light',
        },
    });
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
            {!mode ? (
                <DarkModeIcon
                    onClick={() => {
                        setMode(true);
                    }}
                />
            ) : (
                <LightModeIcon
                    onClick={() => {
                        setMode(false);
                    }}
                />
            )}

            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <BrowserRouter>
                    <BasePage />
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
