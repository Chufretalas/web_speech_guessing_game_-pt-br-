import { maiorValor, menorValor } from "./index.js";
export function validaChute(chute) {
    const chuteNumber = +chute;
    if (Number.isInteger(chuteNumber)) {
        return chuteNumber >= menorValor && chuteNumber <= maiorValor;
    }
    return false;
}
