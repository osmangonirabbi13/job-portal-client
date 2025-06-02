import React from "react";
import NavBar from "../Page/Shared/NavBar";
import { Outlet } from "react-router";
import Footer from "../Page/Shared/Footer";

const RootLayouts = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <NavBar />
        <div className="min-h-[calc(100vh-116px)] ">
          <div className="">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayouts;
