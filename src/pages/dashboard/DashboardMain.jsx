import React from "react";
import {
  FaShoppingCart,
  FaDollarSign,
  FaChartLine,
  FaInfoCircle,
} from "react-icons/fa";

const cardData = [
  {
    id: 1,
    title: "Dues - Amount: 64,750",
    value: 64750,
    color: "bg-red-500",
    icon: <FaShoppingCart />,
  },
  {
    id: 2,
    title: "Total Income Year",
    value: 200000,
    color: "bg-cyan-500",
    icon: <FaDollarSign />,
  },
  {
    id: 3,
    title: "Income This Month",
    value: 5000,
    color: "bg-green-600",
    icon: <FaChartLine />,
  },
  {
    id: 4,
    title: "Income Today",
    value: 2000,
    color: "bg-blue-600",
    icon: <FaChartLine />,
  },
  {
    id: 5,
    title: "Expense This Month",
    value: 3000,
    color: "bg-emerald-600",
    icon: <FaInfoCircle />,
  },
  {
    id: 6,
    title: "Total Expense Year",
    value: 100000,
    color: "bg-red-500",
    icon: <FaInfoCircle />,
  },
  {
    id: 7,
    title: "Profit This Month",
    value: 10000,
    color: "bg-yellow-500",
    icon: <FaChartLine />,
  },
  {
    id: 8,
    title: "Expense Today",
    value: 500,
    color: "bg-sky-400",
    icon: <FaShoppingCart />,
  },
];

function DashboardMain() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardData.map((card) => (
        <div
          key={card.id}
          className={`relative flex flex-col justify-between rounded-lg text-white p-4 h-32 shadow-md transition-transform hover:scale-105 cursor-pointer ${card.color}`}
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">
                {card.value.toLocaleString()}
              </h2>
              <p className="text-sm">{card.title}</p>
            </div>
            <div className="text-6xl text-black/20">{card.icon}</div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-black/5 px-4 py-1 flex items-center justify-center text-sm rounded-b-lg">
            <a href="#" className="text-white font-medium">
              More info
            </a>
            <FaInfoCircle className="text-white text-xs mx-2.5" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardMain;
