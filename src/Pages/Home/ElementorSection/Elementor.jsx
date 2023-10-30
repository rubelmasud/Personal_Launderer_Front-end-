import Trustworthy from "../../../assets/ElementorImages/1-removebg-preview.png";
import Convenient from "../../../assets/ElementorImages/2-removebg-preview.png";
import Quality from "../../../assets/ElementorImages/3-removebg-preview.png";
import Community from "../../../assets/ElementorImages/4-removebg-preview.png";

const Elementor = () => {
  return (
    <div className="w-full h-auto bg-slate-200 p-16">
      <h1 className="text-5xl font-extrabold text-center">
        Why You Will Love yarpacom
      </h1>

      <div className="mt-12  grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
        <div>
          <img
            className=" h-[140px] mx-auto duration-500 transition-transform transform scale-100 hover:scale-110"
            src={Trustworthy}
            alt=""
          />
          <div className="text-center font-sans">
            <h4 className="text-2xl font-bold my-2"> Trustworthy</h4>
            <p className="font-semibold">
              Clothing & Customer Care Teams that are eager to provide you a
              5-star experience.
            </p>
          </div>
        </div>
        <div>
          <img
            className=" h-[150px] mx-auto duration-500 transition-transform transform scale-100 hover:scale-110"
            src={Convenient}
            alt=""
          />
          <div className="text-center font-sans">
            <h4 className="text-2xl font-bold mb-2"> Convenient</h4>
            <p className="font-semibold">
              1 business day turnaround and set it and forget it Laundry Day
              schedule.
            </p>
          </div>
        </div>
        <div>
          <img
            className=" h-[150px] mx-auto duration-500 transition-transform transform scale-100 hover:scale-110"
            src={Quality}
            alt=""
          />
          <div className="text-center font-sans">
            <h4 className="text-2xl font-bold mb-2"> Quality</h4>
            <p className="font-semibold">
              Perfect folding every single time and customized to your
              preferences.
            </p>
          </div>
        </div>
        <div>
          <img
            className=" h-[150px] mx-auto duration-500 transition-transform transform scale-100 hover:scale-110"
            src={Community}
            alt=""
          />
          <div className="text-center font-sans">
            <h4 className="text-2xl font-bold mb-2"> Community</h4>
            <p className="font-semibold">
              Support your local business every time you use Yarpacom. Make an
              impact on your community today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elementor;
