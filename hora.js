const express = require("express");
const router = express.Router();
const app = express();
const porta = 3333;

app.use(express.json())

function mostraHora(req, res) {
  const data = new Date();
  const hora = data.toLocaleTimeString('pt-BR')
  res.send(hora);
}

function mostraPorta(){
  console.log("servidor criado e rodando na porta:", porta)
}

app.use(router.get('/hora', mostraHora))
app.listen(porta, mostraPorta)