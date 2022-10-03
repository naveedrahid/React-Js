import React from "react";
import {Navigate, Outlet} from 'react-router-dom';

const PrivatComponent = () =>{
    const auth = localStorage.getItem('user');
    const user = auth?<Outlet /> : <Navigate to="/signup" />;
    return user;
}

export default PrivatComponent;