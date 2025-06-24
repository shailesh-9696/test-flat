import React from "react";

const PatientList = ({ patients, selectedPatient, onSelectPatient }) => (
  <div className="patient-list">
    {patients.map((patient, idx) => (
      <div
        key={patient.id}
        className={`patient-item${selectedPatient && selectedPatient.id === patient.id ? " selected" : ""}`}
        onClick={() => onSelectPatient(patient)}
      >
        <span>{patient.name}</span>
        <span className="patient-phone">{patient.phone}</span>
      </div>
    ))}
  </div>
);

export default PatientList; 