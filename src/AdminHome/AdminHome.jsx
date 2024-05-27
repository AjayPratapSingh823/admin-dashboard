import Sidebar from "../Sidebar/Sidebar";
import "../styles.css";
import Admin from "../Admin/Admin";
import BarChart from "../BarChart/BarChart";
import Elementum from "../Elementum/Elementum";
import Sapient from "../Sapien/Sapien";
export default function AdminHome() {
  return (
    <div className="app">
      <div className="sidebar">
      <Sidebar />
      </div>
      <div className="home">
        <Admin />
        <BarChart />
        <Elementum />
        <Sapient />
      </div>
    </div>
  );
}