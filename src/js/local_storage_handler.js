const minKey = "min_value";
const maxKey = "max_value";
export function saveMinMax(min, max) {
    localStorage.setItem(minKey, min.toString());
    localStorage.setItem(maxKey, max.toString());
}
export function getMinMax() {
    let min = localStorage.getItem(minKey) ?? 0;
    let max = localStorage.getItem(maxKey) ?? 100;
    if (!isNaN(+min) && Number.isInteger(+min)) {
        min = +min;
    }
    else {
        min = 0;
    }
    if (!isNaN(+max) && Number.isInteger(+max)) {
        max = +max;
    }
    else {
        max = 0;
    }
    return [min, max];
}
