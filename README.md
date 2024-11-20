# API REST

Simples API feita com **Node.js** e **express** com aplicação de boas práticas para transferência de dados. O objetivo é apenas colocar meus conhecimentos em prática, para entender e utilizar os conceitos REST da melhor maneira possível.

<br>

**licença e tecnologias utilizadas**:  
<img src="https://img.shields.io/github/license/henrygoncalvess/API_RESTful?style=for-the-badge&labelColor=gray&color=97ca00"> <a href="https://expressjs.com/pt-br/"><img src="https://img.shields.io/badge/express-4.21.1-000000?style=for-the-badge&logo=express&logoColor=black&labelColor=gray"></a> <a href="https://www.npmjs.com/package/cors"><img src="https://img.shields.io/badge/cors-2.8.5-royalblue?style=for-the-badge&logo=cors&logoColor=black&labelColor=gray"></a> <a href="https://nodejs.org/pt"><img src="https://img.shields.io/badge/node-20.16.0-5FA04E?style=for-the-badge&logo=node.js&logoColor=5FA04E&labelColor=gray"></a> <a href="https://learning.postman.com/docs/introduction/overview/"><img src="https://img.shields.io/badge/postman-11.16.0-FF6C37?style=for-the-badge&logo=postman&logoColor=FF6C37&labelColor=gray"></a>

**Insalador de pacotes**:  
<a href="https://docs.npmjs.com"><img src="https://img.shields.io/badge/npm-10.8.2-CB3837?style=for-the-badge&logo=npm&logoColor=CB3837&labelColor=gray"></a>

**Ponto de Entrada**:  
<span><img src="https://img.shields.io/badge/server.js-333333?style=for-the-badge"></span>

**Caminho**:  
<span><img src="https://img.shields.io/badge/src/server.js-333333?style=for-the-badge"></span>

<br>

<details open="open">
<summary>Tabela de Conteúdos</summary>
  
