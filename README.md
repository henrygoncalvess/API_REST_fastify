# Criando uma API REST

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
  - [GET](#get)
  - [POST](#post)
  - [PUT](#put)
  - [DELETE](#delete)
  
</details>

## Instrução de instalação

### Clonando Repositório

No Terminal, certifique de que você está na pasta onde ficará o repositório

```pasta\do\repo\clonado```
``` bash
git clone https://github.com/henrygoncalvess/API_RESTful.git
```

### Pré-requisitos
Na criação da API, utilizaremos o framework **Express**. Para a instalação do express, é necessário que você possua as seguintes ferramentas:

- [Node.js](https://nodejs.org/pt)

- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

E para fazer as requisições, utilizaremos a plataforma **Postman**.

- [Postman](https://www.postman.com/downloads/)

### Etapas

```pasta\do\repo\clonado\API_RESTful```
``` bash
npm init -y
```
em seguida, vamos instalar o framework **Express** para a criação da API e o **Cors**, que é usado para habilitar solicitações **HTTP** e reconhecer o formato **JSON** no corpo das requisições.

```pasta\do\repo\clonado\API_RESTful```
``` bash
npm install express@4.21.1 cors@2.8.5
```

## Instrução de uso

Antes de fazer as requisições para a API com o Postman, precisamos iniciar o nosso servidor local.

no Terminal, e na pasta que contém o arquivo "**server.js**":

```...\API_RESTful\src```
``` bash
node server.js
```

## API Endpoints

**NOTA**: não utilizei nenhum banco de dados, as respostas das requisições são apenas dados fictícios de um array, o objetivo é apenas entender o funcionamento da API e aplicar os princípios **REST**

com o servidor rodando, podemos abrir o postman e fazer requisições aos **endpoints** listados abaixo:

``` Recomendo acessar este link, caso não saiba utilizar o Postman para fazer requisições``` [Postman](https://learning.postman.com/docs/introduction/overview/)

Rota | Descrição
---|---|
***GET*** ``` http://localhost:3000/api/user ```| Lista todas as informações dos usuários - [JSON](#get)
***POST*** ``` http://localhost:3000/api/new/user ```| Adiciona um novo usuário - [JSON](#get)
***PUT*** ``` http://localhost:3000/api/update/user ```| Altera/Atualiza o nome do usuário requisitado - [JSON](#get)
***DELETE*** ``` http://localhost:3000/api/delete/user ```| Deleta um usuário e todas as suas informações - [JSON](#get)

---

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

---

### POST - ***Request***

``` json
{
  "username": "newUsername",
  "password": "newPassword"
}
```

***Response*** - status

``` http
201 CREATED
```

---

### PUT - ***Request***

``` json
{
  "username": "pedro",
  "newUsername": "pedro-junior"
}
```

***Response*** - status

``` http
200 OK
```

---

### DELETE - ***Request***

``` json
{
  "deleteUser": "pedro-junior"
}
```
***Response*** - status

``` http
200 OK
```
