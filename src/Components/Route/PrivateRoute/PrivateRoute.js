import React, { useContext } from 'react'
import { AuthenticationProviderAPI } from '../../ContextAPI/AuthProvider/AuthProvider'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const {user} = useContext(AuthenticationProviderAPI);

    if(!user){
        return <Navigate to="/login"  ></Navigate>
    }
  return   children;
}

export default PrivateRoute