import { Router } from "express";

const home = Router();

home.get("/", (req, res) => {
  res.send(
    `<h1>Welcome to Redoc and Swagger Integration Sample</h1>
    <p>Please read the <a href="https://github.com/Kaveks/expressjs-api-documentation" target="_blank">README.md</a> file for more information.</p>`,
  );
});

export default home;
