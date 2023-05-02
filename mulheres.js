// aqui inicia o express
const express = require("express");
// aqui configura a primeira parte da rota
const router = express.Router();
const cors = require('cors');
const conectaDB = require("./banco");
conectaDB();

const Mulher = require("./mulherModel");

// aqui inicia o app
const app = express();
app.use(express.json())
app.use(cors());
// aqui cria a porta
const porta = 3333;



// GET
async function mostraMulheres(req, res) {
  try {
    const mulheresDB = await Mulher.find()
    res.json(mulheresDB)
  } catch (error) {
    console.log(error)
  }
}

// POST
async function criaMulher(req, res) {
  const novaMulher = new Mulher({
    nome: req.body.nome,
    imagem: req.body.imagem,
    minibio: req.body.minibio,
    citacao: req.body.citacao
  })

  try {
    const mulherCriada = await novaMulher.save()
    res.status(201).json(mulherCriada);
  } catch (error) {
    console.log(error)
  }
}

// PATCH
async function corrigeMulher(req, res) {
  try {
    const mulherEncontrada = await Mulher.findById(req.params.id)

    if(req.body.nome) {
      mulherEncontrada.nome = req.body.nome;
    }
  
    if(req.body.imagem) {
      mulherEncontrada.imagem = req.body.imagem;
    }
  
    if(req.body.minibio) {
      mulherEncontrada.minibio = req.body.minibio;
    }

    if(req.body.citacao) {
      mulherEncontrada.citacao = req.body.citacao;
    }

    const mulherAtualizadaDB = await mulherEncontrada.save()
    res.json(mulherAtualizadaDB);
  } catch (error) {
    console.log(error)
  }
}

// DELETE
async function deletaMulher(req, res) {
  try {
    await Mulher.findByIdAndDelete(req.params.id)

    // msg de sucesso
    res.json({message: 'Mulher deletada com sucesso!'})
  } catch (error) {
    console.log(error)
  }
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