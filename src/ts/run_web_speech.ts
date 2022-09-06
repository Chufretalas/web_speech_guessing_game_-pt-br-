import { analyzeGuess } from "./analyze_guess.js"

var victory = false

export default function runWebSpeech() {
    const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

    const recognition = new SpeechRecognition()
    recognition.lang = "pt-br"
    recognition.start()

    recognition.addEventListener("result", (guess) => {
        let guessString = guess.results[0][0].transcript as string

        //sometimes web speech understand negative numbers with a whitespace between the - and the number
        if (guessString.startsWith("- ")) guessString = guessString.replaceAll(" ", "")

        if (analyzeGuess(guessString)) {
            victory = true
            document.getElementById("reload-button")!.classList.remove("invisible")
        }
    })

    recognition.addEventListener("end", () => { if (!victory) recognition.start() })
}