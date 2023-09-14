import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content justify-between">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <ul>
                    <li>
                        <NavLink className="btn btn-ghost normal-case text-xl" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="btn btn-ghost normal-case text-xl" to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink className="btn btn-ghost normal-case text-xl" to="/register">Register</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;