import './App.css';
import React from 'react';
import SignalR from './components/signalR';
import {useSelector} from 'react-redux';
import {RootState} from './redux/store';
import {Link} from 'react-router-dom';
function App() {
    const signalR = useSelector((state: RootState) => state.msgSlice.msg);
    return (
        <>
            <SignalR />
            <p>{signalR}</p>
            <Link to="/auth/forgot-password">mm</Link>
        </>
    );
}

export default App;
