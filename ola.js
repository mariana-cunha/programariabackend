const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

function mostraOla(request, response) {
  response.send("Olá")
}

function mostraPorta() {
  console.log("servidor criado na porta ", porta)
}

app.use(router.get('/ola', mostraOla))
app.listen(porta, mostraPorta);
