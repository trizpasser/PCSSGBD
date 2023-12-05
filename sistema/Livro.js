const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  editora: {
    type: String,
    required: true
  },
  ano: {
    type: Number,
    required: true
  },
  idioma: {
    type: String,
    required: true
  },
  nota: {
    type: Number
  },
  estado_leitura: {
    type: String,
    required: true
  },
  ISBN: {
    type: String,
    required: true
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Autor',
    required: true
  },
  serie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Serie',
    required: true
  },
  categorias: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Categoria'
    }
  ]
});

const Livro = mongoose.model('Livro', livroSchema);

module.exports = Livro;
