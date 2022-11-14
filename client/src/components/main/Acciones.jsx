import "../../styles/acciones.css";
import toast from "react-hot-toast";
import { useContext } from "react";
import { accionesContext } from "../../context/accionesContext";
function Acciones() {
  const { postSelect, deletePost, downloadPost } = useContext(accionesContext);
  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p style={{ fontSize: "1.4em" }}>
          Seguro de que quieres eliminar el documento? <strong>{id}</strong>
        </p>
        <div>
          <button
            className="toast-eliminar"
            onClick={() => {
              deletePost(id);
              toast.dismiss(t.id);
            }}
          >
            Eliminar
          </button>
          <button
            className="toast-cancelar"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancelar
          </button>
        </div>
      </div>
    ));
  };
  return (
    <>
      <div className="acciones-containter">
        <button onClick={() => console.log(postSelect)}>Abrir</button>
        <button>Editar</button>
        <button>Validar</button>
        <button onClick={() => downloadPost(postSelect)}>Descargar</button>
        <button>Enviar</button>
        <button onClick={() => handleDelete(postSelect)}>Eliminar</button>
      </div>
      ;
    </>
  );
}

export default Acciones;
