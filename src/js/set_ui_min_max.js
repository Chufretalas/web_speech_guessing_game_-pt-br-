export default function setUiMinMax(min, max) {
    const minSpan = document.getElementById("min-value");
    const maxSpan = document.getElementById("max-value");
    minSpan.innerHTML = min.toString();
    maxSpan.innerHTML = max.toString();
}
