import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Legend,
  } from "recharts";
  
  const dataLine = [
    { name: "Jan", revenue: 4000 },
    { name: "Feb", revenue: 3000 },
    { name: "Mar", revenue: 5000 },
    { name: "Apr", revenue: 4000 },
    { name: "May", revenue: 6000 },
  ];
  
  const dataBar = [
    { name: "Jan", users: 200 },
    { name: "Feb", users: 300 },
    { name: "Mar", users: 500 },
    { name: "Apr", users: 400 },
    { name: "May", users: 650 },
  ];
  
  const dataPie = [
    { name: "Electronics", value: 400 },
    { name: "Clothing", value: 300 },
    { name: "Groceries", value: 300 },
    { name: "Home", value: 200 },
  ];
  
  const COLORS = ["#4f46e5", "#22c55e", "#f59e0b", "#ef4444"];
  
  const DashboardGraphs = () => {
    return (
      <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Line Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Monthly Revenue</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={dataLine}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#4f46e5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
  
        {/* User Growth Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">User Growth</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dataBar}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>
  
        {/* Category Distribution Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Category Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={dataPie}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {dataPie.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default DashboardGraphs;
  