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
