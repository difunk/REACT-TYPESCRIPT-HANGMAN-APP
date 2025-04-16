const charList = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y", "Z"]

  interface KeyboardProps {
    guessedLetters: string[],
    addGuessedLetter: (letter: string) => void
    wordToGuess: string
    disabled?: boolean
  }

const Keyboard = ({ guessedLetters, addGuessedLetter, wordToGuess, disabled }: KeyboardProps) => {

  return (
    <div 
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", 
      gap: "10px",
      marginTop: "20px",
      maxWidth: "80vw",
    }}>
      {charList.map((char, index) => {
        return (
          <button 
          className={`btn 
            ${!wordToGuess.includes(char.toLowerCase()) && guessedLetters.includes(char.toLowerCase()) ? "inactive" : ""}
            ${wordToGuess.includes(char.toLowerCase()) && guessedLetters.includes(char.toLowerCase()) ? "active" : ""}
            `}
          disabled={disabled}
          onClick={() => addGuessedLetter(char.toLowerCase())}
          key={index}>
            {char}
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard