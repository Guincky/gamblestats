import React, { useState } from 'react';
import './popup.css';

const Popup = ({ message, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return isOpen ? (
    <div className="popup">
      <div className="popup-content">
        <span className="close-btn" onClick={handleClose}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  ) : null;
};

export default popup;
