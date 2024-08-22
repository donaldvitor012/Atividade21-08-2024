const prompt = require("prompt-sync")({sigint:true});
function verificarAnagrama(palavra1, palavra2) {
    const limpaPalavra1 = palavra1.replace(/\s+/g, '').toLowerCase();
    const limpaPalavra2 = palavra2.replace(/\s+/g, '').toLowerCase();

    if (limpaPalavra1.length !== limpaPalavra2.length) {
        return false;
    }

    const palavraOrdenada1 = limpaPalavra1.split('').sort().join('');
    const palavraOrdenada2 = limpaPalavra2.split('').sort().join('');

    return palavraOrdenada1 === palavraOrdenada2;
}

const palavra1 = prompt("Digite a primeira palavra:");
const palavra2 = prompt("Digite a segunda palavra:");

if (verificarAnagrama(palavra1, palavra2)) {
    console.log(`"${palavra2}" é um anagrama de "${palavra1}"!`);
} else {
    console.log(`"${palavra2}" não é um anagrama de "${palavra1}".`);
}
