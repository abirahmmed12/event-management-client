
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Pges/Footer/Footer';

const Root = () => {
    return (
        <div>
           <div className='max-w-screen-xl m-auto '>
           <NavBar></NavBar>
           </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;