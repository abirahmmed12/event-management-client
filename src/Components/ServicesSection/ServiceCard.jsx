import { Link } from "react-router-dom";



const ServiceCard = ({ service }) => {
  
  const {id, name, image, price, short_description } = service;

  return (
    <div >
     
     
     <div className="relative mx-auto bg-white bg-opacity-20 bg-cover bg-center md:max-w-screen-lg h-full" data-aos="fade-up"
     data-aos-duration="3000">
      
        <img className="absolute h-full w-full object-cover" src={image} alt={name} />
        <div className="text-white lg:w-1/2">
          <div className="bg-[#e0a4a4] md:w-auto w-52 bg-opacity-95 p-5 opacity-90 md:backdrop-blur-lg  lg:p-12 h-full flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-[25px] font-bold">{short_description}</h2>
            </div>
           <Link to={`/service/${id}`}>
           <button className="mt-6 inline-block rounded-xl border-2 px-10 py-3 font-semibold border-white hover:bg-white hover:text-red-200">Details</button>
           </Link>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default ServiceCard;
