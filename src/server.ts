import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import signIn from "./api/auth/siignIn";
import signUp from "./api/auth/signUp";
import { setupSwagger } from "../src/swagger";
import home from "../src/app/home";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Register the signIn route
app.use("/api/auth/signin", signIn);

// Register the signUp route
app.use("/api/auth/signup", signUp);

app.use("/", home);

setupSwagger(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger UI is available at http://localhost:${PORT}/api-docs`);
  console.log(
    `Redoc Documentation is available at http://localhost:${PORT}/redoc`,
  );

  console.log("Project Documentation:");
  console.log(
    "For more information, please visit the project repository on GitHub:",
  );
  console.log(
    "GitHub Repository: https://github.com/Kaveks/expressjs-api-documentation",
  );
});
