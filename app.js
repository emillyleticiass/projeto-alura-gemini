// Função do botão de pesquisa
function pesquisar(){
    let section = document.getElementById("result"); //Pega os resultados do html

    let campoPesquisa = document.getElementById("campo-pesquisa").value //Pega o que foi digitado no campo de pesquisa
    // Mensagem de erro quando o usuário clica no botão de pesquisa com o campo de pesquisa vazio
    if (campoPesquisa == ""){
        section.innerHTML = "<p class='msgPesquisa'>Digite o nome de uma princesa</p>"
        return
    }
    //Transforma todo o texto do campo de pesquisa em minúsculo
    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = ""
    let nome = ""
    let descricao = ""
    let tags = ""

    for (let dado of dados){
        //Transforma o texto do campo de pesquisa em minúsculo para reconhecer na base de dados
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //Permite buscar pelo nome, alguma palavra da descrição ou palavras relacionadas
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Incrementa o resultado de cada loop
            resultados += ` 
                <div class="Cinderela">
                    <h2>${dado.nome}</h2>
                    <img src="${dado.imagem}">
                    <p>${dado.descricao}</p>
                    <a href=${dado.link} target="_blank" rel="noopener noreferrer">Assista à ${dado.nome} no D+</a>
                </div>
            `
        }
    }
    //Mensagem de erro quando o usuário pesquisa algo que não está na base de dados
    if (!resultados){
        resultados = "<p class='msgPesquisa'>Princesa não encontrada</p>"
    }

    section.innerHTML = resultados
}

