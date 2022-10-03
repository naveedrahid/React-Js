import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const Nav = () =>   {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return(
        <>
        {
        auth ?<ul className="ul_nav">
                <li>
                    <Link to="/">Products</Link>
                </li>
                <li>
                    <Link to="/add">Add Products</Link>
                </li>
                <li>
                    <Link to="/update">Update Products</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link onClick={logout} to="/signup">Logout / ({JSON.parse(auth).name})</Link>
                </li>
            </ul>
            : 
            <ul className="ul_nav">
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            }
        </>
    );
}
export default Nav;