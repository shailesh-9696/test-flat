import React from "react";
import VitalsForm from "./VitalsForm";

const AppointmentForm = ({ form, onChange, doctors, channels }) => (
  <div className="appointment-form">
    <h2>Details</h2>
    <label>Select Doctor
      <select name="doctor" value={form.doctor} onChange={onChange}>
        <option value="">Select Doctor</option>
        {doctors.map(doc => <option key={doc} value={doc}>{doc}</option>)}
      </select>
    </label>
    <label>Select Appointment Channel
      <select name="channel" value={form.channel} onChange={onChange}>
        <option value="">Select Channel</option>
        {channels.map(ch => <option key={ch} value={ch}>{ch}</option>)}
      </select>
    </label>
    <label>Appointment Title
      <input name="title" value={form.title} onChange={onChange} />
    </label>
    <VitalsForm vitals={form.vitals} onChange={onChange} />
    <label>Reason
      <textarea name="reason" value={form.reason} onChange={onChange} />
    </label>
  </div>
);

export default AppointmentForm; 