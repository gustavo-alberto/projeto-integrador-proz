-- Modelo DER
-- https://app.brmodeloweb.com/#!/publicview/6679a9b8943d8cd5bd697a2e

-- Criação das Tabelas
CREATE TABLE Usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(15) NOT NULL
);

CREATE TABLE Categorias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE Pets (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES Categorias(id)
);

CREATE TABLE Adocoes (
    id SERIAL PRIMARY KEY,
    usuario_id INT,
    pet_id INT,
    data_adocao DATE NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
    FOREIGN KEY (pet_id) REFERENCES Pets(id)
);

-- Inserir usuários
INSERT INTO Usuarios (nome, email, telefone) VALUES 
('Gustavo', 'gustavo@example.com', '123456789'),
('Danúbia', 'danubia@example.com', '987654321');

-- Inserir categorias de pets
INSERT INTO Categorias (nome) VALUES 
('Cachorro'),
('Gato');

-- Inserir pets
INSERT INTO Pets (nome, idade, categoria_id) VALUES 
('Rex', 3, 1),  -- Cachorro
('Mia', 2, 2);  -- Gato

-- Inserir adoções
INSERT INTO Adocoes (usuario_id, pet_id, data_adocao) VALUES 
(1, 1, '2023-01-15'),
(2, 2, '2023-02-20');

-- Consultas Simples

-- Listar todos os usuários com suas adoções:
SELECT u.nome AS Usuario, p.nome AS Pet, a.data_adocao 
FROM Adocoes a
JOIN Usuarios u ON a.usuario_id = u.id
JOIN Pets p ON a.pet_id = p.id;

-- Listar todos os pets com suas categorias:
SELECT p.nome AS Pet, c.nome AS Categoria 
FROM Pets p
JOIN Categorias c ON p.categoria_id = c.id;

-- Listar todas as adoções realizadas em uma data específica
SELECT u.nome AS Usuario, p.nome AS Pet, a.data_adocao 
FROM Adocoes a
JOIN Usuarios u ON a.usuario_id = u.id
JOIN Pets p ON a.pet_id = p.id
WHERE a.data_adocao = '2023-01-15';