use pcssgbd;

db.createCollection('livro')

db.createCollection('categoria')

db.categoria.insertOne({"id": 1, "nome": "Romance", "livro_categoria":{"id": "1", "id_livro": "1"} })

db.livro.insertOne({"id":1, "nome":"Trocas Macabras", "editora": "suma das letras", "ano": 2022, "idioma": "pt-br", "nota": 5, "estado_leitura": "lendo", "ISBN": "3121425151", "serie": {}, "autor": {"id": "1", "foto": "foto_capa_stephen_king.jpg", "nome": "Stephen King", "pais": "Estados Unidos", "data_nascimento": "21/09/1947"} })

db.categoria.insertOne({
  "id": 2,
  "nome": "Ficção Científica",
  "livro_categoria": {
    "id": "2",
    "id_livro": "2"
  }
});

db.livro.insertOne({
  "id": 2,
  "nome": "Duna",
  "editora": "Editora Aleph",
  "ano": 1965,
  "idioma": "pt-br",
  "nota": 4.5,
  "estado_leitura": "lendo",
  "ISBN": "9788576572008",
  "serie": {
    "nome_serie": "Crônicas de Duna",
    "numero_livro": 1
  },
  "autor": {
    "id": "2",
    "foto": "foto_capa_frank_herbert.jpg",
    "nome": "Frank Herbert",
    "pais": "Estados Unidos",
    "data_nascimento": "08/10/1920"
  }
});

db.categoria.insertOne({
  "id": 3,
  "nome": "Mistério",
  "livro_categoria": {
    "id": "3",
    "id_livro": "3"
  }
});

db.livro.insertOne({
  "id": 3,
  "nome": "O Código Da Vinci",
  "editora": "Editora Arqueiro",
  "ano": 2003,
  "idioma": "pt-br",
  "nota": 4.7,
  "estado_leitura": "lido",
  "ISBN": "978-85-8041-547-3",
  "serie": {},
  "autor": {
    "id": "3",
    "foto": "foto_capa_dan_brown.jpg",
    "nome": "Dan Brown",
    "pais": "Estados Unidos",
    "data_nascimento": "22/06/1964"
  }
});

db.categoria.insertOne({
  "id": 4,
  "nome": "Fantasia",
  "livro_categoria": {
    "id": "4",
    "id_livro": "4"
  }
});

db.livro.insertOne({
  "id": 4,
  "nome": "Harry Potter e a Pedra Filosofal",
  "editora": "Rocco",
  "ano": 1997,
  "idioma": "pt-br",
  "nota": 4.9,
  "estado_leitura": "lido",
  "ISBN": "978-85-325-2324-6",
  "serie": {
    "nome_serie": "Harry Potter",
    "numero_livro": 1
  },
  "autor": {
    "id": "4",
    "foto": "foto_capa_jk_rowling.jpg",
    "nome": "J.K. Rowling",
    "pais": "Reino Unido",
    "data_nascimento": "31/07/1965"
  }
});


