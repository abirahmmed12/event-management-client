import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Services = () => {
  const servicesdetail = useLoaderData();
  const { id } = useParams();

  const idint = parseInt(id);

  
  const servicedetail = servicesdetail.find(service => service.id === idint);

  if (!servicedetail) {
    return <div>Service not found</div>;
  }

  const backgroundImageStyle = {
    backgroundImage: `url(${servicedetail.image})`, 
  };

  return (
    <div data-aos="fade-right" className="max-w-screen-xl m-auto">
      <div  className="z-30 relative items-center justify-center w-full h-full overflow-auto">
        <div className="inset-0 h-screen bg-cover bg-center" style={backgroundImageStyle}></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-black bg-opacity-75"></div>
        <div className="absolute inset-0  z-30  flex flex-col items-center justify-center">
          <div className="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center" style={backgroundImageStyle}>
            <div className="grid grid-cols-12 gap-1">
              <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                <div className="border-l-4 border-gray-200 py-20 px-5 mx-2 absolute left-0">
                  <p data-aos="zoom-in" className="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center font-semibold">
                    {servicedetail.name}
                  </p>
                </div>
               
                <div className="absolute border-gray-200 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                <div  data-aos="fade-up-left" className="relative bg-[#e0a4a4] h-full md:h-96 w-full bg-opacity-90 rounded-tr-lg rounded-br-lg">
                  <div className="p-8">
                    <p className="text-white text-xs md:text-sm lg:text-xl mb-4">
                      {servicedetail.long_description}
                    </p>
                    <div className="bottom-0 absolute p-2 right-0">
                      <button className="opacity-75 bg-gray-100 hover:bg-[#965959] hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>
                        <span>Reservation:{ servicedetail.price}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
