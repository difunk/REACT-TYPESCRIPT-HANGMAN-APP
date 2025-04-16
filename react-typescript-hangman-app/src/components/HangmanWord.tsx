interface HangmanWordProps {
  wordToGuess: string
  guessedLetters: string[]
}

const HangmanWord = ({wordToGuess, guessedLetters}: HangmanWordProps) => {
    return(
        <div style={{
            display: "flex",
            gap: "10px",
            fontSize: "30px",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "monospace",
        }}>
            {wordToGuess.split("").map((letter, index) => {
                return (<span key={index} style={{ borderBottom: ".1em solid black"}}> 
                    <span style={{  visibility: guessedLetters.includes(letter) ? "visible"  : "hidden" }}>
                        {letter}
                    </span>
                </span>)
            })}
        </div>


    )
}

export default HangmanWord