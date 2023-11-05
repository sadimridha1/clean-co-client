import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="flex flex-col gap-2">
            <NavLink to='/' className={({ isActive }) =>
                isActive ? 'btn btn-primary' : 'btn btn-ghost'}>Home</NavLink>
            <NavLink to='/about' className={({ isActive }) =>
                isActive ? 'btn btn-primary' : 'btn btn-ghost'}>About Us</NavLink>
            <NavLink to='/contact' className={({ isActive }) =>
                isActive ? 'btn btn-primary' : 'btn btn-ghost'}>Contact</NavLink>
            <NavLink to='/login' className={({ isActive }) =>
                isActive ? "btn btn-primary" : "btn btn-ghost"}>Login</NavLink>
            <NavLink to='/register' className={({ isActive }) =>
                isActive ? "btn btn-primary" : "btn btn-ghost"}>Register</NavLink>
        </div>
    );
};

export default Sidebar;