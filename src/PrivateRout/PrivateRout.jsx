import React, { useContext } from 'react';
import { AuthContext } from '../Aurhprovider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if (loading){
        return <span className="flex items-center justify-center m-auto  loading loading-bars loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRout;