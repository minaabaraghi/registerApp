import {Route, Routes} from 'react-router-dom';
import HeaderTest from '../pages/Header';
// import React from 'react';
import Welcome from '../pages/welcome';
import DropDown from '../sample/dropDown/dropDown';
import Drawer from '../sample/drawer/drawer';

export default function BasePage() {
    return (
        <>
            <HeaderTest />
            <br />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/dropDown" element={<DropDown />} />
                <Route path="/drawer" element={<Drawer />} />
            </Routes>
        </>
    );
}
