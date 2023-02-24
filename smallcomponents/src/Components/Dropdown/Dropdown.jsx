import React, { useState, useRef } from "react";
import options from "../../data/data";
import "./Dropdown.css";

function Dropdown() {
  const [selectedValue, setSelectedValue] = useState("");
  const dropdownRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleBlur = () => {
    setIsExpanded(false);
  };

  return (
    <div className="dropdown-wrapper">
      <div
        className={`dropdown-header ${isExpanded ? "expanded" : ""}`}
        onClick={handleButtonClick}
        onBlur={handleBlur}
        tabIndex="0"
      >
        <div className="dropdown-selected">
          {selectedValue || "Select an option"}
        </div>
        <div className="dropdown-icon">{isExpanded ? "▲" : "▼"}</div>
      </div>
      {isExpanded && (
        <div className="dropdown-options" ref={dropdownRef}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`dropdown-option ${
                option.value === selectedValue ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedValue(option.value);
                setIsExpanded(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
