import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
interface boolType {
    isPublic: boolean;
    isAuthorized: boolean;
}
const ProtectedRoute = ({isPublic, isAuthorized}: boolType) => {
    return isPublic || isAuthorized ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
