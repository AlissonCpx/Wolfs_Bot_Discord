## Instalação

Após ter clonado o repositório e extraído todos os arquivos, tenha certeza que possui o [node.js](https://nodejs.org/en/)(versão mais recente) e o [npm](https://www.npmjs.com/). Caso esteja com tudo pronto, execute o seguinte comando no diretorio dos arquivos:

```sh
$ npm install
ou
$ yarn
```

Se estiver tudo certo, crie um arquivo com o nome de **.env** seguindo o exemplo do **.env.example** com o seguinte comando:

- Windows

```sh
$ copy .env.example .env
```

- Linux 

```sh
$ cp .env.example .env
```

| Opção        | Descrição                        | Obrigatório? |
| ------------ | -------------------------------- | ------------ |
| AUTH_TOKEN   | Token de autenticação do seu bot | sim          |
| PREFIX       | Prefixo dos comandos             | sim          |

Feito isso, você poderá iniciar seu bot utilizando o seguinte comando:

```sh
$ npm start
ou
$ yarn start
```
#
