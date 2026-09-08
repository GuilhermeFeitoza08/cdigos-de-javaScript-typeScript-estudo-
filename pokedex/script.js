const campoPokemon = document.querySelector("#pokemon");
const botao = document.querySelector("#btnPesquisar");
const respostaAPI = document.querySelector('#respostaAPI');
const nome = document.querySelector("#nome");
const imagem = document.querySelector("#imagem");
const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");
const evolucoes = document.querySelector("#evolucoes");

if (evolucoes) {
    evolucoes.style.display = "flex";
    evolucoes.style.alignItems = "center";
    evolucoes.style.gap = "15px";
}

botao.addEventListener("click", buscarPokemon);

async function buscarPokemon() {
    const pokemon = campoPokemon.value.toLowerCase().trim();

    if (!pokemon) {
        respostaAPI.textContent = "Digite o nome de um Pokémon";
        return;
    }

    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if (!resposta.ok) {
            throw new Error("Pokemon não encontrado");
        }

        const dados = await resposta.json();

        nome.textContent = dados.name.toUpperCase();
        respostaAPI.textContent = "";
        imagem.src = dados.sprites.front_default;
        altura.textContent = `Altura: ${dados.height}`;
        peso.textContent = `Peso: ${dados.weight}`;

        const respostaEspecies = await fetch(dados.species.url);

        if (!respostaEspecies.ok) {
            throw new Error("Não foi possível carregar a espécie");
        }

        const especies = await respostaEspecies.json();

        if (!especies.evolution_chain) {
            evolucoes.innerHTML = "";
            return;
        }

        const respostaEvolucao = await fetch(especies.evolution_chain.url);

        if (!respostaEvolucao.ok) {
            throw new Error("Não foi possível carregar as evoluções");
        }

        const evolution = await respostaEvolucao.json();
        await mostrarEvolucoes(evolution.chain);
    } catch {
        respostaAPI.textContent = "Pokemon não encontrado";
    }
}

async function mostrarEvolucoes(chain) {
    evolucoes.innerHTML = "";

    while (chain) {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${chain.species.name}`);
        const pokemon = await resposta.json();
        const card = document.createElement("div");
        card.style.textAlign = "center";

        const img = document.createElement("img");
        img.src = pokemon.sprites.front_default;
        img.width = 120;

        const titulo = document.createElement("p");
        titulo.textContent = pokemon.name.toUpperCase();

        card.appendChild(img);
        card.appendChild(titulo);
        evolucoes.appendChild(card);

        if (chain.evolves_to.length > 0) {
            const seta = document.createElement("h1");
            seta.textContent = "→";
            evolucoes.appendChild(seta);
            chain = chain.evolves_to[0];
        } else {
            chain = null;
        }
    }
}