import LaundryServicesImg from "../../../assets/Images/room management.jpeg";

const LaundryService = () => {
  return (
    <div className="md:flex  pl-12 pr-6 justify-center items-center bg-[#fff]">
      <div className="my-10">
        <img
          className="h-[335px] w-full duration-500 transition-transform transform scale-100 hover:scale-110 "
          src={LaundryServicesImg}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-4 bg-[#fff] z-10 p-10">
        <h1 className="Service_heading">
          Full Services Laundry Room Management
        </h1>
        <div className="text-[23px] font-sans">
          <p>Looking for top quality equipment for your laundry room</p>{" "}
          <p>without the upfront costs? We can help.</p>
        </div>
        <div className="">
          <button className="Primary_btn">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default LaundryService;
