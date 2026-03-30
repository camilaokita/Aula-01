// 1. Puxando a ferramenta que constrói o servidor (Express)
const express = require('express');
const app = express();

const nossoCardapio = [
  { id: 1, produto: 'Cappuccino Duplo', preco: 15.0 },
  { id: 2, produto: 'Pão de Queijo', preco: 7.0 },
  { id: 3, produto: 'Bolo de Cenoura', preco: 12.0 },
];

// 2. Criando a Rota Principal (A página inicial)
// req = Request (O que o usuário pede)
// res = Response (O que o servidor responde)
app.get('/', (req, res) => {
  res.send('Fala turma! O meu servidor no StackBlitz está no ar!');
});

// 3. Criando a Rota da API (O nosso Banco de Dados do Cardápio)
app.get('/cardapio', (req, res) => {
  // Aqui criamos uma lista (Array) com os produtos

  // O servidor responde enviando essa lista em formato JSON
  res.json(nossoCardapio);
});

app.get('/cardapio/:id', (req, res) => {
  const idBuscar = parseInt(req.params.id);
  const produtoEncontrado = nossoCardapio.find((item) => item.id === idBuscar);

  if (produtoEncontrado) {
    res.json(produtoEncontrado);
  } else {
    res.status(404).send('Item não encontrado...');
  }
});

// 4. Ligando o motor do servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando com sucesso!');
});
