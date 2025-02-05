# Express.js Backend with TypeScript, Swagger, and ReDoc

## 📌 Project Overview

This is an **Express.js** backend built using **TypeScript**, featuring **authentication (SignUp & SignIn)**, API documentation with **Swagger & ReDoc**, and **cookie-based authentication**.

## 🚀 Features

- **User Authentication** (Sign Up & Sign In) using **bcryptjs** and **JWT**.
- **TypeScript** for type safety and better development experience.
- **Swagger & ReDoc** for API documentation.
- **CORS Support** for cross-origin requests.
- **Environment Configuration** using **dotenv**.
- **ESLint** for linting.

## 📂 Project Structure

| Folder/File            | Description                       |
| ---------------------- | --------------------------------- |
| `express-backend/`     | Root directory of the project     |
| ├── `src/`             | Application source code           |
| │ ├── `app/`           | Application logic folder          |
| │ │ ├── `home.ts`      | Home route (moved from 'routes')  |
| │ ├── `api/`           | New folder for API routes         |
| │ │ ├── `auth/`        | Authentication-related routes     |
| │ │ │ ├── `signUp.ts`  | SignUp route                      |
| │ │ │ └── `siignIn.ts` | SignIn route                      |
| │ ├── `server.ts`      | Main Express server               |
| │ ├── `swagger.ts`     | Swagger & ReDoc setup             |
| ├── `dist/`            | Compiled TypeScript files         |
| ├── `.env`             | Environment variables             |
| ├── `package.json`     | Project dependencies & scripts    |
| ├── `tsconfig.json`    | TypeScript configuration          |
| └── `README.md`        | Project documentation (this file) |

## 🛠 Installation

### 1️⃣ Clone the repository

```sh
git clone https://github.com/your-username/express-backend.git
cd express-backend
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Create a **.env** file

```sh
PORT=5000
JWT_SECRET=your_secret_key
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
| POST   | `/api/auth/signup` | Register a new user |
| POST   | `/api/auth/login`  | Login and get JWT   |

###

| EndpointDocumentation | Description             |
| --------------------- | ----------------------- |
| `/api-docs`           | Swagger UI              |
| `/redoc`              | ReDoc API Documentation |

## ✅ Linting & Code Quality

To check for linting issues, run:

```sh
npm run lint
```

## 📝 License

This project is **MIT licensed**.
