import Banner from "../../Components/Banner/Banner";
import Organizers from "../../Components/Organizers/Organizers";
import ServiceSection from "../../Components/ServicesSection/ServiceSection";
import SingleServiceCrad from "../../Components/ServicesSection/singleServiceCrad";


const Home = () => {
    return (
        <div className="max-w-screen-xl m-auto">
            <Banner></Banner>

             
            <ServiceSection></ServiceSection>
            <SingleServiceCrad></SingleServiceCrad>
            <Organizers></Organizers>
        </div>
    );
};

export default Home;