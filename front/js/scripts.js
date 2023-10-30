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