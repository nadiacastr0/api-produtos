const express = require('express');
const { validationResult } = require('express-validator');
const productController = require('../controllers/ProductController');
const { productValidation } = require('../validators/ProductValidator');

const router = express.Router();

// Middleware para lidar com erros de validação
function handleValidationErrors(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

// Rotas
router.get('/produtos', productController.getAll);
router.get('/produtos/:id', productController.getById);
router.post('/produtos', productValidation, handleValidationErrors, productController.create);
router.put('/produtos/:id', productValidation, handleValidationErrors, productController.update);
router.delete('/produtos/:id', productController.delete);

module.exports = router;
