import React from "react";
import PatientList from "./PatientList";
import ProfileDetails from "./ProfileDetails";
import "../App.css";

const Sidebar = ({
  patients,
  selectedPatient,
  onSelectPatient,
  searchValue,
  onSearch,
  onAddPatient,
  onViewProfile
}) => (
  <div className="sidebar">
    <h2>Book Appointment</h2>
    <input
      className="search-bar"
      placeholder="Search patients..."
      value={searchValue}
      onChange={onSearch}
    />
    <div className="sidebar-buttons">
      <button className="profile-btn" onClick={onViewProfile}>VIEW PROFILE</button>
      <button className="add-btn" onClick={onAddPatient}>ADD NEW PATIENT</button>
    </div>
    <PatientList patients={patients} selectedPatient={selectedPatient} onSelectPatient={onSelectPatient} />
    <ProfileDetails patient={selectedPatient} />
  </div>
);

export default Sidebar; 