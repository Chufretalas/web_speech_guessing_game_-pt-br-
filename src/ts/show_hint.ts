const invalidoStr = `Entrada inválida <i class="fa-solid fa-skull"></i>`
const chuteBaixoStr = `O número secreto é maior <i class="fa-solid fa-arrow-up"></i>`
const chuteAltoStr = `O número secreto é menor <i class="fa-solid fa-arrow-down"></i></i>`
const vitoriaStr = `Você acertou! <i class="fa-solid fa-trophy"></i>`

const hintSpan = document.getElementById("dica")

export default function showHint(label: "invalid" | "tooLow" | "tooHigh" | "victory") {
    
    hintSpan?.classList.remove("invisible")
    switch (label) {
        case "invalid":
            hintSpan!.innerHTML = invalidoStr
            break
        case "tooLow":
            hintSpan!.innerHTML = chuteBaixoStr
            break
        case "tooHigh":
            hintSpan!.innerHTML = chuteAltoStr
            break
        case "victory":
            hintSpan!.innerHTML = vitoriaStr
            break
    }
}