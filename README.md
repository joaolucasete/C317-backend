
# 🚀 Como executar

* Clone este repositório
```sh
$ https://github.com/joaolucasete/C317-backend.git
```
* Abra o terminal na pasta do projeto e instale suas dependências:
```sh
npm install
npm install @prisma/client
npm i -g @nestjs/cli
```
* No terminal do Visual Studio Code rode o projeto:
```sh
npm run start
```
## Requisições

### Criação de usuário

> **❗ Importante ❗**
>
> Para criar um usuário, certifique-se de liberar o endpoint antes com o `decorator` `@IsPublic()`.
>
> Caso a criação de usuários da sua aplicação seja restrita, remova o `decorator` `IsPublic()`, pois as próximas criações deverão ser autenticadas por um usuário já existente.

**Endpoint:** `/user`

**Method:** `POST`

**Request Body:**

```json
{
    "email": "paulo@salvatore.tech",
    "password": "Abc@123",
    "name": "Paulo Salvatore"
}
```

**Response Body (Status 201):**

```json
{
    "id": 1,
    "email": "paulo@salvatore.tech",
    "name": "Paulo Salvatore"
}
```

### Realizando o login

**Endpoint:** `/login`

**Method:** `POST`

**Request Body:**

```json
{
    "email": "paulo@salvatore.tech",
    "password": "Abc@123"
}
```

**Response Body (Status 200):**

```json
{
    "access_token": "JWT token gerado"
}
```
