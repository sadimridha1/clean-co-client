import { Navigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";


const PrivateRoute = ( {children} ) => {
    const { loading, user } = UseAuth()

    if(loading){
        return <span className="loading loading-spinner loading-xs"></span>
    }

    if(!loading && !user?.email){
        return <Navigate to='/login' />
    }

    return children;
};

export default PrivateRoute;