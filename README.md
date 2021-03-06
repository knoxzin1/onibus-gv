# Ônibus GV

[![Build Status](https://travis-ci.org/onibus-gv/onibus-gv.svg?branch=master)](https://travis-ci.org/onibus-gv/onibus-gv)

Aplicativo para consultar horários de ônibus na grande vitória

## Instalando para desenvolvimento

### Pré-Requisitos

- [node.js](https://nodejs.org) >= 5.0.0, [npm](http://npmjs.com) >= v2.0.0.
- [git](https://git-scm.com/)
- [android sdk](https://developer.android.com/studio/index.html)
- [jdk](http://www.oracle.com/technetwork/pt/java/javase/downloads/index.html)

### Instalando

Clone o repositório e execute os seguintes comandos:

```shell
npm install
npm i -g ionic cordova
ionic state restore
```

### Desenvolvendo

```shell
npm run gulp watch
```

e

```shell
ionic serve // Para testar no navegador ou
ionic run android // Para testar no dispositivo
```

Para testar no navegador ( chrome ) é preciso criar manualmente um banco de dados ( web sql ) e inserir os registros.

Para testar no android você vai precisar criar um banco de dados sqlite3 com o nome `onibus-xxx.db` dentro da pasta `www`, pode conseguir um utilizando o [onibus-gv-crawler](https://github.com/onibus-gv/onibus-gv-crawler), ou entrando em contato comigo.

O nome do arquivo precisa mudar a cada release do aplicativo, o padrão seguido é
colocar a versão atual no nome.

### Testando

#### Unit

```shell
npm run test
```

### Linter

```shell
npm run eslint
```
