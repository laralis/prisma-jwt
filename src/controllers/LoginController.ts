import { Response, Request } from "express";
import { database } from "../service/database";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../common/env";

export class LoginController {
  async login(req: Request, res: Response) {
    const user = req.body;

    const authUser = await database.user.findUnique({
      where: { email: user.email },
    });

    if (authUser) {
      if (authUser.password === user.password) {
        const token = jwt.sign(
          { email: authUser.email, user_id: authUser.id },
          jwtSecret,
          {
            expiresIn: "30m",
          }
        );

        res.send({ message: "Usuário logado com sucesso", token });
      }
    } else {
      res.send({ message: "Credenciais inválidas" });
    }
  }
}
