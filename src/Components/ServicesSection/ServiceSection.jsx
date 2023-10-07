import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const ServiceSection = () => {
    const [services,setservices]=useState([])
    useEffect(()=>{
fetch('data.json')
.then(res=>res.json())
.then(data => setservices(data))
    },[])
    return (
        <div className="mt-20" >
             <h1 className="md:text-4xl text-2xl font-bold text-center mb-6">Let’s Plan Your Next Event Together</h1>
             <h1  className="md:text-4xl text-2xl font-bold text-center mb-4">Our Services</h1>
           <div className="grid md:grid-cols-2 gap-5  ">
             
           {
                services.map(service=><ServiceCard key={service.id} service={service}></ServiceCard> )
            }
           </div>
             
            
           
        </div>
    );
};

export default ServiceSection;