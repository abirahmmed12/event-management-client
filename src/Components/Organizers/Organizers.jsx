import React from 'react';

const OrganizerCard = ({ name, image }) => (
  <div data-aos="fade-right"
  data-aos-offset="300"
  data-aos-easing="ease-in-sine" className="relative  md:flex w-80 p-5 md:mr-10 md:ml-0    ml-12 md:flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="relative mx-4 mt-4 h-48 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <img src={image} alt="profile-picture" />
    </div>
    <div className=" text-center">
      <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        {name}
      </h4>
      <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
        CEO / Co-Founder
      </p>
    </div>
    <div className="md:flex justify-center gap-7  pt-2">
     
    </div>
  </div>
);

const Organizers = () => {
  const organizers = [
    {
      name: 'Mridula',
      image: 'https://i.ibb.co/M9Gs143/alisha-rees-1-prxmf0hog7ba387vxo50xfdwnzhz87q5a9v2e3jzak.jpg',
    },
    {
      name: 'Soaib Ahmed',
      image: 'https://i.ibb.co/ZgQ982p/Kylie-prxmbvp1o30ve0rq8bdsm7uldqxxkjacurkssw7818.jpg',
    },
    {
      name: 'Afsana Parvin',
      image: 'https://i.ibb.co/d2V3Yv4/maisie-pst2pmwrqk9r2m8gujdvw4di4xpxiaigyivmo0eooc.jpg',
    },
    {
      name: 'IH Badhon',
      image: 'https://i.ibb.co/q7PH5G2/Ryhs-psbs9hbp7571qzbwqhn8cqow4onxl3ousgcboh7azw.jpg',
    },
  ];

  return (
    <div className="bg-blue-100 py-6">
      <div className="container mx-auto">
        <div className="md:flex justify-center items-center gap-7">
          <div>
            <h1 className="text-4xl font-bold text-center mb-5">Meet Our Creative Event Organizers</h1>
            <h1 className="md:text-xl md:p-0 p-6  font-bold text-center" > Our dedicated team of creative minds and event enthusiasts <br /> is here to make your events truly exceptional . <br /> Get to know the faces behind the magic and passion <br /> that bring your ideas to life.</h1>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {organizers.map((organizer, index) => (
              <OrganizerCard key={index} name={organizer.name} image={organizer.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizers;
