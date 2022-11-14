import "../../styles/nav.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { showContext } from "../../context/showContext";
function Nav() {
  const navigate = useNavigate();
  const { setShowDocumentos } = useContext(showContext);
  const [showUnidades, setShowUnidades] = useState(false); //Se podria usar context
  return (
    <div className="container-nav">
      <div className="nav">
        <img src="/src/assets/logo-vertical.png" alt="logo vertical" />
        <hr />
        <div className="nav__unidades">
          <button onClick={() => setShowUnidades((bool) => !bool)}>
            Unidades
          </button>
          {showUnidades && (
            <div
              style={{
                width: "inherit",
                height: "140px",
                background: "inherit",
              }}
            >
              <button
                className={`nav__unidades__Documentos`}
                onClick={() => setShowDocumentos((bool) => !bool)}
              >
                Mis Unidades
              </button>
              <button className="nav__unidades__Documentos">Organigrama</button>
            </div>
          )}
        </div>
        <hr />
        <div className="nav__oficiales">
          <button>Documentos oficiales</button>
        </div>
        <hr />
        <div className="nav__notificaciones">
          <button>Notificaciones</button>
        </div>
        <hr />
        <div className="nav__cuenta">
          <button>Cuenta</button>
        </div>
        <hr />

        <button
          className="nav__salir"
          onClick={() => {
            setShowDocumentos(false);
            navigate("/");
          }}
        >
          Salir
        </button>
      </div>
    </div>
  );
}

export default Nav;
