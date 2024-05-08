import Footer from "../Components/Homepage/Footer";
import Image from "../Components/Homepage/Image";
import QuestionAns from "../Components/Homepage/QuestionAns";
import SectionOne from "../Components/Homepage/SectionOne";
import Text from "../Components/Homepage/Text";
import Navbar from "../Components/Navbar";

const Hero = () => {
  return (
    <div className="my-6 mx-6 scroll-smooth overflow-auto">
      <Navbar />
      <div className="my-14">
        <SectionOne />
        <div className="flex flex-row mt-24 items-center  m-auto gap-80">
          <Image />
          <Text />
        </div>
        <div>
          <QuestionAns />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
