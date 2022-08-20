import { numeroSecreto } from "./index.js";
import mostrarDica from "./mostrarDica.js";
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
    speechBox?.classList.remove("borda-vermelha", "borda-verde")
    if(!validaChute(chuteTexto)) {
        speechBox?.classList.add("borda-vermelha")
        mostrarDica("invalido")
    } else {
        const chuteNum = +chuteTexto
        if (chuteNum == numeroSecreto) {
            speechBox?.classList.add("borda-verde")
            mostrarDica("vitoria")
        } else if (chuteNum < numeroSecreto) {
            mostrarDica("baixo")
        } else if (chuteNum > numeroSecreto) {
            mostrarDica("alto")
        }
    }
})