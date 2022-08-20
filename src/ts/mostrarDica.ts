const invalidoStr = `Entrada inválida <i class="fa-solid fa-skull"></i>`
const chuteBaixoStr = `O número secreto é maior <i class="fa-solid fa-arrow-up"></i>`
const chuteAltoStr = `O número secreto é menor <i class="fa-solid fa-arrow-down"></i></i>`
const vitoriaStr = `Você acertou <i class="fa-solid fa-trophy"></i>`

const dicaElement = document.getElementById("dica")

export default function mostrarDica(label: "invalido" | "baixo" | "alto" | "vitoria") {
    console.log(`label: ${label}`)
    
    dicaElement?.classList.remove("invisivel")
    switch (label) {
        case "invalido":
            dicaElement!.innerHTML = invalidoStr
            break
        case "baixo":
            dicaElement!.innerHTML = chuteBaixoStr
            break
        case "alto":
            dicaElement!.innerHTML = chuteAltoStr
            break
        case "vitoria":
            dicaElement!.innerHTML = vitoriaStr
            break
    }
}