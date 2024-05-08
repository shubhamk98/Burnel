import { useState, useEffect } from "react";
import Button from "../Button";
import { MdArrowForward } from "react-icons/md";

function Text() {
  const words = [
    {
      id: 0,
      value:
        "Enhance fortune 50 company’s insights teams research capabilities",
    },
    {
      id: 1,
      value: "Fortify Fortune 50 Insights: Empowering Advanced Research Capabilities",
    },
    {
      id: 2,
      value: "Elevate Fortune 50 Insights: Advancing Research Proficiency Capabilities",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="mt-12 w-[400px] text-left">
        <div className="text-4xl font-manRope font-semibold">
          {words[activeIndex].value}
        </div>
        <div className="flex justify-start mt-4">
          {words.map((data, i) => (
            <button
              key={i}
              className={`text-left mx-1 px-[5px] py-[5px] rounded-full bg-whiteshGray mt-14 ${
                activeIndex === i ? "bg-green" : ""
              }`}
              onClick={() => handleClick(i)}
            ></button>
          ))}
        </div>
      </div>
      <div className="mt-28">
        <Button className="flex flex-row gap-2 bg-darkGrey text-white items-center hover:bg-lightGrey">
          Explore more <MdArrowForward />{" "}
        </Button>
      </div>
    </div>
  );
}

export default Text;
