// components/Notification.js
import React from 'react';

const Notification = ({ message }) => {
  if (!message) return null; // Don't render if there's no message
  return (
    <div style={{ color: 'green', marginBottom: '10px' }}>
      {message}
    </div>
  );
};

export default Notification;
