const express = require("express");

const passwordRoutes = require("./routes/passwordRoutes");
const secretKeyRoutes = require("./routes/secretKeyRoutes");
const config = require("./services/configServices");

const PORT = config.getEnv("PORT");
const app = express();

app.use(express.json());
app.use("/api", passwordRoutes);
app.use("/api", secretKeyRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
