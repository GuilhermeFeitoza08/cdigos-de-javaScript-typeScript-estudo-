const alunos = [
{ nome: "Ana", idade: 20, curso: "ADS" },
{ nome: "Carlos", idade: 22, curso: "Redes" },
{ nome: "Maria", idade: 19, curso: "ADS" },
{ nome: "João", idade: 25, curso: "Sistemas" },
];

const filtraPorNome = alunos.map(i => i.nome.toLocaleUpperCase())

  console.log(filtraPorNome)

console.log("\n");


const NovaEstrutura = alunos.map( i => ({
  nome: i.nome,
  curso: i.curso,
  maiorDeIdade: i.idade >= 18,
}));
console.log(JSON.stringify(NovaEstrutura,null,2));