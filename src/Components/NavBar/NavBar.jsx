

import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Aurhprovider/Authprovider';
import { useContext } from 'react';


const NavBar = () => {
  const { user,logOut } = useContext(AuthContext)
  const handleSignot = () => {
    logOut()
     .then()
     .catch()
  }
 
  
  const Navlinks = (
    <>
      <li>
        <NavLink to={'/'} className='italic text-lg text-gray-800 hover:text-blue-600'>
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={'/servicecard'} className='italic text-lg text-gray-800 hover:text-blue-600'>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to={'/gallery'} className='italic text-lg text-gray-800 hover:text-blue-600'>
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink to={'/login'} className='italic text-lg text-gray-800 hover:text-blue-600'>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to={'/registration'} className='italic text-lg text-gray-800 hover:text-blue-600'>
          Registration
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar p-5 shadow-2xl ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Navlinks}
          </ul>
        </div>
        <img
          className='w-32'
          src="https://i.ibb.co/KGH3W7b/pngwing-com.png"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Navlinks}</ul>
      </div>
      <div className="navbar-end">
       {
        user ? <button onClick={handleSignot} className="btn bg-blue-600 text-white hover:bg-blue-800">Log out</button> :  <Link to={'/login'}>
        <button className="btn bg-blue-600 text-white hover:bg-blue-800">Login</button>
        </Link>
       }
          
          
        
        
        
      </div>
    </div>
  );
};

export default NavBar;
