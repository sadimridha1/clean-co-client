import { Link, useNavigate } from "react-router-dom";
import login from "../../src/assets/images/login/login.svg";
import { useState } from "react";
import UseAuth from "../hooks/UseAuth";
import toast from "react-hot-toast";
const Register = () => {
    const { createUser } = UseAuth()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleRegister = async (e) => {
       e.preventDefault()
       console.log(name, email, password);
        // const toastIDRegister = toast.loading('Loading')

       try {
        await createUser(email, password)
        toast.success('Register Successfully')
        navigate('/login')
       } catch (error) {
        toast.error(error.message)
       }
    } 
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-10">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#FF3811]">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-3xl text-center text-white font-bold ">Sing Up</h1>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-white">name</span>
                            </label>
                            <input type="name" onBlur={(e) => setName(e.target.value) } placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" onBlur={(e) => setEmail(e.target.value)} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Confirm Password</span>
                            </label>
                            <input type="password" onBlur={(e) => setPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white text-xl">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="btn hover:bg-blue-700 hover:text-white">Sing Up</button> */}
                            <input className="btn hover:bg-blue-700 hover:text-white" type="submit" value="Sing Up" />
                        </div>
                    </form>
                    <h1 className="text-center text-xl my-5">Allreay have an account? <Link to='/login' className="text-white font-bold ">LogIn</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Register;