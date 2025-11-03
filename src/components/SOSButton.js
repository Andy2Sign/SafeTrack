import React from 'react';
import { sendSOSAlert } from '../services/api';

const SOSButton = () => {
  const handleSOS = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        await sendSOSAlert({ lat: latitude, lng: longitude });
        alert('SOS inviato!');
      } catch (err) {
        alert('Errore nell’invio SOS');
      }
    });
  };

  return <button onClick={handleSOS}>🚨 SOS</button>;
};

export default SOSButton;
