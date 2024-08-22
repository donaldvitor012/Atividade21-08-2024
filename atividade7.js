const prompt = require("prompt-sync")({sigint:true});
function contarEspacos(frase) {
    const espacos = (frase.match(/ /g) || []).length;
    return espacos;
}

const frase = prompt("Digite uma frase:");
const quantidadeEspacos = contarEspacos(frase);

console.log(`A frase contém ${quantidadeEspacos} espaços em branco.`);
