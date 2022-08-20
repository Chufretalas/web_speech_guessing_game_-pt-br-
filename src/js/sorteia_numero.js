export default function sorteiaAleatorio(min = 0, max = 1000) {
    max++;
    let sorteado = Math.round(Math.random() * max);
    while (sorteado < min || sorteado >= max) {
        sorteado = Math.round(Math.random() * max);
    } //só retorna quando o número for maior que o minimo e não for maior que o max + 1
    return sorteado;
}
