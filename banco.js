const mongoose = require('mongoose');

async function conectaDB() {
  try {
    console.log("iniciou conexão com banco de dados")

    await mongoose.connect('mongodb+srv://marimarques26:6RoXt66TCfB1mPjx@clustermulheres.bpuzaqc.mongodb.net/?retryWrites=true&w=majority')
  
    console.log("conexão com db feita com sucesso");
  } catch (error) {
    console.log(error)
  }

}

module.exports = conectaDB