import { NavLink } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const Sidebar = () => {
    const {user, logout} = UseAuth()
    return (
        <div className="flex flex-col gap-2">
            <NavLink to='/' className={({ isActive }) =>
                isActive ? 'btn btn-primary' : 'btn btn-ghost'}>Home</NavLink>

            <NavLink to='/about' className={({ isActive }) =>
                isActive ? 'btn btn-primary' : 'btn btn-ghost'}>About Us</NavLink>

            <NavLink to='/contact' className={({ isActive }) =>
                isActive ? 'btn btn-primary' : 'btn btn-ghost'}>Contact</NavLink>

            {
                user?.email ? <button onClick={logout}>Logout</button> :
                    <NavLink to='/login' className={({ isActive }) =>
                        isActive ? "btn bg-pink-600 hover:bg-pink-700 text-white" : "btn btn-ghost"}>Login</NavLink>

            }
            <NavLink to='/register' className={({ isActive }) =>
                isActive ? "btn btn-primary" : "btn btn-ghost"}>Register</NavLink>
        </div>
    );
};

export default Sidebar;