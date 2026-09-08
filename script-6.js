const produtos = [
  { id: 1, nome: "notebook",categoria: "eletronico", preco: 3110.0 },
  { id: 2, nome: "geladeira",categoria: "eltrodomestico", preco: 2220.0 },
  { id: 3, nome: "fogão",categoria: "eltrodomestico", preco: 1330.0 },
  { id: 4, nome: "celular",categoria: "eletronico", preco: 400.0 },
  { id: 5, nome: "tablet",categoria: "eletronico", preco: 1150.0 },
  { id: 6, nome: "mouse",categoria: "eletronico", preco: 260.0 },    
];
  const filtrarprodutosPorCategoria = produtos.filter(i => i.categoria === "eletronico").map(i => i.nome.toUpperCase());

    console.log(filtrarprodutosPorCategoria);

  const filtrarProdutosPorPreco = produtos.filter(i => i.preco >= 1000).map(i => i.nome.toUpperCase());

    console.log(filtrarProdutosPorPreco);


  const filtrarProdutosPorPreco_Categoria = produtos.filter(i => i.preco >= 1000 && i.categoria ==="eletronico")
  .map(i => i.nome.toUpperCase());

    console.log(filtrarProdutosPorPreco_Categoria);
