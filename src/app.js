const express = require("express");
const passwordRoutes = require("./routes/passwordRoutes");

const app = express();

app.use(express.json());

app.use('/api', passwordRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})