const pedidos = [
{
    id: 101,
    cliente: "Ana",
    status: "entregue",
    itens: [
        { produto: "Notebook", quantidade: 1, preco: 3500 },
        { produto: "Mouse", quantidade: 2, preco: 80 }
    ]
},
{
    id: 102,
    cliente: "Carlos",
    status: "pendente",
    itens: [
        { produto: "Teclado", quantidade: 1, preco: 150 },
        { produto: "Monitor", quantidade: 2, preco: 1100 }
    ]
},
{
    id: 103,
    cliente: "Maria",
    status: "entregue",
    itens: [
        { produto: "Mouse", quantidade: 1, preco: 80 },
        { produto: "Teclado", quantidade: 1, preco: 150 }
    ]
}
];


const ProdutosEntregues = pedidos.filter(i => i.status === "entregue");
console.log(ProdutosEntregues);