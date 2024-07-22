import './App.css';
import React from 'react';
import SignalR from './components/signalR';
import Welcome from './pages/welcome';
import {useSelector} from 'react-redux';
import {RootState} from './redux/store';
import {Link, NavLink} from 'react-router-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HeaderTest from './pages/Header';

function App() {
    const signalR = useSelector((state: RootState) => state.msgSlice.msg);
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
                {/* <nav>
          <NavLink to='/'> خانه </NavLink>
          <NavLink to='/About'> درباره </NavLink>
          </nav> */}

                <HeaderTest />
                <br />
                <Routes>
                    <Route path="/" element={<Welcome />} />
                </Routes>
                {/* <SignalR />
            <p>{signalR}</p>
            <Link to="/auth/forgot-password">mm</Link> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
