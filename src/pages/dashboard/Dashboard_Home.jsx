import DashboardEnhancements from "./DashboardEnhancements";
import DashboardGraphs from "./DashboardGraphs";
import DashboardMain from "./DashboardMain";
import DashboardTop from "./DashboardTop";

const DashboardHome = () => {
  return (
    <div className="h-full overflow-y-auto ">
      <DashboardTop />
      <DashboardMain />
      <DashboardGraphs />
      <DashboardEnhancements />
    </div>
  );
};

export default DashboardHome;
