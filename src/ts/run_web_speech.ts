import { analyzeGuess } from "./analyze_guess.js"

var victory = false

export default function runWebSpeech() {
    const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

    const recognition = new SpeechRecognition()
    recognition.lang = "pt-br"
    recognition.start()

    recognition.addEventListener("result", (guess) => {
        const guessString = guess.results[0][0].transcript as string

        if (analyzeGuess(guessString)) {
            victory = true
            document.getElementById("reload-button")!.classList.remove("invisible")
        }
    })

    recognition.addEventListener("end", () => { if (!victory) recognition.start() })
}