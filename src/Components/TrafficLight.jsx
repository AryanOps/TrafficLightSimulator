// TrafficLightSimulator.jsx

import React from 'react';

function TrafficLight(){
  return (
    <div className="traffic-light-container">
        <div className="light red"></div>
        <div className="light yellow"></div>
    <div className="light green"></div>

      
      <style>{`
        .traffic-light-container {
          width: 120px;
           padding: 20px;
          background: #333;
           border-radius: 20px;
           display: flex;
           flex-direction: column;
           align-items: center;
          gap: 20px;
          box-shadow: 0 0 20px rgba(0,0,0,0.6);
            justify-content: center;
            margin-left: 45%;
            margin-top: 45px;
        }

        .light {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #222;
        }

        .red {
          background: red;
        }

        .yellow {
          background: yellow;
        }

        .green {
          background: limegreen;
        }
      `}</style>
    </div>
  );
};

export default TrafficLight;
