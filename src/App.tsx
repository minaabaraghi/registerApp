import './App.css';
import React, {useState} from 'react';
import Welcome from './pages/welcome';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import BasePage from './routes/basePage';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {useMediaQuery} from '@mui/material';
import Container from '@mui/material/Container';
function App() {
    const prefer = useMediaQuery('(prefers-color-scheme:dark)');
    const [mode, setMode] = useState(prefer);
    const darkTheme = createTheme({
        palette: {
            mode: mode ? 'dark' : 'light',
        },
    });
    return (
        <Container
            fixed
            sx={{
                maxWidth: '600px !important',
                background: mode ? '#e39fa1' : '#dbc5c6',
            }}
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
        </Container>
    );
}

export default App;
