-- Inserir dados aleatórios na tabela 'categoria'
INSERT INTO `pcssgb`.`categoria` (`nome`) VALUES
('Ficção Científica'),
('Fantasia'),
('Romance'),
('Mistério'),
('Aventura'),
('Suspense');

-- Inserir dados aleatórios na tabela 'autor'
INSERT INTO `pcssgb`.`autor` (`nome`, `pais`, `data_nascimento`, `foto`) VALUES
('J.K. Rowling', 'Reino Unido', '1965-07-31', 'jk_rowling.jpg'),
('George Orwell', 'Reino Unido', '1903-06-25', 'george_orwell.jpg'),
('Agatha Christie', 'Reino Unido', '1890-09-15', 'agatha_christie.jpg'),
('Stephen King', 'Estados Unidos', '1947-09-21', 'stephen_king.jpg'),
('Harper Lee', 'Estados Unidos', '1926-04-28', 'harper_lee.jpg');

-- Inserir dados aleatórios na tabela 'serie'
INSERT INTO `pcssgb`.`serie` (`nome`, `numero_titulos`, `completude`) VALUES
('Harry Potter', 7, 'Completa'),
('1984', 1, 'Único'),
('Hercule Poirot', 33, 'Completa'),
('The Dark Tower', 8, 'Em Andamento'),
('To Kill a Mockingbird', 1, 'Único');

-- Inserir dados aleatórios na tabela 'livro'
INSERT INTO `pcssgb`.`livro` (`nome`, `editora`, `ano`, `idioma`, `nota`, `estado_leitura`, `ISBN`, `autor_id`, `serie_id`) VALUES
('Harry Potter and the Sorcerer''s Stone', 'Bloomsbury', 1997, 'Inglês', 4.5, 'Lido', '9780747532743', 1, 1),
('1984', 'Secker & Warburg', 1949, 'Inglês', 4.8, 'Lendo', '9780451524935', 2, 2),
('Murder on the Orient Express', 'Collins Crime Club', 1934, 'Inglês', 4.2, 'Lido', '9780062073501', 3, 3), -- Corrigido o ID da série para 3
('The Shining', 'Doubleday', 1977, 'Inglês', 4.6, 'Lido', '9780385121675', 4, 4),
('To Kill a Mockingbird', 'J. B. Lippincott & Co.', 1960, 'Inglês', 4.9, 'Lido', '9780061120084', 5, 5);

-- Inserir dados aleatórios na tabela 'livro_categoria'
INSERT INTO `pcssgb`.`livro_categoria` (`livro_id`, `categoria_id`) VALUES
(1, 1), -- Use o ID correto do livro
(2, 2), -- Use o ID correto do livro
(3, 4), -- Use o ID correto do livro
(4, 3), -- Use o ID correto do livro
(5, 3); -- Use o ID correto do livro

