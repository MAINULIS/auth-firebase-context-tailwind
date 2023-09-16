import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProviders';

const Register = () => {
    const [error,setError] = useState('');
    const [success, setSuccess] = useState('');
const {createUser} = useContext(AuthContext);

    const handleRegister = event =>{
        event.preventDefault();
        setError('');
        setSuccess('');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email,password)

        createUser(email, password)
        .then(result =>{
            const newUser = result.user;
            console.log(newUser)
            form.reset();
            setSuccess('User successfully registered')
        }) 
        .catch(error =>{
            console.log(error.message)
            setError(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-2xl lg:text-3xl font-bold">Please Register !</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
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
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <p className='text-red-600'>{error}</p>
                        <p className='text-success'> {success}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary hover:bg-fuchsia-800">Register</button>
                        </div>
                        <Link to="/login" className='text-xs'>Already have an account? please<button className="btn btn-active btn-link text-xs ">Login</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;