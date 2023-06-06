const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "./.env") });

const todosRouter = require("./routes/todos-router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: ["http://localhost:3000"], useCredentials: true }));
app.use("/api", todosRouter);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log("Server is listening on Port:", PORT);
});
