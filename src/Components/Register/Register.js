import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import './Register.css'
import { AuthenticationProviderAPI } from '../ContextAPI/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


function Register() {
  const [accpted, setAccepted] = useState(false)
  const {createUserEmailPass,emailVarify} = useContext(AuthenticationProviderAPI)
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log( name, email, password);

    createUserEmailPass(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      notify();
      emailVarify();
      form.reset()
      
    })
    .catch(error =>{
      console.log(error)
    })

  }


  const handleEmailVerify = ()=>{
    emailVarify()
    .then(()=>{})
    .catch(e=> console.log(e))
  }
  const notify = () => toast.success('Please Verify your email');



  return (
    <div>
      <div className='loginBag '>
        <form onSubmit={handleSubmit} className=' form1'>
          <div className="items-start	 d-block">

            <div sm={3} className=" mb-5 w-100">
              <h5 className='pb-1'>Enter Your Name</h5>

              <input name='name' id="inlineFormInputName" placeholder="Your Name" />
            </div>


            <div className="mb-5 w-100">
              <h5 className='pb-1'>Enter Your Email</h5>


              <input name="email" type="email" id="inlineFormInputName" placeholder="sudipta@gmail.com" />
            </div>


            <div sm={3} className=" w-100 mb-4">
              <h5 className='pb-1'>Enter Your Password</h5>



              <input name="password" id="inlineFormInputName" placeholder="********" />
            </div>




            <div xs="auto" className="submitButton">
              < button type="submit" >Submit</button>
              
            </div>
            <Toaster />
            <div xs="auto" className="">
              <h5 className='text-danger mt-4'>{ }</h5>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Register