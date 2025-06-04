const Product = require('../models/Product');

class ProductRepository {
    constructor() {
        this.products = [];
        this.currentId = 1;
    }

    findAll() {
        return this.products;
    }

    findById(id) {
        return this.products.find(p => p.id === id);
    }

    create({ nome, preco, descricao }) {
        const product = new Product(this.currentId++, nome, preco, descricao);
        this.products.push(product);
        return product;
    }

    update(id, { nome, preco, descricao }) {
        const product = this.findById(id);
        if (!product) return null;

        product.nome = nome;
        product.preco = preco;
        product.descricao = descricao;

        return product;
    }

    delete(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) return false;

        this.products.splice(index, 1);
        return true;
    }
}

module.exports = new ProductRepository();
