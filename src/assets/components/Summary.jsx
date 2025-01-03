import React, { useState } from "react";
import "./Summary.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Summary = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); // state //

  const toggleContent = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="summary">
      
      <div className={`summary__header ${isOpen ? "open" : ""}`} onClick={toggleContent}>
        <h2 className="summary__title">{title}</h2>
        <div className={`chevron ${isOpen ? "rotated" : ""}`}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>

      
      <div className={`summary__content-container ${isOpen ? "open" : ""}`}>
        <h2 className="summary__content">{content}</h2>
      </div>
    </div>
  );
};

export default Summary;
