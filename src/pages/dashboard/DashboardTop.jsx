import React from "react";
import {
  FaPlus,
  FaUserFriends,
  FaDollarSign,
  FaShoppingCart,
  FaHeart,
  FaChartLine,
  FaInfoCircle,
  FaEnvelope,
  FaUndo,
  FaBell,
  FaEdit,
  FaClipboard,
  FaCheckCircle,
  FaList,
  FaBook,
  FaGlobe,
  FaFolder,
} from "react-icons/fa";

const icons = [
  { id: 1, icon: <FaPlus />, color: "bg-blue-600", label: "Add" },
  { id: 2, icon: <FaUserFriends />, color: "bg-red-500", label: "Users" },
  { id: 3, icon: <FaDollarSign />, color: "bg-green-600", label: "Revenue" },
  { id: 4, icon: <FaShoppingCart />, color: "bg-cyan-500", label: "Cart" },
  { id: 5, icon: <FaHeart />, color: "bg-pink-500", label: "Favorites" },
  { id: 6, icon: <FaChartLine />, color: "bg-yellow-500", label: "Stats" },
  { id: 7, icon: <FaInfoCircle />, color: "bg-black", label: "Info" },
  { id: 8, icon: <FaEnvelope />, color: "bg-blue-700", label: "Messages" },
  { id: 9, icon: <FaUndo />, color: "bg-red-600", label: "Undo" },
  { id: 10, icon: <FaBell />, color: "bg-green-500", label: "Alerts" },
  { id: 11, icon: <FaEdit />, color: "bg-cyan-600", label: "Edit" },
  { id: 12, icon: <FaClipboard />, color: "bg-yellow-400", label: "Tasks" },
  { id: 13, icon: <FaCheckCircle />, color: "bg-green-600", label: "Approved" },
  { id: 14, icon: <FaList />, color: "bg-gray-800", label: "List" },
  { id: 15, icon: <FaBook />, color: "bg-blue-500", label: "Docs" },
  { id: 16, icon: <FaGlobe />, color: "bg-red-500", label: "Global" },
  { id: 17, icon: <FaFolder />, color: "bg-cyan-500", label: "Files" },
];

const DashboardTop = () => {
  return (
    <div className="bg-[#00336e] w-[350px] my-2 mx-auto md:mx-4 md:flex md:justify-center md:w-auto p-2 rounded-sm overflow-x-auto">
      <div className="flex gap-2 whitespace-nowrap min-w-max">
        {icons.map((item) => (
          <div
            key={item.id}
            title={item.label}
            className={`w-10 h-10 ${item.color} text-white rounded-md flex items-center justify-center hover:scale-105 transition-transform duration-200 cursor-pointer`}
            onClick={() => console.log(`${item.label} clicked`)}
          >
            <span className="text-sm">{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardTop;
