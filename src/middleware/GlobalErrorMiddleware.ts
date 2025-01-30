import { NextFunction, Request, Response } from "express";

export const globalErrorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message,
  });
};
