import { Request, Response } from "express";
import { database } from "../service/database";

export class PostsController {
  async getAll(req: Request, res: Response) {
    const data = await database.post.findMany();

    res.send(data);
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;

    const data = await database.post.findUniqueOrThrow({
      where: {
        id: Number(id),
      },
    });

    res.send(data);
  }

  async create(req: Request, res: Response) {
    const data = req.body;

    const post = await database.post.create({
      data: { ...data, user_id: req.user?.user_id },
    });

    res.status(201).send(post);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await database.post.delete({
      where: {
        id: Number(id),
        user_id: req.user?.user_id,
      },
    });

    res.status(200).send({ message: "Post excluido com sucesso" });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const { title, description } = req.body;

    await database.post.update({
      where: {
        id: Number(id),
        user_id: req.user?.user_id,
      },
      data: {
        title,
        description,
      },
    });

    res.status(204).send({ message: "Post atualizado" });
  }
}
