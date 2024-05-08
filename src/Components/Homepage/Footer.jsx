import copy from "../../assets/Copyright.png";
const Footer = () => {
  return (
    <div className="h-[120px] w-auto bg-mintGreen mt-14 flex flex-row justify-between rounded-3xl items-center p-10">
      <div className="flex flex-row gap-4 items-center">
        <img src={copy} alt="CopyRight" className="w-6 h-6"/>
        <p className="text-[18px] font-manRope text-darkGrey font-medium">Talup 2023. All rights reserved</p>
      </div>
      <div className="text-[18px] font-manRope text-darkGrey underline flex  flex-row gap-6 items-center hover:cursor-pointer">
        <p >Terms & Conditions</p>
        <p >Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
