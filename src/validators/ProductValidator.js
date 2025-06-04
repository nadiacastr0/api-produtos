const { body } = require('express-validator');

const productValidation = [
    body('nome')
        .notEmpty().withMessage('Nome é obrigatório.')
        .isString().withMessage('Nome deve ser uma string.'),
    body('preco')
        .notEmpty().withMessage('Preço é obrigatório.')
        .isFloat({ gt: 0 }).withMessage('Preço deve ser um número maior que zero.'),
    body('descricao')
        .optional()
        .isString().withMessage('Descrição deve ser uma string.')
];

module.exports = { productValidation };
