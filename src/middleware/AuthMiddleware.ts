import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../common/env";
import { JwtPayload } from "../common/types";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1] ?? "";

  try {
    jwt.verify(token, jwtSecret);

    const user = jwt.decode(token);

    req.user = user as JwtPayload;

    next();
  } catch {
    res.send({ message: "Acesso negado" });
  }
};
