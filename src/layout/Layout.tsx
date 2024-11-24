import { FC } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout: FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-32">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
