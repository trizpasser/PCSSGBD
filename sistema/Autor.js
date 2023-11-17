const mongoose = require('mongoose');

const autorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  pais: { type: String },
  data_nascimento: { type: Date },
  foto: { type: String },
});

const Autor = mongoose.model('Autor', autorSchema);

module.exports = Autor;
