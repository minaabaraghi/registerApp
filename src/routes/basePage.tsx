import {Route, Routes} from 'react-router-dom';
import Header from '../pages/Header';
// import React from 'react';
import Welcome from '../pages/welcome';
import DropDown from '../sample/dropDown/dropDown';
import Drawer from '../sample/drawer/drawer';
import AnonymousLayout from '../layouts/AnonymousLayout';
import MainLayout from '../layouts/MainLayout ';
import Login from '../pages/login/login';
import welcome from '../pages/welcome';

export const routes = [
    {
        layout: AnonymousLayout,
        routes: [
            {
                name: 'login',
                title: 'Login page',
                component: Login,
                path: '/login',
                isPublic: true,
            },
        ],
    },
    {
        layout: MainLayout,
        routes: [
            {
                name: 'home',
                title: 'Home page',
                component: welcome,
                path: '/home',
            },
            {
                name: 'users',
                title: 'Users',
                hasSiderLink: true,
                routes: [
                    {
                        name: 'list-users',
                        title: 'List of users',
                        hasSiderLink: true,
                        component: DropDown,
                        path: '/users',
                    },
                    {
                        name: 'create-user',
                        title: 'Add user',
                        hasSiderLink: true,
                        component: Drawer,
                        path: '/users/new',
                    },
                ],
            },
        ],
    },
];
export default function BasePage() {
    return (
        <>
            <Header />
            <br />
            <Routes>
                <Route element={<AnonymousLayout />}>
                    <Route path="/" element={<Welcome />} />
                </Route>
                <Route element={<MainLayout />}>
                    <Route path="/dropDown" element={<DropDown />} />
                    <Route path="/drawer" element={<Drawer />} />
                </Route>
            </Routes>
        </>
    );
}
