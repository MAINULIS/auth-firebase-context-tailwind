import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProviders';

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const {signIn, signInWithGoogle} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        setError('');
        setSuccess('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            setSuccess('User successfully logged in')
        })
        .catch(error =>{
            console.log(error.message)
            setError(error.message)
        })
    }

    const handleLoginWithGoogle = () =>{
        signInWithGoogle()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess('user successfully logged in')
        })
        .catch(error =>{
            console.error(error)
            setError(error.message)
        }) 
    }

    // control components
    const handlePassword = (e) =>{
        const passwordInput = e.target.value;
        setPassword(passwordInput);
        
       if(!/(?=.*[A-Z])/.test(passwordInput)){
            setPasswordError("use at least one uppercase in your password")
        }
        else if(passwordInput < 6){
            setPasswordError("password must be at least 6 characters")
        }
        else{
            setPasswordError("")
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-2xl lg:text-3xl font-bold">Please Login !</h1>
        
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                           
                            <input type="password" value={password} onChange={handlePassword} name="password" placeholder="password" className={`input input-bordered ${
                                 password
                                 ? passwordError
                                   ? "border-red-500"
                                   : "border-green-500"
                                 : " focus:border-blue-600"
                            }`} required />
                            
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p className='text-red-600'>{error}</p>
                         <p className='text-success'>{success}</p>
                         {passwordError && <span className='text-red-600'>{passwordError}</span>}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary hover:bg-fuchsia-800">Login</button>
                        </div>
                        <Link to="/register" className='text-xs'>New to Auth Master? please<button className="btn btn-active btn-link text-xs ">Register</button>
                        </Link>
                    </form>
                </div>
                <div>
                <button className='btn btn-primary' onClick={handleLoginWithGoogle}>Login With Google</button>
            </div>
            </div>
           
        </div>
    );
};

export default Login;