- [Instrução de instalação](#instrução-de-instalação)
  - [Pré-requisitos](#pré-requisitos)
  - [Clonando Repositório](#clonando-repositório)
  - [Etapas](#etapas)
- [Instrução de uso](#instrução-de-uso)
- [API Endpoints](#api-endpoints)
  - [GET](#get---response)
  - [POST](#post---request)
  - [PUT](#put---request)
  - [DELETE](#delete---request)
  
</details>

<br>

``` mermaid
---
title:  Estrutura de pastas
---
flowchart LR
    crud("📁 _API_RESTful_")@{ shape: processes }
    crud --o src("📁 _src_")@{ shape: processes }
    src --o config("📁 _config_")@{ shape: processes }
    config --- db.js("📄 **db.js**")@{ shape: card }
    src --o controllers("📁 _controllers_")@{ shape: processes }
    controllers --- UserController.js("📄 **UserController.js**")@{ shape: card }
    src --o models("📁 _models_")@{ shape: processes }
    models --- UserModel.js("📄 **UserModel.js**")@{ shape: card }
    src --o routes("📁 _routes_")@{ shape: processes }
    routes --- Users.js("📄 **Users.js**")@{ shape: card }
    src --- app.js("📄 **app.js**")@{ shape: card }
    src --- server.js("📄 **server.js**")@{ shape: card }

    %%CLASSES
    classDef default fill:#191919,color:white;
    
    classDef pasta fill:#403211,stroke:#c99e34,stroke-width:2px,color:#fff1cc;

    %%aplicação de classes
    class crud,src,config,controllers,models,routes pasta



    %%LINKS
    
    %%pastas
    linkStyle 0,1,3,5,7 stroke:#f2c04b

    %%arquivos
    linkStyle default stroke-width:2px;

    click src "https://github.com/henrygoncalvess/API_RESTful/tree/main/src"
    click config "https://github.com/henrygoncalvess/API_RESTful/tree/main/src/config"
    click db.js "https://github.com/henrygoncalvess/API_RESTful/tree/main/src/config/db.js"
    click controllers "https://github.com/henrygoncalvess/API_RESTful/tree/main/src/controllers"
    click UserController.js "https://github.com/henrygoncalvess/API_RESTful/tree/main/src/controllers/UserController.js"
    click models "https://github.com/henrygoncalvess/API_RESTful/tree/main/src/models"
    click UserModel.js "https://github.com/henrygoncalvess/API_RESTful/tree/main/src/models/UserModel.js"
    click routes "https://github.com/henrygoncalvess/API_RESTful/tree/main/src/routes"
    click Users.js "https://github.com/henrygoncalvess/API_RESTful/tree/main/src/routes/users.js"
    click app.js "https://github.com/henrygoncalvess/API_RESTful/tree/main/src/app.js"
    click server.js "https://github.com/henrygoncalvess/API_RESTful/tree/main/src/server.js"
```

<br>

## Instrução de instalação

### Pré-requisitos
Para a instalação dos frameworks, middlewares e dependências que possibilitaram a criação da API  
é necessário que você possua as seguintes ferramentas:

- **Node.js** - [Tutorial de instalação](https://nodejs.org/pt)

- **npm** - [Tutorial de instalação](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Para fazer requisições e testar as respostas da API:
- **Postman** - [Tutorial de instalação](https://www.postman.com/downloads/)

> [!tip]
> Também é possível fazer requisições pela linha de comando.  
[Clique aqui](https://www.campuscode.com.br/conteudos/comandos-curl-para-testar-requisicoes-api) para aprender a fazer requisições pelo terminal

<br>

### Clonando Repositório
No Terminal, certifique de que você está na pasta onde vai ficar o repositório

`repositorios\clonados`
``` bash
git clone https://github.com/henrygoncalvess/API_RESTful.git
```

<br>

### Etapas

comece criando seu projeto Node.js

`repositorios\clonados\API_RESTful`
``` bash
npm init
```
em seguida, instale o framework **Express** e o middleware **Cors**.

`repositorios\clonados\API_RESTful`
``` bash
npm install express@4.21.1 cors@2.8.5
```

<br>

## Instrução de uso

Antes de fazer requisições para a API, inicie o servidor local.

no Terminal, dentro da pasta que contém o arquivo "**server.js**":

`repositorios\clonados\API_RESTful\src`
``` bash
node server.js
```

<br>

## API Endpoints

No Postman *ou na linha de comando*  
teste as respostas da API seguindo os **endpoints** abaixo.

> [!tip]
> acesse este link, caso não saiba utilizar o Postman para fazer requisições [Postman](https://learning.postman.com/docs/introduction/overview/)  
> acesse este link, caso não saiba fazer requisições pela linha de comando [Clique aqui](https://www.campuscode.com.br/conteudos/comandos-curl-para-testar-requisicoes-api)

> [!note]
> As respostas da API são apenas dados fictícios de um array, sem conexão com banco de dados,  
> o objetivo é apenas entender o funcionamento da API e aplicar os princípios **REST**

<br>

Rota | Descrição
---|:---:|
***GET*** ` http://localhost:3000/api/user `| Lista todas as informações dos usuários - [ver JSON](#get---response)
***POST*** ` http://localhost:3000/api/new/user `| Adiciona um novo usuário - [ver JSON](#post---request)
***PUT*** ` http://localhost:3000/api/update/user `| Altera/Atualiza o nome do usuário informado - [ver JSON](#put---request)
***DELETE*** ` http://localhost:3000/api/delete/user `| Deleta um usuário - [ver JSON](#delete---request)

<br>

### GET - ***Response***

``` json
[
    {
        "username": "pedro",
        "password": "111111"
    },
    {
        "username": "maria",
        "password": "22221"
    },
    {
        "username": "marcelo",
        "password": "321321"
    }
]
```

<br>

### POST - ***Request***

``` json
{
  "username": "newUsername",
  "password": "newPassword"
}
```

Response

``` console
# console
new user: "newUsername"
```

<br>

### PUT - ***Request***

``` json
{
  "currentUser": "pedro",
  "newUsername": "pedro-junior"
}
```

Response

``` console
# console
before: "pedro"
after: "pedro-junior"
```

<br>

### DELETE - ***Request***

``` json
{
  "deleteUser": "pedro-junior"
}
```
Response

``` console
# console
deleted user: "pedro-junior"
```
