import { Request, Response } from "express";
import { database } from "../service/database";
export class UserController {
  async getAll(req: Request, res: Response) {
    const data = await database.user.findMany();
    
    res.send(data);
  }
  async create(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await database.user.create({
      data: {
        email,
        password,
      },
    });

    res.status(201).send(user);
  }
}
