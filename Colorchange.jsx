import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState([]);

  //function to change color
  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
      }}
    >
      <div
        style={{
          width: '200px',
          height: '200px',
          margin: '20px auto',
          backgroundColor: color,
          border: '2px solid black',
        }}
      ></div>

      <button onClick={() => changeColor('lightblue')}>Light Blue </button>
      <button
        onClick={() => changeColor('lightgreen')}
        style={{ margin: '0 10px' }}
      >
        Light Green{' '}
      </button>

      <button onClick={() => changeColor('lightpink')}>Light Pink</button>
    </div>
  );
}

export default App;
