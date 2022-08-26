export default function getRandomNumber(min: number = 0, max: number = 1000): number {

    max++
    
    let randomNumber = Math.round(Math.random() * max)

    while (randomNumber < min || randomNumber >= max) {
        randomNumber = Math.round(Math.random() * max)
    } // only returns when the drawn number is higher than the minimun and is not higher than the max + 1
    
    return randomNumber
}