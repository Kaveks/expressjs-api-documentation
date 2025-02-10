# Express.js Backend with TypeScript, Swagger, and ReDoc

## 📌 Project Overview

This is an **Express.js** backend built using **TypeScript**, featuring **authentication (SignUp & SignIn)**, API documentation with **Swagger & ReDoc**, and **Basic authentication scheme to access the endpoint**.

## 🚀 Features

- **User Authentication** (Sign Up & Sign In) using **bcryptjs** and **JWT**.
- **TypeScript** for type safety and better development experience.
- **Swagger & ReDoc** for API documentation.
- **CORS Support** for cross-origin requests.
- **Environment Configuration** using **dotenv**.
- **ESLint** for linting.
- **Prettier** for code formatting.

## 📂 Project Structure

| Folder/File                       | Description                          |
| --------------------------------- | ------------------------------------ |
| `express-backend/`                | Root directory of the project        |
| ├── `src/`                        | Application source code              |
| │ ├── `@types/express/`           | Type definitions for Express.js      |
| │ │ ├── `index.d.ts`              | TypeScript declarations for Express  |
| │ ├── `@types/user/`              | Type definitions for User models     |
| │ │ └── `userType.ts`             | TypeScript declaration for User      |
| │ ├── `api/`                      | API routes folder                    |
| │ │ ├── `auth/`                   | Authentication-related routes        |
| │ │ │ ├── `signIn.ts`             | SignIn route                         |
| │ │ │ └── `signUp.ts`             | SignUp route                         |
| │ │ ├── `users/`                  | User-related routes                  |
| │ │ │ └── `get_user.ts`           | Route to get user information        |
| │ ├── `app/`                      | Application logic folder             |
| │ │ └── `home.ts`                 | Home route                           |
| │ ├── `middlewares/`              | Middlewares folder                   |
| │ │ └── `basicAuth.ts`            | Middleware for Basic Auth            |
| │ ├── `swagger/`                  | Swagger API documentation            |
| │ │ ├── `swagger-with-auth.ts`    | Swagger setup with authentication    |
| │ │ └── `swagger-without-auth.ts` | Swagger setup without authentication |
| │ ├── `server.ts`                 | Main Express server                  |
| ├── `dist/`                       | Compiled TypeScript files            |
| ├── `.env`                        | Environment variables                |
| ├── `.eslint.config.mjs`          | ESLint configuration                 |
| ├── `.prettier.config.mjs`        | Prettier configuration               |
| ├── `GETSTARTED.md`               | Getting Started guide                |
| ├── `package.json`                | Project dependencies & scripts       |
| ├── `package-lock.json`           | Dependency lock file                 |
| ├── `tsconfig.json`               | TypeScript configuration             |
| └── `README.md`                   | Project documentation (this file)    |

## 🔑 Login Credentials

- **Username**: `testuser`
- **Password**: `password123`

## 🛠 Installation

### 1️⃣ Clone the repository

```sh
git clone git@github.com:Kaveks/expressjs-api-documentation.git
cd expressjs-api-documentation
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Create a **.env** file

```sh
PORT=5000

```

### 4️⃣ Run the project

#### Development mode

```sh
npm run dev
```

#### Production mode

```sh
npm run build
npm start
```

## 🔥 API Endpoints

### Authentication Routes

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | `/api/auth/signUp` | Register a new user |
| POST   | `/api/auth/signIn` | Login and get JWT   |

### User Routes

| Method | Endpoint          | Description |
| ------ | ----------------- | ----------- |
| GET    | `/api/auth/users` | Fetch users |

### Api documentation

| Endpoint   | Description              |
| ---------- | ------------------------ |
| `/swagger` | Swagger UI Documentation |
| `/redoc`   | ReDoc API Documentation  |

## ✅ Linting & Code Quality

To check for linting issues, run:

```sh
npm run lint
```

## 📝 License

This project is MIT licensed.
