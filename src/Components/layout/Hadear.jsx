import React from "react";
import { FaUserCircle, FaHeart, FaBars } from "react-icons/fa";
import { IoIosAddCircle, IoIosMail } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";

const icons = [
  { icon: IoIosAddCircle, alt: "Notification", bagColor: "bg-red-500", url: "#", number: 3 },
  { icon: FaHeart, alt: "Plus", bagColor: "bg-green-500", url: "#", number: 1 },
  { icon: IoIosMail, alt: "Doc", bagColor: "bg-blue-500", url: "#", number: 5 },
  { icon: IoDocumentTextOutline, alt: "Message", bagColor: "bg-yellow-500", url: "#", number: 2 },
  { icon: FaUserCircle, alt: "Profile", bagColor: "bg-purple-500", url: "#", number: 1 },
];

const Hadear = ({ setIsOpen }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 bg-[#013471] text-white">
      {/* Left Section - Icons */}
      <div className="hidden md:flex items-center gap-3 flex-wrap">
        {icons.map((icon, index) => (
          <div className="relative" key={index}>
            <button className="relative p-2 rounded hover:scale-110 transition-transform duration-200">
              <span className={`absolute -top-1 -right-1 ${icon.bagColor} text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce`}>
               {icon.number}
              </span>
              <icon.icon className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>
        ))}
      </div>

      {/* Right Section - User Info and Log Out Button */}
      <div className="flex flex-row items-center gap-4 sm:justify-between justify-center">
        <button className="sm:hidden text-2xl" onClick={() => setIsOpen(true)}>
          <FaBars className="hover:rotate-90 transition-transform duration-200" />
        </button>
        <div className="flex items-center gap-2">
          <FaUserCircle className="w-7 h-7 rounded-full" />
        </div>
        <span className="text-sm sm:text-base font-semibold">Admin Name</span>
        <button className="sm:flex-1 sm:order-none order-last bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 absolute md:relative right-4 md:right-auto transition-colors duration-200">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Hadear;

