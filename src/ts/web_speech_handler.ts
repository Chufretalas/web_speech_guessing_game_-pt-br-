import { numeroSecreto } from "./index.js";
import mostrarDica from "./mostrarDica.js";
import { validaChute } from "./validacao.js";

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.lang = "pt-br"
recognition.start()

var fimDeJogo = false

const speechBox = document.getElementById("speech-box")

recognition.addEventListener("result", (chute) => {
    const chuteTexto = chute.results[0][0].transcript as string
    speechBox!.innerText = chuteTexto
    speechBox?.classList.remove("borda-vermelha", "borda-verde")

    if (!validaChute(chuteTexto)) {
        speechBox?.classList.add("borda-vermelha")
        mostrarDica("invalido")

    } else {
        const chuteNum = +chuteTexto

        if (chuteNum == numeroSecreto) {
            lidarComAVitoria()

        } else if (chuteNum < numeroSecreto) {
            mostrarDica("baixo")
            
        } else if (chuteNum > numeroSecreto) {
            mostrarDica("alto")
        }
    }
})

recognition.addEventListener("end", () => { if (!fimDeJogo) recognition.start() })

function lidarComAVitoria() {
    speechBox?.classList.add("borda-verde")
    mostrarDica("vitoria")
    fimDeJogo = true
    document.getElementById("botao-recarregar")!.classList.remove("invisivel")
}