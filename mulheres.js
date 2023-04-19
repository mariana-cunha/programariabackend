const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

const mulheres = [
  {
    nome: 'Mariana 1',
    imagem: 'https://mariana-cunha.com/icon.png',
    minibio: 'dev front-end'
  },
  {
    nome: 'Mariana 2',
    imagem: 'https://mariana-cunha.com/icon.png',
    minibio: 'dev front-end'
  },
  {
    nome: 'Mariana 3',
    imagem: 'https://mariana-cunha.com/icon.png',
    minibio: 'dev front-end'
  }
]

function mostraMulheres(req, res) {
  res.json(mulheres)
}

function mostraPorta(){
  console.log("servidor criado e rodando na porta:", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)