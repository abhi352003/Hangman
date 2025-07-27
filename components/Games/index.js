import React from 'react'
import { useState } from 'react'
import Layout from './layout';

const MAX_LIVES = 6;

function Game() {

  const [actualWord,setActualWord] = useState("");
  const [playedLetters,setplayedLetters] = useState([]);

  const word_set = new Set([...actualWord]);
  const played_set = new Set([...playedLetters]);

  const lives = MAX_LIVES - played_set.size;


  const isRunning  = lives && (actualWord.length > 0)

// if actual word not found in the played letter that mean player is not winner

  const isWin = [...actualWord].reduce((acc,curr)=>{
        if(played_set.has(curr) == false) 
          return false
        else
        return true
  },false)

  

  // when player guess any letter

  const guess = (letter) => {
    setplayedLetters((prev) => [...prev,letter])
  }

  const start = () =>{
    setActualWord("house");
    setplayedLetters([]);
  }

  return (
    <>
    <Layout lives={lives} actualWord={actualWord}  played_set={played_set} guess={guess}
    start={start} isRunning={isRunning} isWin={isWin}
    
    />
    
    </>
    
  )
}

export default Game