
const prompt = require("prompt-sync")({sigint:true});

function calcularVolumeEsfera(raio) {
    let volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
    return volume;
}

const raio = parseFloat(prompt("Digite o valor do raio da esfera:"));
const volume = calcularVolumeEsfera(raio);

console.log(`O volume da esfera é: ${volume.toFixed(2)}`);
