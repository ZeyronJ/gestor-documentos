import { pool } from "../db.js";
import fs from "fs-extra";
import download from "download";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const [result] = await pool.query(
      "SELECT * FROM usuarios WHERE username = ? AND password = ?",
      [username, password]
    );
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM documentos ORDER BY creado ASC"
    );
    const [result2] = await pool.query("SELECT * FROM usuarios");
    //console.log(result2);
    result.forEach((post) => {
      //result2.forEach((post2) => console.log(post2.id));
      post.propietario_usuarioFK = result2.filter(
        (user) => user.id == post.propietario_usuarioFK
      )[0].fullname;
    });
    res.json(result); //result tiene los registros (arreglo de objetos)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  try {
    const [result] = await pool.query(
      "INSERT INTO documentos (titulo, path_documento) VALUES (?,?)",
      [req.file.originalname, req.file.path]
    ); //Lo sisguien se realiza para obtener el atributo creado del documento y poder mandarselo al cliente y este no tenga que recargar pagina para verlo
    const [result2] = await pool.query("SELECT * FROM documentos WHERE id=?", [
      result.insertId,
    ]);
    console.log(req.file);
    res.json({
      id: result.insertId,
      titulo: req.file.originalname,
      creado: result2[0].creado,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const uptdatePosts = async (req, res) => {
  try {
    const { titulo } = req.body;
    const result = await pool.query("UPDATE documentos SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePosts = async (req, res) => {
  try {
    const [result2] = await pool.query(
      "SELECT * FROM documentos WHERE id = (?)",
      [req.params.id]
    );
    const [result] = await pool.query("DELETE FROM documentos WHERE id = (?)", [
      req.params.id,
    ]);
    console.log(result2[0].path_documento, typeof result2[0].path_documento);
    await fs.remove(result2[0].path_documento);
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Documento no encontrado para eliminar" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  //const { pathname: root } = new URL("../../", import.meta.url);
  //const ruta = (root).substring()
  try {
    const [result] = await pool.query(
      "SELECT * FROM documentos WHERE id = (?)",
      [req.params.id]
    );
    res.download(result[0].path_documento, result[0].titulo, function (err) {
      if (err) {
        console.log("Error : ", err);
      } else {
        console.log("Descargando...", result[0].path_documento);
      }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// export const getPost = async (req, res) => {
//   try {
//     const [result] = await pool.query(
//       "SELECT * FROM documentos WHERE id = (?)",
//       [req.params.id]
//     );
//     if (result.length === 0) {
//       return res.status(404).json({ message: "Documento no encontrado" });
//     }
//     res.json(result[0]);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };
