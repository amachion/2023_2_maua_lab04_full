const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const app = express();
app.use(express.json());
app.use(cors());

const Filme = mongoose.model ("Filme", mongoose.Schema({
    titulo: {type: String},
    sinopse: {type: String}
}))

const usuarioSchema = mongoose.Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})
usuarioSchema.plugin(uniqueValidator)
const Usuario = mongoose.model("Usuario", usuarioSchema)

async function conectarMongoDB () {
    await mongoose.connect(`mongodb+srv://pro_mac:mongo123@cluster0.skf8n.mongodb.net/?retryWrites=true&w=majority`)
}

//ponto de acesso para req get teste
app.get('/oi', (req, res) => res.send('oi'));

//ponto de acesso para carregar a lista de filmes cadastrados
app.get('/filmes', async (req, res) => {
    const filmes = await Filme.find();
    res.send(filmes)
})

//ponto de acesso para incluir um novo filme à lista de filmes
app.post('/filmes', async (req, res) => {
    const titulo = req.body.titulo;
    const sinopse = req.body.sinopse;
    const filme = new Filme ({titulo: titulo, sinopse: sinopse});
    
    await filme.save()
    const filmes = await Filme.find()
    res.json(filmes)
})

//ponto de acesso para cadastrar-se
app.post('/signup', async (req, res) => {
    const login = req.body.login;
    const password = req.body.password;
    const usuario = new Usuario ({
        login: login,
        password: password
    })
    const respostaMongo = await usuario.save();
    console.log(respostaMongo);
    res.end();
})

app.listen (3000, () => {
    try {
        conectarMongoDB();
        console.log ("aplicação up and running")
    }
    catch (e) {
        console.log ("ups: ", e)
    }
});