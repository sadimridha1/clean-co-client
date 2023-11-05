import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className=" w-full lg:max-w-[1200px] mx-auto">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="flex-1 px-2 mx-2">Navbar Title</div>
            <div className="flex-none hidden lg:block">
                <div className="flex gap-5 text-xl">
                    {/* Navbar menu content here */}
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? 'btn bg-pink-600 hover:bg-pink-700 text-white' : 'btn btn-ghost'}>Home</NavLink>

                    <NavLink to='/about' className={({ isActive }) =>
                        isActive ? 'btn bg-pink-600 hover:bg-pink-700 text-white' : 'btn btn-ghost'}>About Us</NavLink>

                    <NavLink to='/contact' className={({ isActive }) =>
                        isActive ? 'btn bg-pink-600 hover:bg-pink-700 text-white' : 'btn btn-ghost'}>Contact</NavLink>

                    <NavLink to='/login' className={({ isActive }) =>
                        isActive ? "btn bg-pink-600 hover:bg-pink-700 text-white" : "btn btn-ghost"}>Login</NavLink>
                        
                    <NavLink to='/register' className={({ isActive }) =>
                        isActive ? "btn bg-pink-600 hover:bg-pink-700 text-white" : "btn btn-ghost"}>Register</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;