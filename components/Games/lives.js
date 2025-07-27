import React from "react";

function Lives({ livesleft }) {
  return (

    <div className="hangman-container">
      <div className="pole"></div>
      <div className={`hangman hangman-${6 - livesleft}`}>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
      </div>

      <div className="lives">Lives : {livesleft}</div>
    </div>
  );
}

export default Lives;
