import "./Sidebar.css";
import iconDashboard from "./analytics.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidenav">
      <img src={iconDashboard} alt="icone analytique" />
      <Link to="/">FINANCES</Link>
      <Link to="/dashboardemployees">EMPLOYES</Link>
    </nav>
  );
};

export default Sidebar;
