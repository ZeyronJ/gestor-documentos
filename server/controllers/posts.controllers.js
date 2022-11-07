import { pool } from "../db.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
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
        (post2) => post2.id == post.propietario_usuarioFK
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
      "INSERT INTO documentos (titulo) VALUES (?)",
      [req.file.originalname]
    );
    const [result2] = await pool.query("SELECT * FROM documentos WHERE id=?", [
      result.insertId,
    ]);
    res.json({
      id: result.insertId,
      titulo: req.file.originalname,
      creado: result2[0].creado,
    });
  } catch (error) {
    console.log("aqui");
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
    const [result] = await pool.query("DELETE FROM documentos WHERE id = (?)", [
      req.params.id,
    ]);
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
  try {
    const [result] = await pool.query(
      "SELECT * FROM documentos WHERE id = (?)",
      [req.params.id]
    );
    if (result.length === 0) {
      return res.status(404).json({ message: "Documento no encontrado" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
