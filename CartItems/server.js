import express from "express";
import router from "./routes/routes.js";
import bodyParser from "body-parser";
import cors from 'cors'

const app = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api", router)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});