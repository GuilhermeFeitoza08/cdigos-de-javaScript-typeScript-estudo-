var nome : string = "João";
var idade : number = 30;
var isEstudante : boolean = true;
var naoSei : unknown = "Não sei o tipo";


const numeros : number[] = [8, 5, 3, 9, 7];

const soma = numeros.reduce((acumolador,atual)=> acumolador + atual,0);

const media = soma/numeros.length;

const notas = numeros.filter(i => i >= 7 );

console.log(soma);
console.log(media);
console.log(notas);



const produto : {
    readonly id : number;
     nome : string;
     preco : number;
     estoque : boolean;
     descricao ?: string;
} = {

    id : 1234,
    nome : "gta6",
    preco : 1234,
    estoque : true
}

enum SituacaoPedido{
    pendente = "Pagamento pendente",
    pago  = "sua compra ja foi paga",
    enviado = "Seu pedido foi enviado",
    entregue = "Ja chegou",
    cancelado = "Pdedido cancelado"
}
function Situacao (){
    let status = SituacaoPedido;

    console.log(status.cancelado,
        status.entregue,
        status.enviado,
        status.pago,
        status.pendente

    )
}