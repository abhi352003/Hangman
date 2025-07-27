import React from 'react'
import Letter from "./letter"
import Lives from "./lives"
import Start from "./start"
import Word from './word'

function Layout({
    lives,actualWord,played_set,guess,start,isRunning,isWin
}) {
  return (
    <>
    <div className='game-wrapper'>
    {isRunning && <>

    <div className='left-pane'>
       <Lives livesleft={lives}/>
    </div>

    <div className='right-pane'>
      <Word actualWord={actualWord} playedLetters={played_set}/>
      <Letter playedLetters={played_set} onSelect={guess} />
    </div>
     
      
      </>
    }
    <Start onStart={start} isRunning={isRunning}/>
        {
          isWin && <>
          <div>You Win!</div>
          </>
        }
  </div>
  </>
  )
}

export default Layout