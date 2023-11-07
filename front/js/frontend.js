const protocolo = 'http://';
const host = 'localhost:3000';
const endPoint = '/filmes';

async function obterFilmes () {
    const urlCompleta = `${protocolo}${host}${endPoint}`;
    const filmes = (await axios.get(urlCompleta)).data;
    //console.log(filmes)
    let tabela = document.querySelector('.filmes');
    let corpoTabela = tabela.getElementsByTagName('tbody')[0];
    for (filme of filmes) {
        let linha = corpoTabela.insertRow(0);
        let celulaTitulo = linha.insertCell(0);
        let celulaSinopse = linha.insertCell(1);
        celulaTitulo.innerHTML=filme.titulo;
        celulaSinopse.innerHTML=filme.sinopse;
    }
}
async function cadastrarFilme() {
    const urlCompleta = `${protocolo}${host}${endPoint}`;
    let tituloInput = document.querySelector('#tituloInput');
    let sinopseInput = document.querySelector('#sinopseInput');
    let titulo = tituloInput.value;
    let sinopse = sinopseInput.value;

    if (titulo && sinopse) {
        tituloInput.value = "";
        sinopseInput.value = "";
        const filmes = (await axios.post (urlCompleta, {titulo, sinopse})).data;
        let tabela = document.querySelector('.filmes');
        let corpoTabela = tabela.getElementsByTagName('tbody')[0];
        corpoTabela.innerHTML = "";
        for (filme of filmes) {
            let linha = corpoTabela.insertRow(0);
            let celulaTitulo = linha.insertCell(0);
            let celulaSinopse = linha.insertCell(1);
            celulaTitulo.innerHTML = filme.titulo;
            celulaSinopse.innerHTML = filme.sinopse;
        }
    }
    else {
        let alert = document.querySelector('.alert');
        alert.classList.add('show');
        alert.classList.remove('d-none');
        setTimeout (() => {
            alert.classList.add('d-none')
            alert.classList.remove('show')
        }, 2000)
    }
}
