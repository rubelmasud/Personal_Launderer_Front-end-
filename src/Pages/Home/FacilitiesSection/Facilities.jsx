import Safely from "../../../assets/Icons/icon-removebg-preview.png";
import Comfortable from "../../../assets/Icons/icon2-removebg-preview.png";
import clothes from "../../../assets/Icons/images-removebg-preview.png";
import wash from "../../../assets/Icons/png-transparent-computer-icons-broom-housekeeping-cleaning-handle-clean-miscellaneous-angle-hand-thumbnail-removebg-preview.png";

const Facility = ({ image, title, description }) => (
  <div className="text-center font-sans">
    <img
      className="h-[70px] mx-auto duration-500 transition-transform transform scale-100 hover:scale-110"
      src={image}
      alt=""
    />
    <h4 className="text-[21px] font-bold my-2">{title}</h4>
    <p className="font-semibold">{description}</p>
  </div>
);

const Facilities = () => {
  return (
    <div className="mt-12 p-12 pt-0 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
      <Facility
        image={Safely}
        title="Safely lit with 24/7 video monitoring"
        description="Our locations are safe and monitored around the clock for your peace of mind."
      />
      <Facility
        image={clothes}
        title="Cleaner clothes with less detergent"
        description="High-efficiency large-capacity washing machines and soft water technology saves you time and money."
      />
      <Facility
        image={Comfortable}
        title="Comfortable, convenient, & always clean"
        description="Free Wifi, USB charging stations, TVs, and refreshment options will make you feel at home."
      />
      <Facility
        image={wash}
        title="1-hour wash & dry plus express services"
        description="High-volume washers and dryers make your trip quick and efficient."
      />
    </div>
  );
};

export default Facilities;
