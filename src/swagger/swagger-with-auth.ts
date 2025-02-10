import { Express, Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import redoc from 'redoc-express';
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Auth API Docs',
      version: '1.0.0',
      description: 'API for user authentication',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Local development server',
      },
    ],
    components: {
      securitySchemes: {
        basicAuth: {
          type: 'http',
          scheme: 'basic', // This sets up Basic Authentication
          description: 'Basic Auth required',
        },
      },
    },
    security: [
      {
        basicAuth: [], // Apply Basic Auth globally
      },
    ],
    tags: [
      {
        name: 'Auth', // Tag for authentication-related endpoints
        description: 'Operations related to user authentication',
      },
      {
        name: 'Users', // Tag for user-related operations
        description: 'Operations related to user management',
      },
    ],
  },
  apis: ['src/api/auth/*.ts', 'src/api/users/*.ts'], // Paths to your API documentation files
};

const specs = swaggerJsdoc(options);

export function setupSwaggerWithAuth(app: Express) {
  app.get('/api-docs.json', (_req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(specs);
  });

  app.get('/swagger', (req: Request, res: Response) => {
    const userName = req.user?.fullname || 'Guest';
    const userEmail = req.user?.email || 'Not logged in';

    const swaggerHtml = `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Swagger API Docs</title>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js"></script>
        </head>
        <body>
          <div id="swagger-ui"></div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css" />
          <script>
            window.onload = function () {
              const ui = SwaggerUIBundle({
                url: '/api-docs.json',
                dom_id: '#swagger-ui',
                deepLinking: true,
                presets: [
                  SwaggerUIBundle.presets.apis,
                  SwaggerUIBundle.SwaggerUIStandalonePreset,
                ],
                layout: 'BaseLayout',
              });

              var header = document.createElement('div');
              header.style.position = 'absolute';
              header.style.top = '60px';
              header.style.right = '160px'; // Increased right padding
              header.style.padding = '15px'; // Increased padding
              header.style.background = '#28a745'; // Green background color
              header.style.color = '#fff';
              header.style.borderRadius = '5px';
              header.style.fontSize = '14px';
              header.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)'; // Shadow effect
              header.innerHTML =
                '<span style="color: black;">Logged in as: </span><strong style="color: white; font-weight: bold;">${userName}</strong><br><span style="color:black">Your email: </span><strong style="color: white; font-weight: bold;">${userEmail}</strong>';
              document.body.appendChild(header);
            };
          </script>
        </body>
      </html>
    `;

    res.send(swaggerHtml);
  });

  app.get(
    '/redoc',
    redoc({
      title: 'AUTH API Docs',
      specUrl: '/api-docs.json',
      redocOptions: {
        theme: {
          colors: {
            primary: {
              main: '#6EC5AB', // Customize the primary color
            },
          },
          typography: {
            fontFamily: `"Museo Sans", 'Helvetica Neue', Helvetica, Arial, sans-serif`,
            fontSize: '15px',
            lineHeight: '1.5',
            code: {
              code: '#87E8C7', // Code color
              backgroundColor: '#4D4D4E', // Code background color
            },
          },
          menu: {
            backgroundColor: '#ffffff', // Customize menu background color
          },
        },
      },
    }),
  );
}
