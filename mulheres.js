// aqui inicia o express
const express = require("express");
// aqui configura a primeira parte da rota
const router = express.Router();
const {v4: uuidv4} = require('uuid');

const conectaDB = require("./banco");
conectaDB();

// aqui inicia o app
const app = express();
app.use(express.json())

// aqui cria a porta
const porta = 3333;


// lista inicial de mulheres
const mulheres = [
  {
    id: '1',
    nome: 'Mariana 1',
    imagem: 'https://mariana-cunha.com/icon.png',
    minibio: 'dev front-end'
  },
  {
    id: '2',
    nome: 'Mariana 2',
    imagem: 'https://mariana-cunha.com/icon.png',
    minibio: 'dev front-end'
  },
  {
    id: '3',
    nome: 'Mariana 3',
    imagem: 'https://mariana-cunha.com/icon.png',
    minibio: 'dev front-end'
  }
]

// GET
function mostraMulheres(req, res) {
  res.json(mulheres)
}

// POST
function criaMulher(req, res) {
  const novaMulher = {
    id: uuidv4(),
    nome: req.body.nome,
    imagem: req.body.imagem,
    minibio: req.body.minibio
  }

  mulheres.push(novaMulher)

  res.json(mulheres);
}

// PATCH
function corrigeMulher(req, res) {
  function encontraMulher(mulher) {
    if(mulher.id === req.params.id) {
      return mulher;
    }
  }

  const mulherEncontrada = mulheres.find(encontraMulher);
  
  if(req.body.nome) {
    mulherEncontrada.nome = req.body.nome;
  }

  if(req.body.imagem) {
    mulherEncontrada.imagem = req.body.imagem;
  }

  if(req.body.minibio) {
    mulherEncontrada.minibio = req.body.minibio;
  }

  res.json(mulheres);

}

// DELETE
function deletaMulher(req, res) {
  function todasMenosEla(mulher){
    if(mulher.id !== req.params.id){
      return mulher
    }
  }

  const mulheresRestantes = mulheres.filter(todasMenosEla)
  res.json(mulheresRestantes)
}


// PORTA
function mostraPorta(){
  console.log("servidor criado e rodando na porta:", porta)
}

// configurei a porta GET/mulheres
app.use(router.get('/mulheres', mostraMulheres))

// configura rota POST/mulheres
app.use(router.post('/mulheres', criaMulher))

// configura rota PATCH/mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher))

// configura rota DELETE/mulheres
app.use(router.delete('/mulheres/:id', deletaMulher))

// servidor ouvindo a porta
app.listen(porta, mostraPorta)