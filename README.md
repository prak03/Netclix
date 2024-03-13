# Netclix

This is a FullStack Netflix Clone tutorial using React, NextJS, MonggoDB, TailwindCSS & Prisma. We created a database with mongodb and connected it through prisma. Authentication is done with NextAuth, google and github. It also has cookie based authentication. 

![image](https://user-images.githubusercontent.com/23248726/220005380-ede4fb14-0b8d-4582-a063-3cc4beeccfb7.png)

### Prerequisites

**Node version 14.x**

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=
NEXT_PUBLIC_API_KEY=
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
