import React from "react";

const AppointmentDetails = ({ form, onChange, patient, types, onTimeChange, onDateChange }) => (
  <div className="appointment-details">
    <h2>Appointment Details</h2>
    <div><b>Select Patient</b></div>
    <div>FID: {patient ? patient.id : "N/A"}</div>
    <div>Walk-in appointment</div>
    <div className="details-row">
      <label>Time
        <select name="time" value={form.time} onChange={onTimeChange}>
          <option value="">Select Time</option>
          <option value="09:00">09:00</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
        </select>
      </label>
      <label>Date
        <input type="date" name="date" value={form.date} onChange={onDateChange} />
      </label>
    </div>
    <label>Select Appointment Type
      <select name="type" value={form.type} onChange={onChange}>
        <option value="">Select Type</option>
        {types.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
    </label>
    <label>Note For Doctor
      <textarea name="note" value={form.note} onChange={onChange} />
    </label>
  </div>
);

export default AppointmentDetails; 