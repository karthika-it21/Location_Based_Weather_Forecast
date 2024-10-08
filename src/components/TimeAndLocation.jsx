import React from 'react';
import { formatToLocalTime } from '../services/weatherService';

function TimeAndLocation({ weather }) {
  const { name, country, dt, timezone } = weather; // Destructure dt and timezone from weather props

  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
}

export default TimeAndLocation;