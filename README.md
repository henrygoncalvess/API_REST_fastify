# API REST

API que se auto-documenta de acordo com o código feita com **Node.js** e **Fastify** com aplicação de boas práticas para transferência de dados. O objetivo é apenas colocar meus conhecimentos em prática, para entender e utilizar os conceitos REST da melhor maneira possível.

<br>

**licença e tecnologias utilizadas**:  
<img src="https://img.shields.io/github/license/henrygoncalvess/API_REST_fastify?style=for-the-badge&labelColor=gray&color=97ca00"> <a href="https://fastify.dev/docs/latest/Guides/Getting-Started/"><img src="https://img.shields.io/badge/fastify-5.2.0-000000?style=for-the-badge&logo=fastify&logoColor=000000&labelColor=gray"></a> <a href="https://www.typescriptlang.org/docs/"><img src="https://img.shields.io/badge/typescript-5.7.2-3178C6?style=for-the-badge&logo=typescript&logoColor=3178C6&labelColor=gray"></a> <a href="https://zod.dev/"><img src="https://img.shields.io/badge/zod-3.24.1-3E67B1?style=for-the-badge&logo=zod&logoColor=darkblue&labelColor=gray"></a> <a href="https://nodejs.org/pt"><img src="https://img.shields.io/badge/node-20.16.0-5FA04E?style=for-the-badge&logo=node.js&logoColor=5FA04E&labelColor=gray"></a> <a href="https://learning.postman.com/docs/introduction/overview/"><img src="https://img.shields.io/badge/postman-11.16.0-FF6C37?style=for-the-badge&logo=postman&logoColor=FF6C37&labelColor=gray"></a>

**Insalador de pacotes**:  
<a href="https://docs.npmjs.com"><img src="https://img.shields.io/badge/npm-10.8.2-CB3837?style=for-the-badge&logo=npm&logoColor=CB3837&labelColor=gray"></a>

**Ponto de Entrada**:  
<span><img src="https://img.shields.io/badge/server.ts-333333?style=for-the-badge"></span>

**Caminho**:  
<span><img src="https://img.shields.io/badge/src/server.ts-333333?style=for-the-badge"></span>

<br>

<details open="open">
<summary>Tabela de Conteúdos</summary>
  
- [Instrução de instalação](#instrução-de-instalação)
  - [Pré-requisitos](#pré-requisitos)
  - [Clonando Repositório](#clonando-repositório)
  - [Configuração do Projeto](#configuração-do-projeto)
- [Instrução de uso](#instrução-de-uso)
- [API Endpoints](#api-endpoints)
  
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

- <img src="https://cdn.simpleicons.org/nodedotjs/5FA04E/5FA04E?viewbox=auto" width=24>&nbsp; **Node.js** - [Tutorial de instalação](https://nodejs.org/pt)

- <img src="https://cdn.simpleicons.org/npm/CB3837/CB3837?viewbox=auto" width=24>&nbsp; **npm** - [Tutorial de instalação](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Para fazer requisições e testar as respostas da API:
- <img src="https://cdn.simpleicons.org/postman/FF6C37/FF6C37?viewbox=auto" width=24>&nbsp; **Postman** - [Tutorial de instalação](https://www.postman.com/downloads/)

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

### Configuração do Projeto

#### 1. Inicialize o projeto Node.js

`repositorios\clonados\API_REST_fastify`
``` bash
npm init
```

#### 2. Adicione os seguintes scripts ao package.json:

`repositorios\clonados\API_REST_fastify\package.json`
``` json
"scripts": {
  "dev": "tsx --watch src/server.ts"
},
"dependencies": {
  "fastify": "5.2.0",
  "fastify-type-provider-zod": "4.0.2",
  "@fastify/cors": "10.0.1",
  "zod": "3.24.1",
  "@fastify/swagger": "9.4.0",
  "@fastify/swagger-ui": "5.2.0"
},
"devDependencies": {
  "typescript": "5.7.2",
  "@types/node": "22.10.2",
  "tsx": "4.19.2"
}
```

#### 3. com as dependências listadas em `package.json`, inicie a instalação.

`repositorios\clonados\API_REST_fastify`
``` bash
npm install
```

#### 4. Inicialize o TypeScript e configure o arquivo `tsconfig.json`.

`repositorios\clonados\API_REST_fastify`
``` bash
npx tsc --init
```

#### 5. Atualize o `tsconfig.json` com as seguintes configurações básicas:
_este padrão de arquivo typescript está de acordo com esta [documentação](https://github.com/tsconfig/bases)_  
_baseado na versão node utilizada_

`repositorios\clonados\API_REST_fastify\tsconfig.json`
``` json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Node 22",
  "_version": "22.0.0",

  "compilerOptions": {
    "lib": ["es2023"],
    "module": "node16",
    "target": "es2022",

    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "node16"
  }
}
```

<br>

## Instrução de uso

Antes de fazer requisições para a API, inicie o servidor local.

`repositorios\clonados\API_REST_fastify`
``` bash
npm run dev
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

#### em seu navegador, acesse [`http://localhost:3000/docs`](http://localhost:3000/docs) para acessar a documentação das rotas

`PRÉVIA`:

![preview (2)](https://github.com/user-attachments/assets/9bda3aa6-19e4-45bb-8784-06bc539885ad)
