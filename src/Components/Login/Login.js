import React, { useContext } from 'react'
import './Login.css'
import { Form, Link, Navigate, useNavigate } from 'react-router-dom'
import { Button, Col } from 'react-bootstrap';
import { FaGoogle } from "react-icons/fa6";
import { SiGnuprivacyguard } from "react-icons/si";
import { AuthenticationProviderAPI } from '../ContextAPI/AuthProvider/AuthProvider';
function Login() {

    const {siginUser} = useContext(AuthenticationProviderAPI);
    const navigate = useNavigate()

    const hendleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(  email, password);

        siginUser(email,password)
        .then( res=>{
            const user = res.user;
            console.log(user);
            if(!user.emailVerified){
                navigate('/course')
            }
        })
        .catch(error =>{
            console.error(error)
        })
    }

    const handelLoginWithGoogle = () => {

    }

    return (
        <div>
            <div className='loginBag'>
                <form className='form' onSubmit={hendleLogin}>
                    <div className="mb-3 me" controlId="formGroupEmail">
                        Email address
                        <input type="email" name="email" className="usernameInput ms-4  " placeholder="Enter Username or Email" />
                    </div>
                    <div className="mb-3" controlId="formGroupPassword">
                        Password
                        <input type="password" className="usernameInput ms-6" name="password" placeholder="Password" />
                    </div>
                    <button type='submit' className='bg-teal-400	p-3 rounded'> Submit</button>

                </form>
                <div className='loginWithOther '>
                    <hr />
                    <button className='w-100 rounded p-2 flex bg-cyan-300 hover:bg-sky-950	hover:text-slate-100		' onClick={handelLoginWithGoogle}>
                        <FaGoogle></FaGoogle> <span className='ps-2'>Countinue With Google</span>
                        {/* <Navigate to="/dashboard"></Navigate> */}
                    </button>

              
                <hr />
                <button className='w-100 rounded p-2 flex 	bg-emerald-300	hover:bg-emerald-900	hover:text-slate-50	 ' >
                    <Link className='flex ' to='/register'> <SiGnuprivacyguard></SiGnuprivacyguard> <span className='ps-2 '>Register</span></Link>
                    {/* <Navigate to="/dashboard"></Navigate> */}
                </button>
            </div>
            </div>

        </div>
    )
}

export default Login