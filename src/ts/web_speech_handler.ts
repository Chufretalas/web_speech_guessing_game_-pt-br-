import { validaChute } from "./validacao.js";

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.lang = "pt-br"
recognition.start()

const speechBox = document.getElementById("speech-box")

recognition.addEventListener("result", (chute) => {
    const chuteTexto = chute.results[0][0].transcript as string
    speechBox!.innerText = chuteTexto
    console.log(chuteTexto)
    console.log(validaChute(chuteTexto))
})