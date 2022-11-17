# Simulador de antecipação - Teste Técnico S1

## Sumário

- [Simulador de antecipação - Teste Técnico S1](#simulador-de-antecipação---teste-técnico-s1)
  - [Sumário](#sumário)
  - [1. Resumo](#1-resumo)
    - [1. Desenvolvedor](#1-desenvolvedor)
  - [2. Preparativos](#2-preparativos)
    - [2.1. Instalando Dependências](#21-instalando-dependências)
    - [2.2. Executar a aplicação localmente](#22-executar-a-aplicação-localmente)
  - [3. Documentação da API da aplicação](#3-documentação-da-api-da-aplicação)
  - [4. Histórico de desenvolvimento](#4-histórico-de-desenvolvimento)
    - [4.1. Objetivo](#41-objetivo)
    - [4.2. Decisões de desenvolvimento](#42-decisões-de-desenvolvimento)
      - [4.2.1. Ordem de desenvolvimento](#421-ordem-de-desenvolvimento)
      - [4.2.2. Componentes](#422-componentes)
      - [4.2.3. Page](#423-page)
      - [4.2.4. Rotas e Consumo da API](#424-rotas-e-consumo-da-api)
      - [4.2.3.1. Rotas](#4231-rotas)
      - [4.2.3.2. Consumo da API](#4232-consumo-da-api)
    - [4.2.5. Estilização](#425-estilização)
    - [4.2.6. Pontos não cobertos](#426-pontos-não-cobertos)
  - [5. Agradecimentos](#5-agradecimentos)
- [Shalom!](#shalom)

---

## 1. Resumo

Essa aplicação foi desenvolvida para o teste técnico realizado na sprint 1 do módulo 6 para a Kenzie Academy Brasil no intuito de revisar e treinar testes técnicos para o mercado de trabalho.

A aplicação foi desenvolvida para clientes que precisam saber quanto custa antecipar uma transação, e para isso, desenvolvi uma calculadora de antecipação para que os mesmos consigam saber quais valores receberão caso optem por antecipar o recebimento.

Tecnologias usadas nesse projeto:

- [React](https://pt-br.reactjs.org/docs/getting-started.html)
- [Styled-components](https://styled-components.com)
- [Material UI](https://mui.com/pt/)
- [Toastfy](https://www.npmjs.com/package/react-toastify)
- [React-hook-form](https://react-hook-form.com)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [React-router-dom](https://v5.reactrouter.com/web/guides/quick-start)
- [Eslint](https://eslint.org)

**Base URL do deploy: (https://s1-frontend-teste-brunotiberio.vercel.app)**

### 1. Desenvolvedor

> - [Bruno Tibério Santinoni de Oliveira](https://github.com/brunotiberio)

---

## 2. Preparativos

[ Voltar ao topo ](#sumário)

### 2.1. Instalando Dependências

Clone o projeto em sua máquina local e instale por meio do yarn ou npm:

```shell
yarn install
```

```shell
npm install
```

### 2.2. Executar a aplicação localmente

Para executar o projeto em sua máquina local utilize o comando **start** do yarn ou npm:

```shell
yarn start
```

```shell
npm start
```

## 3. Documentação da API da aplicação

É possível acessar à documentação completa da API utilizada nessa aplicação.

Nessa mesma documentação é possível adquirir informações sobre os requests, chaves necessárias do request e informações de algumas rotas.

**Base URL da API: https://frontend-challenge-7bu3nxh76a-uc.a.run.app**

## 4. Histórico de desenvolvimento

### 4.1. Objetivo

O Objetivo principal dessa aplicação é a validação dos meus conhecimentos nos seguintes tópicos:

- JavaScript;
- React;
- TypeScript (Opcional);
- Componentização;
- CSS;
- Testes unitários (Opcional);
- Testes end-to-end (Opcional);

O projeto possui algumas restrições de desenvolvimento:

1. Não é permitido utilizar frameworks e/ou bibliotecas de UI que não seja o React (como Vue.js ou Angular).
2. São permitidas ferramentas modernas de desenvolvimento como TypeScript, Babel, eslint, webpack, assim como o uso de polyfills (e outras ferramentas para melhorar o suporte a browsers, como Modernizr) e/ou bibliotecas para testes.
3. São permitidos pré-processadores de CSS e/ou ferramentas CSS-in-JS.
4. Não é uma regra, mas não deve ser usado lodash, underscore, ramda e similares.

### 4.2. Decisões de desenvolvimento

#### 4.2.1. Ordem de desenvolvimento

1. Inicialmente, decidi por começar pela análise do figma proposto do teste, com isso, pude observar quais eram os itens que poderiam ser componentizados e reaproveitados.
2. Depois, trabalhei a lógica e o consumo da API, fazendo com que os dados enviados e recebidos fossem entregues no frontend
3. Após, trabalhei a estilização da aplicação e revisão de padrão de código e criação da documentação

#### 4.2.2. Componentes

Foram criados, no total, 5 componentes:

- Header: cabeçalho da aplicação, onde é recebido o H1;
- Main: corpo da aplicação, onde é recebido por "children" todo o conteúdo base da aplicação;
- Inputs: componente responsável por receber os dados do usuário que serão enviados na API;
- Result: responsável por renderizar a resposta da requisição do usuário;
- Result-loading: componente que aguarda a resposta da requisição do usuário

#### 4.2.3. Page

Foi criada apenas uma única page, chamada de "home", já que se trata de uma aplicação simples. Nela é decidido se será renderizado os componentes Result-loading (por padrão) e Result.

#### 4.2.4. Rotas e Consumo da API

#### 4.2.3.1. Rotas

Para o desenvolvimento dessa aplicação, foi necessário apenas uma única rota, da baseURL ou do localhost (para execução local) onde serão realizadas todas as requests por meio do botão "Simular", disponível no componente "Input"

#### 4.2.3.2. Consumo da API

A configuração da API ocorre em "services", utilizando a tecnologia "Axios", com a baseURL da API e um timeout de 3000 milissegundos (pois a resposta da API é praticamente instantânea)

Os possíveis erros da API (internal server error, timeout) foram tratados no catch da requisição, no "context", utilizando o Toastfy e retornando uma mensagem ao usuário. Para o delay, foi usado uma imagem que é trocada para a resposta assim que a API envia os dados pelo "context".

Para os dados trafegarem pelos componentes, decidi usar o contextAPI do próprio React, por ser mais simples de se configurar e escalar a aplicação, a ferramenta permite a criação de um estado com as respostas da API, dessa forma, eu consigo enviar os dados gerados por ela, para o componente de "Result" e "Input", tratando os possíveis erros de entrada do usuário e de resposta da API e gerando os resultados esperados da API.

### 4.2.5. Estilização

Utilizei como ferramenta de estilização o Styled-Components, por se tratar de uma ferramenta completa. Dessa forma, criei um reset global para facilitar a estilização e pude criar componentes estilizados, além disso, como fiz uso do Material UI para a criação dos "Inputs", o Styled-Components possui total integração para que eu possa fazer as devidas alterações.

### 4.2.6. Pontos não cobertos

Não consegui cobrir a questão do usuário estar offline. Ainda assim, consegui pensar em uma forma de fazê-lo:

- Definir um tempo de espera que o usuário levaria para clicar no botão "simular";
- Caso o usuário não clicasse dentro desse tempo, seria exibido um pop-up perguntando a ele se ainda está lá e um botão de retornar caso estivesse;
- Ao clicar no botão "simular" o tempo de espera seria reiniciado

Infelizmente, não consegui achar uma maneira de fazer esse tempo de espera na página, apesar de que, o segundo e o terceiro tópicos eu conseguiria fazer, mas isso serviu como uma experiência para estudar ainda mais e ver que tenho total condição de desenvolver essa feature, por isso, estou aberto a feedbacks que possam me mostrar alguns caminhos para chegar a esse resultado.

## 5. Agradecimentos

Quero agradecer por essa oportunidade de poder fazer o teste técnico e espero poder ter conseguido cumprir com boa parte daquilo que foi solicitado

# Shalom!
