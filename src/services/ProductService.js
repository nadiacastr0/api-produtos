const productRepository = require('../repositories/ProductRepository');

class ProductService {
    getAllProducts() {
        return productRepository.findAll();
    }

    getProductById(id) {
        const product = productRepository.findById(id);
        if (!product) {
            throw new Error('Produto não encontrado');
        }
        return product;
    }

    createProduct(data) {
        return productRepository.create(data);
    }

    updateProduct(id, data) {
        const product = productRepository.update(id, data);
        if (!product) {
            throw new Error('Produto não encontrado');
        }
        return product;
    }

    deleteProduct(id) {
        const success = productRepository.delete(id);
        if (!success) {
            throw new Error('Produto não encontrado');
        }
    }
}

module.exports = new ProductService();
