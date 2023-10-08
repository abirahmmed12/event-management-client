import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Components/ServicesSection/ServiceCard';


const NavBarService = () => {
    const navservice = useLoaderData();
    console.log(navservice);

    return (
        <div className="mt-20 max-w-screen-xl m-auto">
             <h1 className="md:text-4xl text-2xl font-bold text-center mb-6">Let’s Plan Your Next Event Together</h1>
            
           <div className="grid md:grid-cols-2 gap-5  ">

          
            {navservice.map((service) => (
               <ServiceCard key={service.id} service={service} ></ServiceCard>
            ))}
             </div>
            
        </div>
    );
};

export default NavBarService;
