const prompt = require("prompt-sync")({sigint:true});


function calcularIMC(peso, altura) {
    return peso / (altura ** 2);
}

const peso = parseFloat(prompt("Digite o seu peso em kg:"));
const altura = parseFloat(prompt("Digite a sua altura em metros:"));

const imc = calcularIMC(peso, altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log("Classificação: Abaixo do peso");
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Classificação: Peso normal");
} else if (imc >= 25 && imc < 29.9) {
    console.log("Classificação: Sobrepeso");
} else {
    console.log("Classificação: Obesidade");
}
