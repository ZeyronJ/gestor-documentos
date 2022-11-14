import "./App.css";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/postContext";
import { ShowProvider } from "./context/showContext";
import { AccionesProvider } from "./context/accionesContext";
import Nav from "./components/nav/Nav";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <PostProvider>
      <ShowProvider>
        <AccionesProvider>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route
              path="*"
              element={<div>No se encontro la pagina</div>}
            ></Route>
          </Routes>
          <Toaster />
        </AccionesProvider>
      </ShowProvider>
    </PostProvider>
  );
}

export default App;
// <div className="App">
//   {/*Autentificado =>
//     header
//     barra lateral
//     vista de archivos
//     iconos
//     */}

//   {/*No autentificado: Iniciar sesion*/}
//   {/* <Login /> */}
//   <Menu />
// </div>
