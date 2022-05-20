import React from 'react';
import './button.css';


const Button = ({ onClickBtn, children }) => {
  console.log(' ------- Button render ');
  return (
    <div className="button">
      <button onClick={onClickBtn}>{children}</button>
      <p>value: {Math.random()}</p>
    </div>
  )
}

export default React.memo(Button);