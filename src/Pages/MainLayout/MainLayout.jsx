// MainLayout.js
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import HotelCard from "../../Components/HotelCard/HotelCard";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Footer from "../../Components/Footer/Footer";
import "./MainLayout.css";
import Image1 from "../../Assets/FourPoints.jpg";
import Image2 from "../../Assets/Hotel6.jpg";
import Image3 from "../../Assets/Hotel7.jpg";

// Sample hotel data
const hotelsData = [
  {
    name: "Four Point",
    location: "Abuja",
    price: "$100",
    rating: 4.5,
    description:
    "Ut egestas libero et imperdiet fermentum. Fusce non velit auctor, lobortis ligula a, tempor urna.",
    image: Image1,
  },
  {
    name: "Eko Hotels and Suites",
    location: "Lagos",
    price: "$120",
    rating: 4.2,
    description:
      "Ut egestas libero et imperdiet fermentum. Fusce non velit auctor, lobortis ligula a, tempor urna.",
    image: Image2,
  },
  {
    name: "Transcorp Hilton",
    location: "Abuja",
    price: "$150",
    rating: 4.7,
    description:
    "Ut egestas libero et imperdiet fermentum. Fusce non velit auctor, lobortis ligula a, tempor urna.",
    image: Image3,
  },
  
  // Add more sample data here
];

const MainLayout = () => {
  return (
    <div className='main-layout'>
      <Navbar />
      <Hero />
      <div className='hotel-listing'>
        {hotelsData.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
      {/* <Dashboard /> */}
      <Footer />
    </div>
  );
};

export default MainLayout;
