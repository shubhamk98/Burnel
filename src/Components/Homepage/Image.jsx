import HeroImage from "../../assets/HeroImage.jpg";
import { HiMiniRocketLaunch } from "react-icons/hi2";

const Image = () => {
  return (
    <div className="relative ">
      <img
        src={HeroImage}
        alt="Image of a Girl"
        className="w-[480px] translate-x-40"
      />
      <div className="absolute top-1/2 transform translate-x-8 -translate-y-3/4">
        <div className="text-darkGrey bg-white rounded-3xl w-[250px] p-6 hover:scale-105 ease-in-out delay-150 shadow-md leading-tight">
          <p className="text-[64px] font-medium font-grace">40%</p>
          <p className="text-[16px] font-medium font-manRope text-textLight leading-tight">
            Achieved reduction in project execution time by optimising team
            availability
          </p>
        </div>
      </div>
      <div className="absolute bottom-4 left-4  translate-x-24 -translate-y-11 hover:scale-105 ease-in-out delay-150">
        <div className="text-darkGrey bg-white p-4 rounded-full shadow-md ">
          <div className="flex flex-row gap-2 items-center ">
            <div className="w-12 h-12 bg-whiteshGray rounded-full flex items-center justify-center p-3">
              <HiMiniRocketLaunch color="green" size={30} />
            </div>
            <div className="leading-tight">
              <p className="font-grace font-semibold text-[24px]">10 Days</p>
              <p className="font-medium font-manRope text-[16px] text-textLight mr-2"> Staff Deployment</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 w-[260px]  ">
        <div className="text-white bg-darkGreen p-6 rounded-3xl hover:scale-105 ease-in-out delay-150 translate-x-52 translate-y-12 ">
          <div className="flex flex-row gap-3 items-baseline leading-tight">
            <p className="text-[60px] font-grace">$0.5</p>
            <p className="text-[23px] font-grace text-textLight">MILLION</p>
          </div>
          <p className=" leading-tight text-textLight">
            Reduced client expenses by saving on hiring and employee costs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Image;
