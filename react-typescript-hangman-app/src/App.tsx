import { useEffect, useState } from 'react'
import './App.css'
import HangmanDrawing from './components/HangmanDrawings'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'
import words from "./wordList.json"

function App() {
  const [wordToGuess, setWordToGuess] = useState("")
  const [guessedLetters, setGuessedLetters] = useState <string[]> ([])

  const selectRandomWord = () => { return words[Math.floor(Math.random() * words.length)]}

  const isWordGuessed = wordToGuess.split("").every((letter) => guessedLetters.includes(letter))

  const incorrectGuesses = guessedLetters.filter((letter) => !wordToGuess.includes(letter)).length
  
  const addGuessedLetter = (letter: string) => {
    setGuessedLetters((letters) => [...letters, letter])
  }

  useEffect(() => {
    setWordToGuess(selectRandomWord())
  }, []);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const key = e.key;

      if (isWordGuessed || incorrectGuesses >= 6) return

      if (key.match(/^[a-z]$/) && !guessedLetters.includes(key)) {
        addGuessedLetter(key)
      }	

      e.preventDefault()
    }

    document.addEventListener("keypress", handleKeydown)

    return () => {
      document.removeEventListener("keypress", handleKeydown)
    }
  }, [isWordGuessed, incorrectGuesses])

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      gap: "20px",
      fontSize: "2rem",
      fontFamily: "monospace"
    }}>
      <div>
        {isWordGuessed && "Congratulations! You guessed the word!"}
        {incorrectGuesses >= 6 && "Sorry, you lost! The word was: " + wordToGuess}
      </div>
      <HangmanDrawing incorrectGuesses={incorrectGuesses}/>
      <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters}/>
      <Keyboard 
        disabled={isWordGuessed || incorrectGuesses >= 6} 
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters} 
        addGuessedLetter={addGuessedLetter}
      />

    </div>
  )
}

export default App
