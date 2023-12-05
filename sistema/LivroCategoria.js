const mongoose = require('mongoose');

const livroCategoriaSchema = new mongoose.Schema({
  livro_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Livro',
    required: true
  },
  categoria_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
    required: true
  }
});

const LivroCategoria = mongoose.model('LivroCategoria', livroCategoriaSchema);

module.exports = LivroCategoria;
