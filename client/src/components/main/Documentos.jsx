import { useState } from "react";
import { usePosts } from "../../context/postContext.jsx";
import "../../styles/documentos.css";

function Documentos() {
  const { posts, createPost } = usePosts();
  const [archivo, setArchivo] = useState(null);
  return (
    <div className="documentos-container">
      <p className="documentos-ruta">Carpeta1 &gt; Carpeta actual</p>
      <hr />
      <div className="documentos-header">
        <p className="documentos-header__nombre">Nombre</p>
        <p className="documentos-header__propietario">Propietario</p>
        <p className="documentos-header__ultima-modificacion">
          Ultima modificacion
        </p>
      </div>
      <hr />
      <div className="documentos">
        {posts.map((post) => {
          return (
            <div className="documentos-item" key={post.id}>
              <img
                src="/src/assets/iconos/imagenes.png"
                alt="imagen"
                style={{ height: "18px", marginLeft: "5px" }}
              ></img>
              <p style={{ width: "37%", textIndent: "5px" }}>{post.titulo}</p>
              <p style={{ width: "43%", textAlign: "left" }}>
                {post.propietario_usuarioFK}
              </p>
              <p style={{ width: "20%", textAlign: "right" }}>{post.creado}</p>
            </div>
          );
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost({ archivo });
        }}
      >
        <input
          type="file"
          name="archivo"
          onChange={(e) => setArchivo(e.target.files[0])}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default Documentos;
