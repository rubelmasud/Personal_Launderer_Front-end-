import Safely from "../../../assets/Icons/icon-removebg-preview.png";
import Comfortable from "../../../assets/Icons/icon2-removebg-preview.png";

const Facilities = () => {
  return (
    <div className="mt-12 p-12 pt-0 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 items-center">
      <div>
        <img
          className=" h-[70px] mx-auto duration-500 transition-transform transform scale-100 hover:scale-110"
          src={Safely}
          alt=""
        />
        <div className="text-center font-sans">
          <h4 className="text-[21px] font-bold my-2">
            {" "}
            Safely lit with 24/7 video monitoring
          </h4>
          <p className="font-semibold">
            Our locations are safe and monitored around the clock for your peace
            of mind.
          </p>
        </div>
      </div>
      <div>
        <div className="text-center font-sans">
          <h4 className="text-[21px] font-bold my-2">
            {" "}
            Cleaner clothes with less detergent
          </h4>
          <p className="font-semibold">
            High-efficiency large-capacity washing machines and soft water
            technology saves you time and money.
          </p>
        </div>
      </div>
      <div>
        <img
          className=" h-[70px] mx-auto duration-500 transition-transform transform scale-100 hover:scale-110"
          src={Comfortable}
          alt=""
        />
        <div className="text-center font-sans">
          <h4 className="text-[21px] font-bold my-2">
            {" "}
            Comfortable, convenient, & always clean
          </h4>
          <p className="font-semibold">
            Free Wifi, USB charging stations, TVs and refreshment options will
            make you feel at home.
          </p>
        </div>
      </div>
      <div>
        <div className="text-center font-sans">
          <h4 className="text-[21px] font-bold my-2">
            {" "}
            1-hour wash & dry plus express services
          </h4>
          <p className="font-semibold">
            High-volume washers and dryers make your trip quick and efficient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
