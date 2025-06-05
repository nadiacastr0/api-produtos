# API Produtos

## Sobre o Projeto
**Este projeto foi desenvolvido inteiramente por uma IA generativa** através de técnicas avançadas de engenharia de prompt. Serve como demonstração de como instruções precisas e estruturadas podem gerar soluções completas de software.

## Objetivos
- Demonstrar o potencial da engenharia de prompt no desenvolvimento de software
- Oferecer um estudo de caso real de API gerada por IA
- Servir como material educativo para aprendizado de Node.js e Docker

## Tecnologias Utilizadas
- **Node.js** (versão 18)
- **Express.js** para rotas
- **Docker** para conteinerização
- **Express-Validator** para validações
- **Postman** para testes

## Instalação
Para rodar o projeto localmente, siga os passos abaixo:

```bash
# Clone este repositório
git clone https://github.com/nadiacastr0/api-produtos.git

# Acesse o diretório do projeto
cd api-produtos

#--- Execução do Projeto ---

# Método Tradicional

npm install
npm start

# Via Docker

docker build -t api-produtos .
docker run -p 3000:3000 api-produtos
```
## Testes com Postman
Para testar a API, utilize **Postman** (ou a ferramenta de sua preferência) e importe a coleção de requisições disponível no repositório.

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

