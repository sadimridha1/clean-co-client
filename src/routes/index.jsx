import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminLayout from "../components/AdminLayout";
import AddService from "../pages/AddService";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }, 
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }, 
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AddService />
            }
        ]
    }
])

export default router;