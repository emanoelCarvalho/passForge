const express = require("express");
require("dotenv").config();

const passwordRoutes = require("./routes/passwordRoutes");
const secretKeyRoutes = require("./routes/secretKeyRoutes");
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use("/api", passwordRoutes);
app.use("/api", secretKeyRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
