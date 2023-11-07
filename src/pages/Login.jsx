import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import LoginImg from "../../src/assets/images/login/login.svg"
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, user} = UseAuth()
    const navigate = useNavigate()

   const handleLogin = async(e) => {
     e.preventDefault()

     const toastID = toast.loading('Loading in')
     
     try {
        await login(email, password)
        toast.success('Login successfully', { id: toastID})
        navigate("/")
     } catch (error) {
        toast.error(error.message, {  id: toastID})
     }
   }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-10">
                    <img src={LoginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#FF3811]">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl text-center text-white font-bold ">Login</h1>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" onBlur={(e) => setEmail(e.target.value)} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" onBlur={(e) => setPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
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