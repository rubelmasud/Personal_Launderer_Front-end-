import YarpacomLaundryImage from "../../../assets/Images/better life.png";

const YarpacomLaundryServices = () => {
  return (
    <div className="md:flex gap-16 pl-12 pr-6 justify-center items-center bg-slate-200">
      <div className="flex flex-col gap-4">
        <p className="text-[#0C8AD2] text-xl font-serif font-semibold">
          yarpacom Laundry
        </p>
        <h2 className="Service_heading">Your better life is waiting.</h2>
        <div className="font-sans">
          <p>
            Choosing the right laundry equipment is an investment in your
            future, and Yarpacom is here to help.
          </p>
          <p>
            As an employee-owned company, our success depends on yours. We’re
            committed to helping you
          </p>
          <p>
            build a successful business so you can live the life you want to,
            not the life you have to.
          </p>
        </div>
      </div>
      <div className="my-6">
        <img
          className="h-[365px] w-full duration-500 transition-transform transform scale-100 hover:scale-110"
          src={YarpacomLaundryImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default YarpacomLaundryServices;
