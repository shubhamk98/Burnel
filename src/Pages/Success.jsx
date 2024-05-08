import { useEffect, useState } from "react";
import TopBar from "../Components/TopBar";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const [redirectCount, setRedirectCount] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (redirectCount === 0) {
        navigate("/");
      } else {
        setRedirectCount((prevCount) => prevCount - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [redirectCount, navigate]);

  return (
    <div className="flex flex-col h-screen justify-center items-start overflow-clip font-manRope">
      <TopBar />
      <div className="flex flex-col justify-center gap-5 items-center text-center mx-52 mt-20 ">
        <FaCheckCircle color="green" size={42}  className="animate-bounce"/>
        <p className="font-grace text-[36px] text-green leading-10">Success Submitted</p>
        <p className="font-semibold text-[52px] leading-10">Congratulations</p>
        <p className="text-[24px] text-textLight ">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>
      </div>
      <p className="flex justify-center items-center m-auto text-textLight">
        Redirecting you to Homepage in 
        <span className="pl-2 font-bold text-darkGrey"> {redirectCount} Seconds</span>
      </p>
    </div>
  );
};

export default Success;
