const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

function mostraMulher(req, res) {
  res.json({
    nome: 'Mariana',
    imagem: 'https://mariana-cunha.com/icon.png',
    minibio: 'dev front-end'
  })
}

function mostraPorta(){
  console.log("servidor criado e rodando na porta:", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)