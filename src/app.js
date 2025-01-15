const express = require("express");

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const passwordRoutes = require("./routes/passwordRoutes");
const secretKeyRoutes = require("./routes/secretKeyRoutes");

const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Password Manager API",
      version: "1.0.0",
      description: "Documentation for Password Manager API",
    },
  },

  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

app.use("/api", passwordRoutes);
app.use("/api", secretKeyRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
