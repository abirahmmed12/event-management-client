import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    'https://i.ibb.co/6tf34C6/61a7a6e10ed48c0019e537e8.webp',
    'https://i.ibb.co/z4TCbN8/1501105761974-amportraits-35.webp',
    'https://i.ibb.co/DRXsLfc/eea9b5a5-6400-44e1-bd70-5d1a83748b96-rs-768.webp',
    'https://i.ibb.co/MpScL0z/Tyme-173-600x450.jpg',
    'https://i.ibb.co/6mGR8tR/pexels-photo-758898.jpg',
    'https://i.ibb.co/JdfpGHF/pexels-photo-3916017-1.webp',
   
  ];

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      
      <section className=" max-w-screen-xl m-auto py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-semibold text-gray-800">
            Our Beautiful Memories
          </h2>
          <p className="mt-4 text-gray-600">
            Relive the moments that made our journey truly special.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
            Explore Gallery
          </button>
        </div>
      </section>

      <div className="p-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer relative transform hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => openImage(image)}
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeImage}
        >
          <div className="max-w-screen-lg w-full h-full overflow-hidden">
            <img
              src={selectedImage}
              alt="Selected Image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

     
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-semibold text-gray-800">
            Our Love Story
          </h2>
          <p className="mt-4 text-gray-600">
            Discover how our journey began and the love that continues to grow.
          </p>
          <button className="mt-8 px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300">
            Learn More
          </button>
        </div>
      </section>

      
      
    </div>
  );
};

export default Gallery;
