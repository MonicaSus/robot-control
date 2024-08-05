import React, { useState } from 'react';
import './App.css';

const Toolbar = ({ onMoveForward, onRotate }) => {
  return (
    <div className="toolbar">
      <button onClick={onMoveForward}>Move Forward</button>
      <button onClick={onRotate}>Rotate</button>
    </div>
  );
};

const DirectMain = () => {
  const directions = ['N', 'E', 'S', 'W'];
  const gridSize = 5;
  
  const [position, setPosition] = useState({ x: 0, y: 0, direction: 'N' });

  const moveForward = () => {
    setPosition(prev => {
      let { x, y, direction } = prev;
      switch (direction) {
        case 'N':
          y = Math.min(y + 1, gridSize - 1);
          break;
        case 'E':
          x = Math.min(x + 1, gridSize - 1);
          break;
        case 'S':
          y = Math.max(y - 1, 0);
          break;
        case 'W':
          x = Math.max(x - 1, 0);
          break;
        default:
          break;
      }
      return { x, y, direction };
    });
  };

  const rotate = () => {
    setPosition(prev => {
      let { direction } = prev;
      let newDirectionIndex = (directions.indexOf(direction) + 1) % directions.length;
      return { ...prev, direction: directions[newDirectionIndex] };
    });
  };

  return (
    <div className="App">
      <h1>Robot Control</h1>
      <div>
        <p>Position: ({position.x}, {position.y})</p>
        <p>Direction: {position.direction}</p>
      </div>
      <Toolbar onMoveForward={moveForward} onRotate={rotate} />
    </div>
  );
};

export default DirectMain;
