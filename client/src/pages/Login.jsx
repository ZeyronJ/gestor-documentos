import React, { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { loginRequests } from "../api/accounts";

function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [contra, setContra] = useState("");
  const enviarLogin = async (datos) => {
    const res = await loginRequests(datos);
    if (Object.entries(res.data).length == 0) {
      alert("Usuario no encontrado");
    } else {
      navigate("/menu");
    }
  };

  return (
    <div className="Container-login">
      <div className="Login">
        <img
          className="Login__img"
          src="/src/assets/logo-horizontal.svg"
          alt="Logo"
        />
        <form className="Login__form">
          <input
            type="text"
            placeholder="Usuario"
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setContra(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              enviarLogin({ username: usuario, password: contra });
            }}
          >
            Iniciar sesion
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
