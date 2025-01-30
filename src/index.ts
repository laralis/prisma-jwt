import "dotenv/config";
import "express-async-errors";
import express from "express";
import { router } from "./router";
import { globalErrorMiddleware } from "./middleware/GlobalErrorMiddleware";

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use(router);

app.use(globalErrorMiddleware);

app.listen(port, () => {
  console.log(`A aplicação está rodando na porta ${port}`);
});
