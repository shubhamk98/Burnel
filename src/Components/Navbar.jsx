import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between border-2 rounded-full p-3 items-center">
      <div className="pl-5">
        <img src={Logo} alt="Logo" className="h-7" />
      </div>
      <div className="flex gap-4">
        <Link to={"/login"}>
          <Button className=" border-2 hover:bg-whiteshGray">
            Get projects
          </Button>
        </Link>
        <Link to={"/login"}>
          <Button className=" bg-darkGrey text-white      hover:bg-lightGrey">
            Onboard Talent
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
