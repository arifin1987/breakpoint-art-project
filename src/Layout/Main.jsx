import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="m-4">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
