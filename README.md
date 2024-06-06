# Sistema Produtor/Consumidor com Kafka

## Visão Geral

Este projeto implementa um sistema produtor/consumidor utilizando Apache Kafka para comunicação entre serviços. O produtor é uma aplicação Python que recebe requisições REST e envia mensagens para um tópico Kafka. O consumidor é uma aplicação Node.js que consome essas mensagens e as processa.

## Estrutura do Projeto

project/
├── producer/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── consumer/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md


## Pré-requisitos

- Docker
- Docker Compose

## Instalação e Configuração

### 1. Clone o Repositório

Clone o repositório do projeto para o seu ambiente local:

git clone <URL-do-repo>
cd project

### 2. Inicie os Containers Docker
No diretório raiz do projeto (onde está localizado o arquivo docker-compose.yml), execute:

docker-compose up


### 3. Verifique os Serviços
Espere até que todos os serviços estejam completamente iniciados. Você deve ver logs para Zookeeper, Kafka, Producer e Consumer no terminal. Certifique-se de que não há erros críticos nos logs.

Operando o Sistema
Enviar Mensagens para o Produtor
Você pode enviar mensagens para o serviço produtor usando curl ou Postman.

### Usando Postman
Abra o Postman.

Crie uma Nova Requisição:
Método: POST
URL: http://localhost:5000/produce

Adicione o Header:
Key: Content-Type
Value: application/json

Adicione o Corpo da Requisição:
Selecione o tipo de corpo como raw e escolha JSON no dropdown ao lado.

Insira o seguinte JSON no corpo da requisição:
{
  "key": "value"
}

Envie a Requisição: Clique em "Send".

### Verificar Mensagens no Consumidor
Após enviar a mensagem, verifique os logs do consumidor no terminal onde você executou docker-compose up. Você deve ver uma saída indicando que a mensagem foi recebida.

### Parar o Sistema
Para parar os containers Docker, volte ao terminal onde docker-compose up está rodando e pressione Ctrl+C. Em seguida, remova os containers executando:
docker-compose down


## Detalhes dos Arquivos
docker-compose.yml
Define os serviços Zookeeper, Kafka, Producer e Consumer.

## Produtor
Dockerfile em producer/
requirements.txt em producer/
app.py em producer/

## Consumidor
Dockerfile em consumer/
package.json em consumer/
app.js em consumer/


Esta estrutura ajudará os usuários a entenderem rapidamente como instalar, configurar, operar e parar o sistema produtor/consumidor com Kafka.

