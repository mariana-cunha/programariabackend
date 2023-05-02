const mongoose = require('mongoose');
require('dotenv').config();

async function conectaDB() {
  try {
    console.log("iniciou conexão com banco de dados")

    await mongoose.connect('process.env.MONGODB_URL')
  
    console.log("conexão com db feita com sucesso");
  } catch (error) {
    console.log(error)
  }

}

module.exports = conectaDB