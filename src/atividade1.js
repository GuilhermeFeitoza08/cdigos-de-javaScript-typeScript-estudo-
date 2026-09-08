var nome = "João";
var idade = 30;
var isEstudante = true;
var naoSei = "Não sei o tipo";
var numeros = [8, 5, 3, 9, 7];
var soma = numeros.reduce(function (acumolador, atual) { return acumolador + atual; }, 0);
var media = soma / numeros.length;
var notas = numeros.map(function (i) { return 7; });
console.log(soma);
console.log(media);
console.log(notas);
var produto = {
    id: 1234,
    nome: "gta6",
    preco: 1234,
    estoque: true
};
var SituacaoPedido;
(function (SituacaoPedido) {
    SituacaoPedido["pendente"] = "Pagamento pendente";
    SituacaoPedido["pago"] = "sua compra ja foi paga";
    SituacaoPedido["enviado"] = "Seu pedido foi enviado";
    SituacaoPedido["entregue"] = "Ja chegou";
    SituacaoPedido["cancelado"] = "Pdedido cancelado";
})(SituacaoPedido || (SituacaoPedido = {}));
function Situacao() {
    var status = SituacaoPedido;
    console.log(status.cancelado, status.entregue, status.enviado, status.pago, status.pendente);
}
