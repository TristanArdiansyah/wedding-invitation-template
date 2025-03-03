import React, { useEffect, useState } from 'react';

function Countdown({ targetDate }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Convert targetDate to a Date object if it's a string
    const target = typeof targetDate === 'string' 
      ? new Date(targetDate) 
      : targetDate;

    const tick = () => {
      const now = new Date().getTime();
      const distance = target.getTime() - now;

      if (distance <= 0) {
        // If the countdown is finished, set all values to zero
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        // Calculate remaining time
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(d);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
      }
    };

    // Update once immediately, then every second
    tick();
    const interval = setInterval(tick, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
      {/* Days */}
      <div style={styles.card}>
        <div style={styles.number}>{days.toString().padStart(2, '0')}</div>
        <div style={styles.label}>D</div>
      </div>

      {/* Hours */}
      <div style={styles.card}>
        <div style={styles.number}>{hours.toString().padStart(2, '0')}</div>
        <div style={styles.label}>H</div>
      </div>

      {/* Minutes */}
      <div style={styles.card}>
        <div style={styles.number}>{minutes.toString().padStart(2, '0')}</div>
        <div style={styles.label}>M</div>
      </div>

      {/* Seconds */}
      <div style={styles.card}>
        <div style={styles.number}>{seconds.toString().padStart(2, '0')}</div>
        <div style={styles.label}>S</div>
      </div>
    </div>
  );
}

// Inline styles just for demonstration; replace with your own styling as needed.
const styles = {
  card: {
    width: '200px',
    height: '240px',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: '4rem',
    fontWeight: 'bold',
  },
  label: {
    marginTop: '4px',
    fontSize: '2rem',
    color: '#666',
  },
};

export default Countdown;
