import { Router } from "express";
import {
  getPosts,
  createPosts,
  uptdatePosts,
  deletePosts,
  login,
  getPost,
} from "../controllers/posts.controllers.js";
import { pool } from "../db.js";

const router = Router();

router.post("/login", login); //Verificar que exista la cuenta de usuario y la devuelve

router.get("/posts", getPosts); //Mostrar todos los posts
router.post("/posts", createPosts); //Crear post
router.put("/posts/:id", uptdatePosts); //Implementar al final... dijo que podria ser un patch...
router.delete("/posts/:id", deletePosts); //Elimina el documento mediante su id
router.get("/download/:id", getPost);
//router.get("/posts/:id", getPost); //Descargar documento

// router.get("/ping", async (req, res) => {
//   const [rows] = await pool.query("SELECT 1 + 1 as result");
//   console.log(rows);
//   res.json("ping");
// });

export default router;
