# PassForge: Password Generator API

**PassForge** é uma aplicação desenvolvida para facilitar a geração de senhas seguras e personalizadas. Utilizando uma estrutura modular com Express.js, a API é capaz de processar solicitações em JSON para criar senhas robustas para uma lista de usuários, garantindo organização, escalabilidade e segurança.

---

## **Funcionalidades**

- Recebe um array de usuários via JSON.
- Gera senhas seguras utilizando criptografia (método `crypto`).
- Estruturada com pastas para **controllers**, **services** e **routes**.
- Retorna senhas no formato JSON.

---

## **Tecnologias Utilizadas**

- **Node.js**: Para o desenvolvimento do backend.
- **Express.js**: Para criação do servidor e gerenciamento de rotas.
- **Crypto**: Para geração de senhas criptograficamente seguras.
- **JavaScript (ES6+)**: Linguagem principal do projeto.

---

## **Como Executar**

### **1. Clonar o Repositório**

```bash
git clone https://github.com/emanoelCarvalho/passForge.git
cd passForge
```

### **2. Instalar Dependências**

Certifique-se de ter o Node.js instalado e, em seguida, execute:

```bash
npm install
```

### **3. Configurar o Servidor**

O projeto já está configurado para rodar localmente na porta `3000`. Se desejar alterar a porta ou adicionar variáveis de ambiente, edite o arquivo `app.js`.

### **4. Iniciar o Servidor**

```bash
npm start
```

O servidor estará rodando em `http://localhost:3000`.

---

## **Como Utilizar**

### **Endpoint Disponível**

#### POST `/api/generate-password`

Envia uma lista de usuários para gerar senhas seguras.

**Exemplo de Corpo da Requisição:**

```json
{
    "users": [
        { "nameAplication": "disney-app", "email": "disney@example.com" },
        { "nameAplication": "another-app", "email": "another@example.com" }
    ]
}
```

**Resposta Esperada:**

```json
[
    {
        "nameAplication": "disney-app",
        "email": "disney@example.com",
        "password": "f2a1234bc5678de9012f3gh4567i890j"
    },
    {
        "nameAplication": "another-app",
        "email": "another@example.com",
        "password": "9k0123lm4567nop8901q2rs3456tuvw7"
    }
]
```

---

## **Estrutura do Projeto**

```plaintext
project/
├── controllers/
│   └── passwordController.js
├── routes/
│   └── passwordRoutes.js
├── services/
│   └── passwordService.js
├── app.js
└── package.json
```

- **`controllers/`**: Contém a lógica de controle que processa as requisições.
- **`routes/`**: Define as rotas e seus respectivos controladores.
- **`services/`**: Centraliza as regras de negócio, como a geração de senhas.
- **`app.js`**: Configuração principal da aplicação.

---

## **Licença**

Este projeto é licenciado sob a Licença MIT. Isso significa que você pode usá-lo, modificá-lo e distribuí-lo livremente, desde que mantenha o aviso de copyright e a licença.

Para mais detalhes, consulte o arquivo `LICENSE` no repositório.

---

## **Contato**

Caso tenha alguma dúvida, sugestão ou deseje colaborar no projeto, fique à vontade para entrar em contato:

- **LinkedIn**: [linkedin.com/in/emanoelcarvalho/](https://www.linkedin.com/in/emanoelcarvalho/)
- **GitHub**: [github.com/emanoelCarvalho](https://github.com/emanoelCarvalho)
- **Dev.to**: [dev.to/emanoelcarvalho](https://dev.to/emanoelcarvalho)
- **Email**: [hemanoel718@gmail.com](mailto:hemanoel718@gmail.com)

---

### **Contribuições**

Contribuições são bem-vindas! Caso tenha ideias ou encontre bugs, abra uma issue ou envie um pull request no [repositório do projeto](https://github.com/emanoelCarvalho/passForge).

