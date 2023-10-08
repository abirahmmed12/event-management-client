import { Link } from 'react-router-dom';
import { AuthContext } from '../../Aurhprovider/Authprovider';
import { useContext, useState } from 'react';

const Registration = () => {
    const { createuser } = useContext(AuthContext);
    const [rgerror, setrgerror] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(email, password, name);
        setrgerror('')
        setRegistrationSuccess('')
        if(!/[A_Z]/.test(password)){
            setrgerror('At least One Uppercase') 
            return

        } 

        try {
            await createuser(email, password);
            console.log('Registration successful');
            setRegistrationSuccess(true); 
        } catch (error) {
            console.error(error);
            setrgerror(error.message);
        }
    };

    return (
        <div className='mt-10'>
            <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className=" flex justify-center mx-auto">
                    <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                </div>

                <form onSubmit={handleRegister} className="mt-6">
                    <div>
                        <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">Name</label>
                        <input
                            type="text"
                            placeholder='Name'
                            name='text'
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div>
                        <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                        <input
                            type="text"
                            placeholder='Email'
                            name='email'
                            required
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                        </div>

                        <input
                            type="password"
                            placeholder='Password'
                            name='password'
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mt-6">
                        <button
                            className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                {rgerror && <p className='text-red-700 m-auto'>{rgerror}</p>}
                {registrationSuccess && <p className='text-green-700 m-auto'>Registration successful!</p>}

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>
                    <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                        or Sign Up with Social Media
                    </a>
                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                </div>

                <div className="flex items-center mt-6 -mx-2">
                    <button
                        type="button"
                        className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
                    >
                        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                        </svg>

                        <span className="hidden mx-2 sm:inline">Sign Up with Google</span>
                    </button>
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-400"> Already have an account? <Link to={'/login'} className="font-medium text-gray-700 dark:text-gray-200 hover:underline"> LogIn</Link></p>
            </div>
        </div>
    );
};

export default Registration;
