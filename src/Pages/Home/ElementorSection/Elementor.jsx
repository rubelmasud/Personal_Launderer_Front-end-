import Trustworthy from "../../../assets/ElementorImages/1-removebg-preview.png";
import Convenient from "../../../assets/ElementorImages/2-removebg-preview.png";
import Quality from "../../../assets/ElementorImages/3-removebg-preview.png";
import Community from "../../../assets/ElementorImages/4-removebg-preview.png";

const Feature = ({ image, title, description }) => (
  <div className="text-center font-sans">
    <img
      className="h-[150px] mx-auto duration-500 transition-transform transform scale-100 hover:scale-110"
      src={image}
      alt=""
    />
    <h4 className="text-2xl font-bold my-2">{title}</h4>
    <p className="font-semibold">{description}</p>
  </div>
);

const Elementor = () => {
  return (
    <div className="w-full h-auto bg-slate-200 p-16">
      <h1 className="text-5xl font-extrabold text-center">
        Why You Will Love yarpacom
      </h1>

      <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
        <Feature
          image={Trustworthy}
          title="Trustworthy"
          description="Clothing & Customer Care Teams that are eager to provide you a 5-star experience."
        />
        <Feature
          image={Convenient}
          title="Convenient"
          description="1 business day turnaround and set it and forget it Laundry Day schedule."
        />
        <Feature
          image={Quality}
          title="Quality"
          description="Perfect folding every single time and customized to your preferences."
        />
        <Feature
          image={Community}
          title="Community"
          description="Support your local business every time you use Yarpacom. Make an impact on your community today!"
        />
      </div>
    </div>
  );
};

export default Elementor;
