# Getting Started with Express.js & TypeScript

This guide walks you through setting up an Express.js server with TypeScript from scratch.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node.js)

---

## 1. Initialize a Node.js Project

Create a new project directory and initialize npm:

```sh
mkdir express-ts-app
cd express-ts-app
npm init -y
```

This will generate a `package.json` file.

---

## 2. Install Dependencies

Install required packages:

```sh
npm install bcryptjs cookie-parser cors dotenv express jsonwebtoken redoc-express swagger-jsdoc swagger-ui-express uuid
```

Install development dependencies:

```sh
npm install --save-dev typescript ts-node @types/bcryptjs @types/cookie-parser @types/cors @types/express @types/jsonwebtoken @types/node @types/swagger-jsdoc @types/swagger-ui-express eslint prettier eslint-config-prettier eslint-plugin-prettier
```

---

## 3. Configure TypeScript

Run the following to generate a TypeScript configuration file:

```sh
npx tsc --init
```

Modify the created `tsconfig.json` to the following:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "rootDir": "src",
    "outDir": "dist",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

---

## 4. Configure ESLint and Prettier

Create an `eslint.config.mjs` file with the following content:

```js
export default [
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];
```

Create a `prettier.config.mjs` file with the following content:

```js
export default {
  bracketSpacing: true,
  endOfLine: "lf",
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
};
```

---

## 5. Create the Express Server

Create a `src` folder and a `server.ts` file:

```sh
mkdir src
nano src/server.ts
```

Add the following code to `src/server.ts`:

```typescript
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

---

## 6. Add Scripts in `package.json`

Update the `scripts` section:

```json
"scripts": {
  "start": "node dist/server.js",
  "dev": "ts-node src/server.ts",
  "build": "tsc",
  "lint": "eslint . --ext .ts",
  "format": "prettier --write .",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

---

## 7. Start the Server

For development:

```sh
npm run dev
```

For production:

```sh
npm run build
npm start
```

To lint your code:

```sh
npm run lint
```

To format your code:

```sh
npm run format
```

---

## Project Structure

```
express-ts-app/
│-- src/
│   ├── server.ts
│-- package.json
│-- tsconfig.json
│-- eslint.config.mjs
│-- prettier.config.mjs
│-- GETSTARTED.md
```

---

Your Express.js & TypeScript project is ready! 🚀
