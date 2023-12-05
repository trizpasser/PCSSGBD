const mongoose = require('mongoose');

const serieSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  numero_titulos: {
    type: Number
  },
  completude: {
    type: String,
    required: true
  }
});

const Serie = mongoose.model('Serie', serieSchema);

module.exports = Serie;
