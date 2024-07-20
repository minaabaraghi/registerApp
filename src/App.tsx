import './App.css';
import SignalR from './components/signalR';
import Welcome from './pages/welcome';
import {useSelector} from 'react-redux';
import {RootState} from './redux/store';
import {Link} from 'react-router-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
function App() {
    const signalR = useSelector((state: RootState) => state.msgSlice.msg);
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                </Routes>
                <SignalR />
                <p>{signalR}</p>
                <Link to="/auth/forgot-password">mm</Link>
            </div>
        </BrowserRouter>
    );
}

export default App;
