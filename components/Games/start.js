import React from 'react'

function Start({onStart}) {
  return (
    <div>

        <button onClick={() => onStart()}>
            Start
        </button>


    </div>
  )
}

export default Start