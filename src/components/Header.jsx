import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProviders';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content justify-between">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <ul>
                    <li>
                        <NavLink className="btn btn-ghost normal-case text-xl" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="btn btn-ghost normal-case text-xl" to="/orders">Orders</NavLink>
                    </li>
                    {user && <li>
                        <NavLink className="btn btn-ghost normal-case text-xl" to="/profile">Profile</NavLink>
                    </li>}
                    <li>
                        <NavLink className="btn btn-ghost normal-case text-xl" to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink className="btn btn-ghost normal-case text-xl" to="/register">Register</NavLink>
                    </li>
                    {
                        user ? <><span>{user.email}</span>
                            <button onClick={handleLogOut} className="btn btn-xs">LogOut</button>

                        </> :
                            <Link to="/login">Login</Link>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Header;