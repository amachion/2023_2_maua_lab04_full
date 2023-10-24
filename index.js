const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

let filmes = [
    {
    titulo: "Forrest Gump - O Contador de Histórias",
    sinopse: "Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks),um rapaz com QI abaixo da média e boas intenções."
    },
    {
    titulo: "Um Sonho de Liberdade",
    sinopse: "Em 1946, Andy Dufresne (Tim Robbins), um jovem e bem sucedido banqueiro, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do amante dela"
    },
]

//ponto de acesso para req get teste
app.get('/oi', (req, res) => res.send('oi'));

//ponto de acesso para carregar a lista de filmes cadastrados
app.get('/filmes', (req, res) => res.send(filmes))

//ponto de acesso para incluir um novo filme à lista de filmes
app.post('/filmes', (req, res) => {
    const titulo = req.body.titulo;
    const sinopse = req.body.sinopse;
    const filme = {titulo: titulo, sinopse: sinopse};
    filmes.push(filme);
    //só para conferir
    res.json(filmes)
})

app.listen (3000, () => console.log ("aplicação up and running"));