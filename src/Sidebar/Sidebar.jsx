import React from "react";
import "./Sidebar.css";
function Sidebar() {
  const photo=localStorage.getItem('photo:');
  console.log(photo)
  return (
    <div className="sidebar">
      <div className="sidebar-profile-image">
        <img
          src={
            `http://localhost:4000/${photo}`
          }
          alt="admin-profile"
        />
      </div>

      <div className="sidebar-profile-list">
        <ul>
          <li>Dashboard</li>
          <li>Target</li>
          <li>Charts</li>
          <li>Settings</li>
          <li>Messages</li>
          <li>Feedback</li>
        </ul>
      </div>
      <div className="sidebar-back">
        <p>Back</p>
      </div>
    </div>
  );
}

export default Sidebar;
