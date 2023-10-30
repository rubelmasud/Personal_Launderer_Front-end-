import backgroundViedo from "../../../assets/Viedo/istockphoto-1744065353-640_adpp_is.mp4";
import { useEffect, useRef } from "react";
import "./Banner.css";

const VideoBanner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="banner">
      <video
        autoPlay
        loop
        muted
        playsInline
        ref={videoRef}
        className="background-video"
      >
        <source src={backgroundViedo} type="video/mp4" />
      </video>
      <div className="banner_content  absolute top-0 text-center  mx-auto w-full h-[733px]">
        <div className="w-3/4 mx-auto text-white absolute top-48 left-48 items-center flex flex-col gap-6">
          <h1 className="text-7xl font-extrabold Text-Color">
            Your Personal Launderer
          </h1>
          <p className="text-xl font-semibold mx-16">
            Yarpacom USA is ready to pick up your laundry at your Home, Office
            or Airport Laundry Stations and return them at your desired time.
          </p>

          <button className="Primary_btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
