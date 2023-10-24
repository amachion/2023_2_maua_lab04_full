const protocolo = 'http://';
const host = 'localhost:3000';
const endPoint = '/filmes';

async function obterFilmes () {
    const urlCompleta = `${protocolo}${host}${endPoint}`;
    const filmes = (await axios.get(urlCompleta)).data;
    console.log(filmes)
}