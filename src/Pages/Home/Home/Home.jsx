import VideoBanner from "../Banner/Banner";
import Elementor from "../ElementorSection/Elementor";
import Facilities from "../FacilitiesSection/Facilities";
import RoomManagement from "../Services/RoomManagement";
import YarpacomLaundryServices from "../Services/YarpacomLaundryServices";
import LaundryControl from "../Services/LaundryControl";
import LaundryService from "../Services/LaundryService";

const Home = () => {
  return (
    <div className="Primary_font">
      <VideoBanner />
      <RoomManagement />
      <LaundryService />
      <YarpacomLaundryServices />
      <LaundryControl />
      <Elementor />
      <Facilities />
    </div>
  );
};

export default Home;
