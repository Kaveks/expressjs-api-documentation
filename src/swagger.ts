import { Express } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import redoc from "redoc-express";

const options = {
  definition: {
    openapi: "3.0.0", // The version of OpenAPI specification
    info: {
      title: "Auth API",
      version: "1.0.0",
      description: "API for user authentication", // Description of the API
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local development server",
      },
    ],
  },
  apis: ["src/api/auth/*.ts"], // Path to the api routes
};

const specs = swaggerJsdoc(options);

export function setupSwagger(app: Express) {
  // Serve the Swagger JSON specification
  app.get("/api-docs.json", (_req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(specs); // Send the generated OpenAPI spec
  });

  // Swagger UI setup
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

  // ReDoc setup
  app.use("/redoc", redoc({ title: "Auth API", specUrl: "/api-docs.json" }));
}
