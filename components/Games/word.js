import React from 'react'

function Word({
    actualWord,playedLetters
}) {
  return (
    <div>
        {[...actualWord].map((letter) =>(
            <>
            {playedLetters.has(letter) ? (
                <span>{letter}</span>
            ): (
                <span>&nbsp;_&nbsp;</span>
            )}
            </>
        ))}

    </div>
  )
}

export default Word