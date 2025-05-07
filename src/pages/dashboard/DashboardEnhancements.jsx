// DashboardEnhancements.jsx
import React from "react";
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const areaData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 2000 },
  { month: "Apr", sales: 2780 },
  { month: "May", sales: 1890 },
  { month: "Jun", sales: 2390 },
];

const pieData = [
  { name: "Active Users", value: 400 },
  { name: "Churned", value: 100 },
  { name: "New Users", value: 300 },
];

const orders = [
  { id: "A123", customer: "John Doe", status: "Pending", amount: "$250", date: "2025-05-01" },
  { id: "B456", customer: "Jane Smith", status: "Completed", amount: "$150", date: "2025-05-02" },
  { id: "C789", customer: "Alice Brown", status: "Cancelled", amount: "$80", date: "2025-05-02" },
];

const DashboardEnhancements = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="space-y-6 p-4">
            {/* Recent Orders Table */}
            <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4">Order ID</th>
                <th className="py-2 px-4">Customer</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4">{order.id}</td>
                  <td className="py-2 px-4">{order.customer}</td>
                  <td className="py-2 px-4">{order.status}</td>
                  <td className="py-2 px-4">{order.amount}</td>
                  <td className="py-2 px-4">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="flex gap-4 flex-wrap">
        {['Add Product', 'Send Notification', 'View Reports'].map((action, idx) => (
          <button
            key={idx}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            {action}
          </button>
        ))}
      </div>

      {/* Date Picker */}
      <div className="mt-4">
        <h2 className="font-semibold mb-2">Filter by Date:</h2>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="p-2 border rounded" />
      </div>

      {/* Area Chart */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Monthly Sales</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={areaData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" />
            <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4">Order ID</th>
                <th className="py-2 px-4">Customer</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4">{order.id}</td>
                  <td className="py-2 px-4">{order.customer}</td>
                  <td className="py-2 px-4">{order.status}</td>
                  <td className="py-2 px-4">{order.amount}</td>
                  <td className="py-2 px-4">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardEnhancements;
