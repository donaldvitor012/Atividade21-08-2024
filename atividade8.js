const prompt = require("prompt-sync")({sigint:true});

function inverterNome(nomeCompleto) {
    const partesNome = nomeCompleto.trim().split(' ');

    const sobrenome = partesNome.pop();

    const primeiroNome = partesNome.join(' ');

    return `${sobrenome} ${primeiroNome}`;
}

const nomeCompleto = prompt("Digite o seu nome completo:");
const nomeInvertido = inverterNome(nomeCompleto);

console.log(`Nome invertido: ${nomeInvertido}`);
