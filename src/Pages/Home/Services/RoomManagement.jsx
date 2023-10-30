import RoomManagementImage from "../../../assets/Images/service-1.jpeg";

const RoomManagement = () => {
  return (
    <div className="md:flex gap-6 pl-12 pr-6 justify-center items-center bg-slate-200">
      <div className="flex flex-col gap-4">
        <h1 className="Service_heading">
          Full Services Laundry Room Management
        </h1>
        <div className="text-[23px] font-sans">
          <p> Looking for top quality equipment for your laundry</p>{" "}
          <p>room without the upfront costs? We can help.</p>
        </div>
        <div className="">
          <button className="Primary_btn">Learn more</button>
        </div>
      </div>
      <div className="my-10">
        <img
          className="h-[335px] w-full duration-500 transition-transform transform scale-100 hover:scale-110"
          src={RoomManagementImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default RoomManagement;
