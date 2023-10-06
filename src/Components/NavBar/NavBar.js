import React, { useContext } from 'react'
import './NavBar.css'

import { HiOutlineMailOpen } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import logo from '../../assetes/uni.jpg'
import { Link } from 'react-router-dom';
import { AuthenticationProviderAPI } from '../ContextAPI/AuthProvider/AuthProvider';

function NavBar() {

    const { user,logOut } = useContext(AuthenticationProviderAPI);

      const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(e=>console.log(e))
      }
    return (
        <div >
            <div className=' bg-sky-950 flex justify-between'>
                <div className='p-5	text-slate-200	flex'>
                    <div className='flex text-xl ps-2'>
                        <HiOutlineMailOpen className='text-3xl pe-2	'></HiOutlineMailOpen>
                        <p>sudiptadeysd06@gmail.com</p>
                    </div>
                    <div className='flex text-xl ps-2 ps-5'>
                        <BsTelephone className='text-3xl pe-2	'></BsTelephone>
                        <p>+8801840036426</p>
                    </div>
                </div>
                <div className='flex '>
                    <p className='p-6 text-white text-xl'>Alumni</p>
                    <p className='p-6 text-white text-xl'>Calendar</p>
                    <p className='p-6 text-white text-xl'> Portal </p>
                    <button className='bg-emerald-500	ps-5 pe-5 me-4 text-white	text-xl '>Support..!</button>
                </div>
            </div>
            <div className='flex justify-between ' >
                <div className='flex'>
                    <img src={logo} className=' logoImage' alt="" />
                    <h1 className='font-bold	mt-5 ms-5 text-5xl	'><span className='text-sky-950 	'>Sudipta</span> Univarsity</h1>
                </div>
                <div className='pt-10 text-xl flex'>
                    <Link className='p-3' to='/'>Home</Link>
                    <Link className='p-3' to='/course'>Course</Link>
                    <Link className='p-3' to='/blog'>Blog</Link>
                    {
                        user?.uid ?
                            <> 
                            <img src={user?.photoURL} className='ProfileImage	rounded-lg	'></img>
                            <span>{user?.displayName}</span>
                                <button onClick={handleLogOut} className='border-2	p-3 ms-3 mb-2 me-4 '>LogOut</button>

                            </>
                            :
                            <>
                                <Link className='p-3' to='/login'>Login</Link>

                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar