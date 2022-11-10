import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';
import { Link, } from 'react-router-dom';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
    
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            alert('SingUp SuccessFully')
            form.reset();
        })
        .catch( error => {console.error(error)
         alert(error.message)
        });
    }
  

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-purple-700">Register Here !!</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label classNam
