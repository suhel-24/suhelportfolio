import Heroimg from "../assets/developerimg.png";
import { MdOutlineDownloadForOffline } from "react-icons/md";

const Hero = () => {
  return (
    <div className="flex h-screen w-full text-white">
      <div className="flex flex-col md:flex-row items-center justify-center md:pt-6 w-full" id="about">
        <div>
          <h2 className="text-3xl font-bold pt-14">Hi,IAM SK.SUHEL</h2>
          <p className=" text-xl">A Full-Stack Developer & Tech Enthusiast </p>
          <div className="flex mt-2 bg-white rounded-lg w-32 h-9 justify-center items-center cursor-pointer text-gray-600">
            <MdOutlineDownloadForOffline size={22} />
            <button>Download&nbsp;CV</button>
          </div>
        </div>
        <div className="px-2 mt-3">
          <img src={Heroimg} alt="hello" className="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
