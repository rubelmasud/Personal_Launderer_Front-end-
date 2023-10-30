import VideoBanner from "../Banner/Banner";
import Elementor from "../ElementorSection/Elementor";
import Facilities from "../FacilitiesSection/Facilities";
// import LaundryService from "../Services/LaundryService";
import RoomManagement from "../Services/RoomManagement";
import YarpacomLaundryServices from "../Services/YarpacomLaundryServices";
import LaundryControl from "../Services/laundryControl";

const Home = () => {
  return (
    <div className="Primary_font">
      <VideoBanner />
      <RoomManagement />
      {/* <LaundryService /> */}
      <YarpacomLaundryServices />
      <LaundryControl />
      <Elementor />
      <Facilities />
    </div>
  );
};

export default Home;
