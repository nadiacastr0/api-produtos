const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 3000;

// Middleware para JSON
app.use(express.json());

// Rotas
app.use('/api', productRoutes);

// Rota de teste
app.get('/', (req, res) => {
    res.send('API de Produtos Rodando!');
});

// Start server
app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
