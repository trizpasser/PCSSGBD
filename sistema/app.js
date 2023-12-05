const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Autor = require('./Autor');
const Categoria = require('./Categoria');
const Serie = require('./Serie');
const Livro = require('./Livro');
const LivroCategoria = require('./LivroCategoria');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/pcssgbd', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.post('/categoria', async (req, res) => {
  try {
    const categoria = new Categoria(req.body);
    await categoria.save();
    res.status(201).json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/categoria', async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/categoria/:id', async (req, res) => {
  try {
    const categoria = await Categoria.findById(req.params.id);
    if (!categoria) {
      return res.status(404).json({ message: 'Categoria não encontrada' });
    }
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/categoria/:id', async (req, res) => {
  try {
    const categoria = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!categoria) {
      return res.status(404).json({ message: 'Categoria não encontrada' });
    }
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/categoria/:id', async (req, res) => {
  try {
    const categoria = await Categoria.findByIdAndDelete(req.params.id);
    if (!categoria) {
      return res.status(404).json({ message: 'Categoria não encontrada' });
    }
    res.json({ message: 'Categoria removida com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rotas CRUD para a entidade "autor"
app.post('/autor', async (req, res) => {
  try {
    const autor = new Autor(req.body);
    await autor.save();
    res.status(201).json(autor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/autor', async (req, res) => {
  try {
    const autores = await Autor.find();
    res.json(autores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/autor/:id', async (req, res) => {
  try {
    const autor = await Autor.findById(req.params.id);
    if (!autor) {
      return res.status(404).json({ message: 'Autor não encontrado' });
    }
    res.json(autor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/autor/:id', async (req, res) => {
  try {
    const autor = await Autor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!autor) {
      return res.status(404).json({ message: 'Autor não encontrado' });
    }
    res.json(autor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/autor/:id', async (req, res) => {
  try {
    const autor = await Autor.findByIdAndDelete(req.params.id);
    if (!autor) {
      return res.status(404).json({ message: 'Autor não encontrado' });
    }
    res.json({ message: 'Autor removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rotas CRUD para a entidade "serie"
app.post('/serie', async (req, res) => {
  try {
    const serie = new Serie(req.body);
    await serie.save();
    res.status(201).json(serie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/serie', async (req, res) => {
  try {
    const series = await Serie.find();
    res.json(series);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/serie/:id', async (req, res) => {
  try {
    const serie = await Serie.findById(req.params.id);
    if (!serie) {
      return res.status(404).json({ message: 'Serie não encontrada' });
    }
    res.json(serie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/serie/:id', async (req, res) => {
  try {
    const serie = await Serie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!serie) {
      return res.status(404).json({ message: 'Serie não encontrada' });
    }
    res.json(serie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/serie/:id', async (req, res) => {
  try {
    const serie = await Serie.findByIdAndDelete(req.params.id);
    if (!serie) {
      return res.status(404).json({ message: 'Serie não encontrada' });
    }
    res.json({ message: 'Serie removida com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rotas CRUD para a entidade "livro"
app.post('/livro', async (req, res) => {
  try {
    const livro = new Livro(req.body);
    await livro.save();
    res.status(201).json(livro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/livro', async (req, res) => {
  try {
    const livros = await Livro.find().populate('autor serie');
    res.json(livros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/livro/:id', async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id).populate('autor serie');
    if (!livro) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }
    res.json(livro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/livro/:id', async (req, res) => {
  try {
    const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!livro) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }
    res.json(livro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/livro/:id', async (req, res) => {
  try {
    const livro = await Livro.findByIdAndDelete(req.params.id);
    if (!livro) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }
    res.json({ message: 'Livro removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/livro/:livroId/categoria/:categoriaId', async (req, res) => {
  try {
    const { livroId, categoriaId } = req.params;

    const livroCategoria = new LivroCategoria({
      livro_id: livroId,
      categoria_id: categoriaId
    });

    await livroCategoria.save();
    res.status(201).json(livroCategoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});