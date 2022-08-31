const invalidGuessesTag = document.getElementById("invalid-guesses");
const validGuessesTag = document.getElementById("valid-guesses");
const totalGuessesTag = document.getElementById("total-guesses");
let invalidCount = 0;
let validCount = 0;
export default function guessCounter(guessType) {
    if (guessType === "invalid") {
        invalidCount++;
        invalidGuessesTag.innerHTML = invalidCount.toString();
    }
    else if (guessType === "valid") {
        validCount++;
        validGuessesTag.innerHTML = validCount.toString();
    }
    totalGuessesTag.innerHTML = (invalidCount + validCount).toString();
}
