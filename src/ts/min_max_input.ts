import { saveMinMax } from "./local_storage_handler"

window.onload = () => {
    const confirmButton = document.getElementById("change-button")
    confirmButton!.addEventListener("click", (event) => {
        event.preventDefault()
        analyzeValues()
    })
    const resetButton = document.getElementById("reset-min-max-button")
    resetButton!.addEventListener("click", (event) => {
        event.preventDefault()
        saveMinMax(0, 1000)
        window.location.reload()
    })
}

function analyzeValues() {
    let valid = true
    const minValueInput = document.getElementById("min-input") as HTMLInputElement
    const maxValueInput = document.getElementById("max-input") as HTMLInputElement
    const minValue = +minValueInput.value
    const maxValue = +maxValueInput.value
    if (!Number.isInteger(minValue) || !Number.isInteger(maxValue)) {
        alert("Só são aceitos números inteiros.")
        valid = false
    }
    if (minValue >= maxValue) {
        valid = false
        alert("O valor máximo deve ser MAIOR que o valor mínimo.")
    }

    if (valid) {
        saveMinMax(minValue, maxValue)
        window.location.reload()
    }
}