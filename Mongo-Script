// MongoDB script
// Crie o banco de dados 'pcssgb'
use pcssgb;

// Crie uma coleção chamada 'categoria' 
db.createCollection("categoria");

// Crie uma coleção chamada 'autor' 
db.createCollection("autor");

// Crie uma coleção chamada 'serie' 
db.createCollection("serie");

// Crie uma coleção chamada 'livro'
db.createCollection("livro");

// Crie uma coleção chamada 'livro_categoria'
db.createCollection("livro_categoria");

// Inserir dados na coleção 'categoria'
db.categoria.insertMany([
  { nome: 'Ficção Científica' },
  { nome: 'Fantasia' },
  { nome: 'Romance' },
  { nome: 'Mistério' },
  { nome: 'Aventura' },
  { nome: 'Suspense' }
]);

// Inserir dados na coleção 'autor'
db.autor.insertMany([
  {
    nome: 'J.K. Rowling',
    pais: 'Reino Unido',
    data_nascimento: new Date('1965-07-31'),
    foto: 'jk_rowling.jpg'
  },
  {
    nome: 'George Orwell',
    pais: 'Reino Unido',
    data_nascimento: new Date('1903-06-25'),
    foto: 'george_orwell.jpg'
  },
  {
    nome: 'Agatha Christie',
    pais: 'Reino Unido',
    data_nascimento: new Date('1890-09-15'),
    foto: 'agatha_christie.jpg'
  },
  {
    nome: 'Stephen King',
    pais: 'Estados Unidos',
    data_nascimento: new Date('1947-09-21'),
    foto: 'stephen_king.jpg'
  },
  {
    nome: 'Harper Lee',
    pais: 'Estados Unidos',
    data_nascimento: new Date('1926-04-28'),
    foto: 'harper_lee.jpg'
  }
]);

// Inserir dados na coleção 'serie'
db.serie.insertMany([
  { nome: 'Harry Potter', numero_titulos: 7, completude: 'Completa' },
  { nome: '1984', numero_titulos: 1, completude: 'Único' },
  { nome: 'Hercule Poirot', numero_titulos: 33, completude: 'Completa' },
  { nome: 'The Dark Tower', numero_titulos: 8, completude: 'Em Andamento' },
  { nome: 'To Kill a Mockingbird', numero_titulos: 1, completude: 'Único' }
]);

// Inserir dados na coleção 'livro'
db.livro.insertMany([
  {
    nome: "Harry Potter and the Sorcerer's Stone",
    editora: 'Bloomsbury',
    ano: 1997,
    idioma: 'Inglês',
    nota: 4.5,
    estado_leitura: 'Lido',
    ISBN: '9780747532743',
    autor_id: 1,  // Use o ID correto do autor
    serie_id: 1    // Use o ID correto da série
  },
  {
    nome: '1984',
    editora: 'Secker & Warburg',
    ano: 1949,
    idioma: 'Inglês',
    nota: 4.8,
    estado_leitura: 'Lendo',
    ISBN: '9780451524935',
    autor_id: 2,  // Use o ID correto do autor
    serie_id: 2    // Use o ID correto da série
  },
  {
    nome: 'Murder on the Orient Express',
    editora: 'Collins Crime Club',
    ano: 1934,
    idioma: 'Inglês',
    nota: 4.2,
    estado_leitura: 'Lido',
    ISBN: '9780062073501',
    autor_id: 3,  // Use o ID correto do autor
    serie_id: 3    // Use o ID correto da série
  },
  {
    nome: 'The Shining',
    editora: 'Doubleday',
    ano: 1977,
    idioma: 'Inglês',
    nota: 4.6,
    estado_leitura: 'Lido',
    ISBN: '9780385121675',
    autor_id: 4,  // Use o ID correto do autor
    serie_id: 4    // Use o ID correto da série
  },
  {
    nome: 'To Kill a Mockingbird',
    editora: 'J. B. Lippincott & Co.',
    ano: 1960,
    idioma: 'Inglês',
    nota: 4.9,
    estado_leitura: 'Lido',
    ISBN: '9780061120084',
    autor_id: 5,  // Use o ID correto do autor
    serie_id: 5    // Use o ID correto da série
  }
]);

// Inserir dados na coleção 'livro_categoria'
db.livro_categoria.insertMany([
  { livro_id: 1, categoria_id: 1 },  // Use o ID correto do livro e da categoria
  { livro_id: 2, categoria_id: 2 },  // Use o ID correto do livro e da categoria
  { livro_id: 3, categoria_id: 4 },  // Use o ID correto do livro e da categoria
  { livro_id: 4, categoria_id: 3 },  // Use o ID correto do livro e da categoria
  { livro_id: 5, categoria_id: 3 }   // Use o ID correto do livro e da categoria
]);
