import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';


const Nave = () => {

    const { user, logOut } = useContext(AuthContext);

    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    let [changeText, setChangeText] = useState(true);
    const handleChange = () => {
        setChangeText(!changeText);
    }

    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl text-white">
                    
                    <span className=' bg-rose-700 pr-2 pl-3 py-2 rounded-md'> Review</span> <span className='bg-purple-700 pl-2 pr-3 py-2 rounded-md'>Viewer</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    {
                        user?.uid
                            ?
                            <>
                                <ul className="menu menu-horizontal p-0" >
                                    <li><Link to='/allreviews'>My Reviews</Link></li>
                                    <li><Link to='/addedservice'>Add Service</Link></li>
                                </ul>
                            </>
                            :
                            <> </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid
                        ?
                        <>
                            <div className='mr-5 flex'>
                                {user?.photoURL ? <img className="h-7 w-7 ml-2 rounded-full" src={user.photoURL}  ></img> : <p></p>}
                            </div>
                            <Link onClick={handelLogOut} to='' className="btn bg-rose-700 ml-5">Log Out</Link>
                        </>
                        :
                        <Link to='/login' className="btn bg-rose-700">LogIn</Link>
                }
            </div>
        </div>
    );
};

export default Nave;