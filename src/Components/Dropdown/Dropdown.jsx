import React, { useState } from "react";
import options from "../../data/data";
import "./Dropdown.css";

function Dropdown() {
  const [selectedValue, setSelectedValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOptionClick = (option) => {
    setSelectedValue(option.value);
    setIsExpanded(false);
  };

  return (
    <div className="dropdown-wrapper">
      <div className="selected-value">Selected value: {selectedValue}</div>
      <div
        className={`dropdown-header ${isExpanded ? "expanded" : ""}`}
        onClick={handleButtonClick}
        tabIndex="0"
      >
        <div className="dropdown-selected">
          {selectedValue || "Select an option"}
        </div>
        <div className="dropdown-icon">{isExpanded ? "▲" : "▼"}</div>
        {isExpanded && (
          <div className="dropdown-options">
            {options.map((option) => (
              <div
                key={option.value}
                className={`dropdown-option ${
                  option.value === selectedValue ? "selected" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
