import React from "react";

const ProfileDetails = ({ patient }) => (
  <div className="profile-details improved-profile">
    <div className="profile-avatar">
      <span role="img" aria-label="avatar">👤</span>
    </div>
    <div>
      <div><b>{patient ? patient.name : "Select Patient"}</b></div>
      <div>Location: {patient ? patient.location : "NA"}</div>
      <div>Contact: {patient ? patient.phone : "NA"}</div>
      <div>Address: {patient ? patient.address : "NA"}</div>
      <div>Email Id: {patient ? patient.email : "NA"}</div>
    </div>
  </div>
);

export default ProfileDetails; 