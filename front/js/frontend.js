const protocolo = 'http://';
const host = 'localhost:3000';


async function obterFilmes () {
    const endPoint = '/filmes';
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
    const endPoint = '/filmes';
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
async function cadastrarUsuario(){
    let usuarioCadastroInput = document.querySelector('#usuarioCadastroInput')
    let passwordCadastroInput = document.querySelector('#passwordCadastroInput')
    let usuarioCadastro = usuarioCadastroInput.value
    let passwordCadastro = passwordCadastroInput.value
    if (usuarioCadastro && passwordCadastro) {
    
    }
    else{
        let alert = document.querySelector('.alert-modal-cadastro')
        alert.innerHTML = "Preencha todos os campos"
        alert.classList.add('show', 'alert-danger')
        alert.classList.remove('d-none')
        setTimeout(() => {
            alert.classList.remove('show')
            alert.classList.add('d-none')
        }, 2000)
    }
}
