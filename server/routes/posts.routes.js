import { Router } from "express";
import {
  getPosts,
  createPosts,
  uptdatePosts,
  deletePosts,
  getPost,
  login,
} from "../controllers/posts.controllers.js";
//import { pool } from "../db.js";

const router = Router();

router.post("/login", login);

router.get("/posts", getPosts);
router.post("/posts", createPosts);
router.put("/posts/:id", uptdatePosts); //Implementar al final... dijo que podria ser un patch...
router.delete("/posts/:id", deletePosts);
router.get("/posts/:id", getPost);

// router.get("/ping", async (req, res) => {
//   const [rows] = await pool.query("SELECT 1 + 1 as result");
//   console.log(rows);
//   res.json("ping");
// });

export default router;
