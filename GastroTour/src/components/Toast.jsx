import React, { useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast ${type}`}>
      <div className="toast-content">
        <span className="toast-icon">{type === 'success' ? '✓' : 'ℹ️'}</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Toast;
