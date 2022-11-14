import express from "express";
import postRoutes from "./routes/posts.routes.js";
import cors from "cors";
import multer from "multer";

const app = express();
const port = 4000;
//middlewares
app.use(express.json()); //procesar los datos del cliente (si es json)
app.use(cors()); //areggla el error de seguridad cors, se puede especificar que paginas queremos darle permisos
app.use(multer({ dest: "./subido" }).single("archivo"));
//rutas
app.use(postRoutes);

app.listen(port);
console.log("Server in running port:", port);
