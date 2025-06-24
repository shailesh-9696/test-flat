import React from "react";

const VitalsForm = ({ vitals, onChange }) => (
  <div className="vitals-form">
    <h3>Vital Information</h3>
    <div className="vitals-row">
      <input name="bp" placeholder="BP" value={vitals.bp} onChange={onChange} />
      <input name="temp" placeholder="Temp" value={vitals.temp} onChange={onChange} />
      <input name="height" placeholder="Height" value={vitals.height} onChange={onChange} />
    </div>
    <div className="vitals-row">
      <input name="weight" placeholder="Weight" value={vitals.weight} onChange={onChange} />
      <input name="spo2" placeholder="SPO2" value={vitals.spo2} onChange={onChange} />
      <input name="pulse" placeholder="Pulse Rate" value={vitals.pulse} onChange={onChange} />
    </div>
  </div>
);

export default VitalsForm; 