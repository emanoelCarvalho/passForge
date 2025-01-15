const express = require("express");
const passwordRoutes = require("./routes/passwordRoutes");
const secretKeyRoutes = require("./routes/secretKeyRoutes");

const app = express();

app.use(express.json());

app.use('/api', passwordRoutes);
app.use('/api', secretKeyRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})