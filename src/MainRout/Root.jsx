
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';

const Root = () => {
    return (
        <div>
           <div className='max-w-screen-xl m-auto '>
           <NavBar></NavBar>
           </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;