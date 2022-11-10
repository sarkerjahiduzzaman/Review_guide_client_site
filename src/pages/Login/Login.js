import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/')
        })
        .catch(error => console.error(error))
    }

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, {replace: true});
            })
            .catch(error => console.error(error))
    }
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-purple-700">Login !!</h1>
                    <form onSubmit={handleSubmit}  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to='/signup' className="label-text-alt link link-hover text-purple-700">Register if you haven't already!!</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input onClick={handleSubmit} className="btn btn-primary bg-rose-600" type="submit" value="Login" />
                        </div>
                    </form>
                    <button onClick={handleGoogleSignIn} type="submit" className="btn btn-primary mt-5 bg-rose-600"> Sign Up with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;