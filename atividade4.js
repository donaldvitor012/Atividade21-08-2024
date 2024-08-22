const prompt = require("prompt-sync")({sigint:true});


function calcularDelta(a, b, c) {
    return (b ** 2) - (4 * a * c);
}

function calcularBhaskara(a, b, c) {
    const delta = calcularDelta(a, b, c);
    
    if (delta < 0) {
        return "A equação não possui raízes reais.";
    } else if (delta === 0) {
        const x = -b / (2 * a);
        return `A equação possui uma raiz real: x = ${x}`;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `A equação possui duas raízes reais: x1 = ${x1}, x2 = ${x2}`;
    }
}

const a = parseFloat(prompt("Digite o valor de a:"));
const b = parseFloat(prompt("Digite o valor de b:"));
const c = parseFloat(prompt("Digite o valor de c:"));

const resultado = calcularBhaskara(a, b, c);
console.log(resultado);
