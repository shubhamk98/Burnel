import { useState } from "react";
import Arrow from "../../assets/Arrow.png";
import { RiAddLine } from "react-icons/ri";
import { HiMinusSm } from "react-icons/hi";

const QuestionAns = () => {
  const [isOpen, setIsOpen] = useState({});
  const obj = [
    {
      id: 0,
      question: "Do you offer freelancers?",
      answer: "Yes, we offer a diverse pool of freelancers for various tasks.",
    },
    {
      id: 1,
      question:
        "What’s the guarantee that I will be satisfied with the hired talent?",
      answer:
        "We ensure satisfaction by facilitating communication, revisions, and support.",
    },
    {
      id: 2,
      question: "Can I hire multiple talents at once?",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      id: 3,
      question: "Why should I not go to an agency directly?",
      answer:
        "Directly engaging freelancers offers flexibility, cost-effectiveness, and tailored solutions.",
    },
    {
      id: 4,
      question: "Who can help me pick a right skillset and duration for me?",
      answer:
        "Our platform provides guidance, suggestions, and support to match your needs.",
    },
  ];

  console.log(isOpen);

  const toggleFAQ = (id) => {
    setIsOpen((prev) => ({
      ...Object.fromEntries(
        Object.keys(prev).map((key) => [key, key === id ? !prev[id] : false])
      ),
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-auto h-[749px] bg-mintGreen rounded-3xl mt-48 flex flex-row pr-10">
      <div className="flex flex-col gap-16">
        <div className="pl-24 pt-[4rem]">
          <p className="text-[32px] text-green font-grace">
            What’s on your mind
          </p>
          <p className="text-[60px] font-semibold font-manRope">
            Ask Questions
          </p>
        </div>
        <div className="w-[70%] pl-10">
          <img src={Arrow} alt="Arrow" />
        </div>
      </div>
      <div className="w-[75%] mt-24 flex flex-col ">
        {obj.map((val) => (
          <div key={val.id} className="pr-10">
            <p className="text-[20px] font-manRope font-semibold text-darkGrey flex flex-row justify-between items-center pt-7 pb-4">
              {val.question}
              {!isOpen[val.id] ? (
                <RiAddLine
                  className="cursor-pointer"
                  onClick={() => toggleFAQ(val.id)}
                />
              ) : (
                <HiMinusSm
                  className="cursor-pointer"
                  onClick={() => toggleFAQ(val.id)}
                />
              )}
            </p>
            {isOpen[val.id] && (
              <p className="text-[15px] font-manRope text-lightGrey py-4">
                {val.answer}
              </p>
            )}
            {val.id !== 4 && (
              <div className="border-[1px] bg-darkGrey rounded" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionAns;
