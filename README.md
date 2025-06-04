# API Produtos

## Descrição
Este projeto consiste em uma API para gerenciamento de produtos. A API permite operações de **criação**, **edição**, **deleção** e **listagem** de produtos. O desenvolvimento foi realizado utilizando **Node.js**, e os testes foram conduzidos via **Postman**.

## Tecnologias Utilizadas
- Node.js
- Express.js
- Postman (para testes)
- Visual Studio Code
- ChatGpt

## Instalação
Para rodar o projeto localmente, siga os passos abaixo:

```bash
# Clone este repositório
git clone https://github.com/nadiacastr0/api-produtos.git

# Acesse o diretório do projeto
cd api-produtos

# Instale as dependências
npm install express express-validator
npm install --save-dev nodemon

# Acesse o diretório de execução
cd src

# Inicie o servidor
npm start
```
## Testes com Postman
Para testar a API, utilize **Postman** e importe a coleção de requisições disponível no repositório.

## Endpoints

### Criar Produto
```http
POST api/produtos
```
**Descrição:** Cria um novo produto.  
**Body (JSON):**
```json
{
  "nome": "Produto X",
  "descricao": "Descrição do produto",
  "preco": 99.99
}
```

### Editar Produto
```http
PUT api/produtos/:id
```
**Descrição:** Edita um produto existente pelo seu ID.  
**Body (JSON):**
```json
{
  "nome": "Produto Y",
  "descricao": "Nova descrição",
  "preco": 149.99
}
```

### Deletar Produto
```http
DELETE api/produtos/:id
```
**Descrição:** Remove um produto pelo ID.

### Listar todos os Produtos
```http
GET api/produtos
```
**Descrição:** Retorna a lista de todos os produtos cadastrados.

### Listar Produtos por id
```http
GET api/produtos/:id
```
**Descrição:** Retorna um produto especifico da lista dos produtos cadastrados.

