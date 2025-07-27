import React from 'react'

function Start({onStart, isRunning}) {
  return (
    <div>

        <button onClick={() => onStart()} className={`start-button ${isRunning && 'display-none'}`}>
            Start
        </button>


    </div>
  )
}

export default Start