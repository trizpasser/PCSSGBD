const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Autor = require('./Autor');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/pcssgbd', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

// Rota para criar um novo autor
app.post('/autor', async (req, res) => {
  try {
    const novoAutor = new Autor(req.body);
    const autorSalvo = await novoAutor.save();
    res.status(201).json(autorSalvo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para listar todos os autores
app.get('/autores', async (req, res) => {
  try {
    const autores = await Autor.find();
    res.status(200).json(autores);
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
