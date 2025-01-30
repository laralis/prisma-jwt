import "express";
import { JwtPayload } from "../common/types";

declare module "express" {
  interface Request {
    user?: JwtPayload;
  }
}
