import express from "express";
import { UserController } from "./controllers/UserController";
import { PostsController } from "./controllers/PostsController";
import { LoginController } from "./controllers/LoginController";
import { authMiddleware } from "./middleware/AuthMiddleware";

export const router = express.Router();

const userController = new UserController();
const postController = new PostsController();
const loginController = new LoginController();

router.get("/users", authMiddleware, userController.getAll);
router.post("/users", userController.create);
router.get("/posts", authMiddleware, postController.getAll);
router.get("/posts/:id", authMiddleware, postController.getOne);
router.post("/posts", authMiddleware, postController.create);
router.put("/posts/:id", authMiddleware, postController.update);
router.delete("/posts/:id", authMiddleware, postController.delete);
router.post("/login", loginController.login);
