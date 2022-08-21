// Webpack imports
import "./mostrarDica.js";
import "./sorteia_numero.js";
import "./validacao.js";
import "./web_speech_handler.js";
import sorteiaAleatorio from "./sorteia_numero.js";
export const menorValor = 0;
export const maiorValor = 1000;
export const numeroSecreto = sorteiaAleatorio(menorValor, maiorValor);
const menorSpan = document.getElementById("menor-valor");
const maiorSpan = document.getElementById("maior-valor");
const botaoRecarregar = document.getElementById("botao-recarregar");
botaoRecarregar.addEventListener("click", () => window.location.reload());
menorSpan.innerText = menorValor.toString();
maiorSpan.innerText = maiorValor.toString();
