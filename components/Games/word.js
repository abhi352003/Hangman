import React from 'react'

function Word({
    actualWord,playedLetters
}) {
  return (
    <div className='word-container'>
        {[...actualWord].map((letter) =>(
            <>
            {playedLetters.has(letter) ? (
                <span className='word '>{letter}</span>
            ): (
                <span className='word'>&nbsp;_&nbsp;</span>
            )}
            </>
        ))}

    </div>
  )
}

export default Word