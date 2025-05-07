import { SiIbeacon } from "react-icons/si";
import { FaCog, FaChevronDown, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdCategory,
  MdDashboard,
  MdAssignmentAdd,
  MdReport,
} from "react-icons/md";

const MenuLeft = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleMenu = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Close sidebar on mobile when a link is clicked
  const handleLinkClick = () => {
    if (window.innerWidth < 640) {
      setIsOpen(false);
    }
  };

  const menuItems = [
    {
      title: "Super Category",
      icon: <MdAssignmentAdd />,
      subItems: [
        {
          title: "Add Super Category",
          icon: <MdCategory />,
          path: "/admin/super-category/add",
        },
        {
          title: "List Super Category",
          icon: <FaArrowRight />,
          path: "/admin/super-category/list",
        },
      ],
    },
    {
      title: "Category",
      icon: <MdAssignmentAdd />,
      subItems: [
        {
          title: "Add & list Category",
          icon: <MdCategory />,
          path: "/admin/category/list",
        },
      ],
    },
    {
      title: "Reports",
      icon: <MdReport />,
      path: "/reports",
    },
    {
      title: "Settings",
      icon: <FaCog />,
      path: "/settings",
    },
  ];

  return (
    <aside
      className={`fixed z-50 top-0 left-0 h-full w-64 flex-shrink-0 bg-[#013471] text-white transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:static sm:flex flex-col`}
    >
      <div className="flex items-center justify-between p-4 bg-[#092a5f]">
        <div className="flex items-center space-x-2">
          <SiIbeacon className="text-2xl" />
          <span className="text-lg font-bold">Slice And Dice</span>
        </div>
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        <Link to="/" onClick={handleLinkClick}>
          <div
            className={`flex items-center space-x-2 border-b border-white/10 pb-3 hover:text-white ${
              location.pathname === "/" ? "font-bold" : ""
            }`}
          >
            <MdDashboard className="text-2xl" />
            <span className="text-lg">Dashboard</span>
          </div>
        </Link>

        {menuItems.map((menuItem, index) => (
          <div key={index} className="space-y-1 border-b border-white/10">
            {menuItem.subItems ? (
              <button
                onClick={() => toggleMenu(index)}
                className={`w-full text-left flex items-center p-2 rounded-lg transition-all ${
                  activeIndex === index ? "font-bold" : "hover:bg-white/20"
                }`}
              >
                <span className="mr-2">{menuItem.icon}</span>
                <span className="text-sm">{menuItem.title}</span>
                <FaChevronDown className="ml-auto" />
              </button>
            ) : (
              <Link to={menuItem.path} onClick={handleLinkClick}>
                <div
                  className={`flex items-center p-2 rounded-lg text-sm transition-all ${
                    location.pathname === menuItem.path
                      ? "font-bold"
                      : "hover:bg-white/20"
                  }`}
                >
                  <span className="mr-2">{menuItem.icon}</span>
                  {menuItem.title}
                </div>
              </Link>
            )}

            {activeIndex === index && menuItem.subItems && (
              <ul className="pl-4 space-y-1 mt-2">
                {menuItem.subItems.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link to={sub.path} onClick={handleLinkClick}>
                      <div
                        className={`flex items-center text-sm p-2 rounded-md transition-all ${
                          location.pathname === sub.path
                            ? "font-bold"
                            : "hover:bg-white/10"
                        }`}
                      >
                        <span className="mr-2">{sub.icon}</span>
                        <span>{sub.title}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default MenuLeft;
