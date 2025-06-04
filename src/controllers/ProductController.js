const productService = require('../services/ProductService');

class ProductController {
    getAll(req, res) {
        const products = productService.getAllProducts();
        return res.json(products);
    }

    getById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const product = productService.getProductById(id);
            return res.json(product);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    create(req, res) {
        const { nome, preco, descricao } = req.body;
        const product = productService.createProduct({ nome, preco, descricao });
        return res.status(201).json(product);
    }

    update(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { nome, preco, descricao } = req.body;
            const product = productService.updateProduct(id, { nome, preco, descricao });
            return res.json(product);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    delete(req, res) {
        try {
            const id = parseInt(req.params.id);
            productService.deleteProduct(id);
            return res.json({ message: 'Produto deletado com sucesso.' });
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new ProductController();
