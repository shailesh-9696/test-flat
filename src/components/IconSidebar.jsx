import React from "react";
import { FaClinicMedical, FaHome, FaThLarge, FaDesktop, FaUsers, FaTasks, FaUserFriends, FaUserPlus, FaBriefcaseMedical, FaWallet, FaCog } from "react-icons/fa";
import "../App.css";

const icons = [
  { icon: <FaHome />, label: "Home" },
  { icon: <FaThLarge />, label: "Dashboard" },
  { icon: <FaDesktop />, label: "Monitor" },
  { icon: <FaUsers />, label: "Groups" },
  { icon: <FaTasks />, label: "Task" },
  { icon: <FaUserFriends />, label: "Team" },
  { icon: <FaUserPlus />, label: "Add New Patient" },
  { icon: <FaBriefcaseMedical />, label: "Medical" },
  { icon: <FaWallet />, label: "Wallet" },
  { icon: <FaCog />, label: "Settings" },
];

const IconSidebar = ({ onIconClick }) => {
  const handleClick = (label) => {
    if (onIconClick) {
      onIconClick(label);
    } else {
      console.log(`Clicked: ${label}`);
    }
  };

  return (
    <nav className="icon-sidebar">
      <div className="sidebar-logo">
        <FaClinicMedical className="sidebar-logo-img" />
      </div>
      {icons.map((item, idx) => (
        <button
          key={idx}
          className="icon-btn"
          aria-label={item.label}
          onClick={() => handleClick(item.label)}
        >
          {item.icon}
        </button>
      ))}
    </nav>
  );
};

export default IconSidebar; 