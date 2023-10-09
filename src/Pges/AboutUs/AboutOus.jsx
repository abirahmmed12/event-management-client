import React from 'react';
import { AiFillGift, AiFillBank, AiFillCheckCircle } from 'react-icons/ai';

const AboutUs = () => {
  const containerStyle = {
    backgroundImage: `url('https://i.ibb.co/41GZcXy/runaway-bride-and-groom-stories-29-63fddc64a4820-700.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '500px',
  };

  return (
    <div>
      <section className="py-16">
        <div data-aos="fade-up"
     data-aos-duration="3000" className=" container mx-auto border border-gray-300 rounded-lg p-6" style={containerStyle}>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-5xl font-semibold">About Us</h2>
            <p className="mt-4 text-xl">
              Welcome to our wedding website! We are thrilled to share our love story with you.
            </p>
          </div>
          <div className="mt-12 max-w-3xl mx-auto text-white">
            <h3 className="text-4xl font-semibold flex justify-center">Our Story</h3>
            <p className="text-xl mt-4">
              We met on a beautiful summer day and instantly knew we were meant to be together.
              After several years of adventures, we decided to take the next step and tie the knot.
              Join us on this special journey as we celebrate our love and commitment to each other.
            </p>
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto p-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-semibold text-gray-800">Reasons to Choose Us</h2>
            <p className="mt-4 text-gray-600">
              Discover why we are the perfect choice for your special day.
            </p>
          </div>
          <div  data-aos="zoom-out-left" className="lg:flex text-center gap-5 mt-12 max-w-3xl mx-auto text-gray-800">
            <div className="mb-8">
              <AiFillGift  data-aos="zoom-out-down"
     data-aos-anchor-placement="top-center" className="flex mx-auto text-4xl" />
              <h3 className="text-4xl font-semibold"> Exceptional Service</h3>
              <p className="mt-2">
                Our team is dedicated to providing exceptional service and making your wedding day unforgettable.
              </p>
            </div>
            <div className="mb-8">
              <AiFillBank  data-aos="zoom-out-down"
     data-aos-anchor-placement="top-center"className="text-4xl m-auto" />
              <h3 className="text-4xl font-semibold text-center"> Beautiful Venues</h3>
              <p className="mt-2">
                We offer a selection of stunning venues to choose from, ensuring a picturesque backdrop for your celebration.
              </p>
            </div>
            <div className="mb-8">
              <AiFillCheckCircle  data-aos="zoom-out-down"
     data-aos-anchor-placement="top-center" className="text-4xl m-auto" />
              <h3 className="text-4xl font-semibold"> Customizable Packages</h3>
              <p className="mt-2">
                We understand that every wedding is unique, so we offer customizable packages to suit your preferences.
              </p>
            </div>
           
          </div>
        </div>
      </section>

 
      < section data-aos="fade-up"
     data-aos-duration="3000" className="py-16">
        <div className=" container mx-auto p-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-semibold text-gray-800">Testimonials</h2>
            <p className="mt-4 text-gray-600">
              Read what our happy couples have to say about their experience with us.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           
            <div className="bg-emerald-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-800 text-xl mb-4">
                "Our wedding was absolutely magical, and it wouldn't have been possible without the incredible team at [Your Wedding Venue]."
              </p>
              <p className="text-gray-600">
                - John and Sarah
              </p>
            </div>

           
            <div className="bg-emerald-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-800 text-xl mb-4">
                "The attention to detail and the beautiful surroundings made our special day unforgettable. Thank you!"
              </p>
              <p className="text-gray-600">
                - Michael and Emily
              </p>
            </div>

          
            <div className="bg-emerald-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-800 text-xl mb-4">
                "We were blown away by the customizable packages and the flexibility they offered. Our wedding was perfect."
              </p>
              <p className="text-gray-600">
                - David and Lisa
              </p>
            </div>
           
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-semibold text-gray-800">
            Our Happy Clients
          </h2>
          <p className="mt-4 text-gray-600">
            Hear what our clients have to say about their unforgettable
            weddings.
          </p>
          <div className="flex flex-wrap justify-center mt-12">
           
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
              <img
                src="https://i.ibb.co/M9Gs143/alisha-rees-1-prxmf0hog7ba387vxo50xfdwnzhz87q5a9v2e3jzak.jpg"
                alt="Client 1"
                className="w-full h-48 object-cover"
              />
              <div className="px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Emily & John
                </h3>
                <p className="mt-2 text-gray-600">
                  "Our wedding was a dream come true. Thank you for making it
                  so special."
                </p>
              </div>
            </div>

          
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
              <img
                src="https://i.ibb.co/ZgQ982p/Kylie-prxmbvp1o30ve0rq8bdsm7uldqxxkjacurkssw7818.jpg"
                alt="Client 2"
                className="w-full h-48 object-cover"
              />
              <div className="px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Sarah & Michael
                </h3>
                <p className="mt-2 text-gray-600">
                  "The best day of our lives. We couldn't be happier."
                </p>
              </div>
            </div>

          
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
              <img
                src="https://i.ibb.co/q7PH5G2/Ryhs-psbs9hbp7571qzbwqhn8cqow4onxl3ousgcboh7azw.jpg"
                alt="Client 3"
                className="w-full h-48 object-cover"
              />
              <div className="px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Jessica & Mark
                </h3>
                <p className="mt-2 text-gray-600">
                  "Thank you for creating memories that will last a lifetime."
                </p>
              </div>
            </div>

           
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
