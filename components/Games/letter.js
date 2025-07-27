import React from 'react'

const ALL_ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function Letter({
    playedLetters,onSelect
}) {
  return (
    <div className='display-flex'>
        {[...ALL_ALPHABET].map((alphabet) => (
           <button onClick={() => onSelect(alphabet)}
           disabled={playedLetters.has(alphabet)}
           className='start-button start-button-letter'
           >
            {alphabet}
           </button>

        ))}






    </div>
  )
}

export default Letter