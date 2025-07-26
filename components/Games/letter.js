import React from 'react'

const ALL_ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function Letter({
    playedLetters,onSelect
}) {
  return (
    <div>
        {[...ALL_ALPHABET].map((alphabet) => (
           <button onClick={() => onSelect(alphabet)}
           disabled={playedLetters.has(alphabet)}
           >
            {alphabet}
           </button>

        ))}






    </div>
  )
}

export default Letter