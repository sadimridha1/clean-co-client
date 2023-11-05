import { Link } from "react-router-dom";
import login from "../../src/assets/images/login/login.svg"

const Login = () => {

   const handleLogin = e => {
     const form = e.target
     console.log(form);
   }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-10">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#FF3811]">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl text-center text-white font-bold ">Login</h1>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white text-xl">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn hover:bg-blue-700 hover:text-white" type="submit" value="LogIn" />
                        </div>
                    </form>
                    <h1 className="text-center text-xl my-5">Have an account? <Link to='/register' className="text-white font-bold ">Sing Up</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Login;