# API REST

<img src="https://img.shields.io/github/license/henrygoncalvess/API_RESTful?style=for-the-badge"> <img src="https://img.shields.io/badge/express-4.21.1-royalblue?style=for-the-badge&logoColor=black"> <img src="https://img.shields.io/badge/cors-2.8.5-royalblue?style=for-the-badge&logo=cors&logoColor=black"> <img src="https://img.shields.io/badge/node-20.16.0-43853D?style=for-the-badge&logo=node.js"> <img src="https://img.shields.io/badge/npm-10.8.2-firebrick?style=for-the-badge&logo=npm&logoColor=firebrick"> <img src="https://img.shields.io/badge/postman-11.16.0-orange?style=for-the-badge&logo=postman">

Simples API feita com **Node.js** e **express** com aplicação de boas práticas para transferência de dados. O objetivo é apenas colocar meus conhecimentos em prática, para entender e utilizar os conceitos REST da melhor maneira possível.

<details open="open">
<summary>Tabela de Conteúdos</summary>
  
- [Instrução de instalação](#instrução-de-instalação)
  - [Clonando Repositório](#clonando-repositório)
  - [Pré-requisitos](#pré-requisitos)
  - [Etapas](#etapas)
- [Instrução de uso](#instrução-de-uso)
- [API Endpoints](#api-endpoints)
  - [GET](#get---response)
  - [POST](#post---request)
  - [PUT](#put---request)
  - [DELETE](#delete---request)
  
</details>

<br>

## Instrução de instalação

### Clonando Repositório
No Terminal, certifique de que você está na pasta onde vai ficar o repositório

`pasta\do\repo\clonado`
``` bash
git clone https://github.com/henrygoncalvess/API_RESTful.git
```
<br>

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

### Etapas

comece criando seu projeto Node.js

`pasta\do\repo\clonado\API_RESTful`
``` bash
npm init
```
em seguida, instale o framework **Express** e o middleware **Cors**.

`pasta\do\repo\clonado\API_RESTful`
``` bash
npm install express@4.21.1 cors@2.8.5
```

<br>

## Instrução de uso

Antes de fazer requisições para a API, inicie o servidor local.

no Terminal, dentro da pasta que contém o arquivo "**server.js**":

`pasta\do\repo\clonado\API_RESTful\src`
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

Response | CODE
:---: | :---:
*http status* | **`201 CREATED`**

<br>

### PUT - ***Request***

``` json
{
  "username": "pedro",
  "newUsername": "pedro-junior"
}
```

Response | CODE
:---: | :---:
*http status* | **`200 OK`**

<br>

### DELETE - ***Request***

``` json
{
  "deleteUser": "pedro-junior"
}
```
Response | CODE
:---: | :---:
*http status* | **`200 OK`**
