import propTypes from "prop-types"
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Mainlayout = ({ children }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">
                   <Navbar></Navbar>
                </div>
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 gap-5 text-xl w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                   <Sidebar />
                </div>
            </div>
        </div>
    );
};

Mainlayout.propTypes = {
    children: propTypes.node,
}

export default Mainlayout;