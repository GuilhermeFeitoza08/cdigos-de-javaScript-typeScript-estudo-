function calcularMedia(notas) {
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    let media = soma / notas.length;

   return media >=7 ? `A média é ${media}, aluno aprovado` : `A média é ${media}, aluno reprovado`

}
let resultado = calcularMedia([7,8,6]);
console.log("A média é: " + resultado);

