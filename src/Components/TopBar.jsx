import logo from "../assets/logo.svg";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

const TopBar = () => {
  const showCloseButton = location.pathname !== "/login-success";
  return (
    <div>
      <div className="flex flex-row justify-between ">
        <img src={logo} alt="logo" className="pl-6"/>
        {showCloseButton && (
          <Link to={"/"}>
            <div className="w-14 h-14 border-whiteshGray border-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-whiteshGray group">
              <CgClose
                size={28}
                className="group-hover:scale-75 ease-out duration-300"
              />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopBar;
