import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Hadear from "./layout/Hadear";
import MenuLeft from "./layout/MenuLeft";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <MenuLeft isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 h-full overflow-y-auto">
        {/* Fixed Header */}
        <div className="sticky top-0 z-10 bg-white shadow-md">
          <Hadear setIsOpen={setIsOpen} />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-[#f2f7fa]">
          <Outlet />
        </div>

        {/* Fixed Footer */}
        <div className="bg-white border-t">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
