import express from "express";
import "dotenv/config";
import { router } from "./router";

const app = express();
const port = process.env.PORT;

app.use(router);

app.listen(port, () => {
  console.log(`A aplicação está rodando na porta ${port}`);
});
