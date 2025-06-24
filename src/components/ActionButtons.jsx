import React from "react";

const ActionButtons = ({ onReset, onSubmit }) => (
  <div className="action-buttons">
    <button className="reset-btn" onClick={onReset}>RESET</button>
    <button className="submit-btn" onClick={onSubmit}>SUBMIT</button>
  </div>
);

export default ActionButtons; 