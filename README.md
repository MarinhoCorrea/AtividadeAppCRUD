# MeuApp CRUD

## Descrição do Projeto

Este é um aplicativo móvel CRUD (Create, Read, Update, Delete) desenvolvido em React Native com Expo, que permite gerenciar uma lista de pessoas. O aplicativo se conecta a um backend simulado usando JSON Server, hospedado localmente e exposto via túnel Cloudflare para simular uma API remota.

O projeto foi criado para demonstrar operações básicas de CRUD em um ambiente móvel, com navegação entre telas, busca de dados e tratamento de erros.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **Expo**: Plataforma para desenvolvimento e build de apps React Native.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **React Navigation**: Para navegação entre telas.
- **JSON Server**: Simulador de API REST para desenvolvimento.
- **Cloudflare Tunnel (cloudflared)**: Para expor o servidor local via túnel seguro.

## Como o Problema Foi Resolvido

O problema de gerenciar dados de pessoas (adicionar, visualizar, editar e excluir) foi resolvido através de uma arquitetura cliente-servidor:

- **Backend**: Um servidor JSON Server simula uma API REST, armazenando dados em um arquivo `db.json`. Isso permite operações CRUD sem necessidade de um banco de dados real.
- **Frontend**: O app React Native consome a API via Axios, exibindo dados em uma lista, permitindo busca e navegação para telas de adição/edição.
- **Conectividade**: O uso de túnel Cloudflare permite que o app acesse o backend local como se fosse uma API remota, facilitando testes em dispositivos reais.

## Como Configurar o Ambiente

1. **Instalar Node.js**: Baixe e instale a versão LTS do Node.js (https://nodejs.org/).
2. **Instalar Expo CLI**: Execute `npm install -g @expo/cli` no terminal.
3. **Instalar JSON Server**: Execute `npm install -g json-server`.
4. **Instalar Cloudflared**: Execute `npm install -g cloudflared` ou baixe diretamente do site oficial (https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide/).

## Como Instalar as Dependências

1. Navegue até a pasta do projeto: `cd MeuAppCRUD`.
2. Instale as dependências do frontend: `npm install`.

Para o backend, não há dependências adicionais além do JSON Server já instalado globalmente.

## Como Executar o Aplicativo

### Backend (JSON Server)

1. Navegue até a pasta backend: `cd backend`.
2. Inicie o servidor: `json-server --watch db.json --port 3000`.
3. Em outro terminal, exponha o servidor via túnel: `cloudflared tunnel --url http://localhost:3000`.
   - Anote a URL gerada (ex: `https://genre-diesel-dig-yields.trycloudflare.com`), que será usada no `api.js`.

### Frontend (App React Native)

1. Navegue até a pasta do app: `cd MeuAppCRUD`.
2. Atualize a `baseURL` no arquivo `src/api/api.js` com a URL do túnel Cloudflare.
3. Execute o app: `npm start` ou `expo start`.
4. Escaneie o QR code com o app Expo Go no seu dispositivo, ou execute em um emulador/simulador.

## Explicação da Solução

A solução implementa um fluxo completo de CRUD:

- **HomeScreen**: Exibe lista de pessoas com busca, botões para adicionar, editar e excluir.
- **AddEditScreen**: Formulário para criar ou editar uma pessoa.
- **API Layer**: `api.js` configura Axios com base URL, `service.js` define funções para cada operação CRUD.
- **Tratamento de Erro**: Alertas para falhas de rede ou operações.
- **Navegação**: Stack Navigator para transições suaves entre telas.

Isso resolve o problema de forma escalável, permitindo fácil substituição do backend mock por uma API real.

## Link Video
- https://youtube.com/shorts/af9_3zqPb9k?si=7Hr0TiNaR8154pxp
