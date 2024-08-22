const prompt = require("prompt-sync")({sigint:true});

function verificarPalindromo(palavra) {
    const palavraLimpa = palavra.replace(/\s+/g, '').toLowerCase();
    const palavraInvertida = palavraLimpa.split('').reverse().join('');
    return palavraLimpa === palavraInvertida;
}

const palavra = prompt("Digite uma palavra:");
if (verificarPalindromo(palavra)) {
    console.log(`"${palavra}" é um palíndromo!`);
} else {
    console.log(`"${palavra}" não é um palíndromo.`);
}
