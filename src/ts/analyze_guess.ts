import { maxValue, minValue, secretNumber } from "./index.js"
import showHint from "./show_hint.js"

const speechBox = document.getElementById("speech-box")

export function analyzeGuess(guess: string): boolean { //returns false for wrong and invalid guesses and true for victory

    speechBox!.innerText = guess
    speechBox?.classList.remove("red-border-color", "green-border-color")

    const guessNumber = +guess
    if (Number.isInteger(guessNumber) && guessNumber >= minValue && guessNumber <= maxValue) {
        if (guessNumber === secretNumber) {
            speechBox?.classList.add("green-border-color")
            showHint("victory")
            return true
        }
        else if (guessNumber > secretNumber) {
            showHint("tooHigh")
            return false
        } else if (guessNumber < secretNumber) {
            showHint("tooLow")
            return false
        }
    }

    speechBox?.classList.add("red-border-color")
    showHint("invalid")
    return false
}