export default function setUiMinMax(min: number, max: number) {
    const minSpan = document.getElementById("min-value")
    const maxSpan = document.getElementById("max-value")

    minSpan!.innerHTML = min.toString()
    maxSpan!.innerHTML = max.toString()
}