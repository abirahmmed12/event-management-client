import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Aurhprovider/Authprovider';

const Login = () => {
    const { logIn } = useContext(AuthContext);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const location = useLocation();
    const Navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email, password)
            .then(result => {
                console.log(result.user);
                setLoginSuccess(true);
                setLoginError(null);
                Navigate(location?.state ? location.state : '/');
                e.target.reset()
            })
            .catch(error => {
                console.error(error);
                setLoginSuccess(false);
                setLoginError("Invalid email or password. Please try again.");
            });
    };

    return (
        <div className='max-w-screen-xl m-auto  flex  justify-center mt-10'>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                {loginSuccess && !loginError ? (
                    <div className="bg-green-200 p-3 text-green-800 mb-4 rounded-md">
                        Successfully logged in!
                    </div>
                ) : null}
                {loginError ? (
                    <div className="bg-red-200 p-3 text-red-800 mb-4 rounded-md">
                        {loginError}
                    </div>
                ) : null}
                <form onSubmit={handleLogin} className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com"
                            
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            
                        />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Login to your account
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to={'/registration'} className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
