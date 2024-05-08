import { Route, Routes, useLocation } from "react-router-dom";
import Hero from "./Pages/Hero";
import Pattern from "./assets/pattern.jpg";
import Success from "./Pages/Success";
import Login from "./Pages/Login";

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      {isHomePage && (
        <div className="flex flex-row items-center justify-end absolute -z-10 translate-y-[23rem] top-0 right-0">
          <img src={Pattern} className="w-[45%]" alt="pattern" />
        </div>
      )}
      <div className="my-6 mx-6 scroll-smooth">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-success" element={<Success />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
