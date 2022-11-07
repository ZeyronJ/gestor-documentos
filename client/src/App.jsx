import "./App.css";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/postContext";
import { ShowProvider } from "./context/showContext";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <PostProvider>
      <ShowProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="*" element={<div>No se encontro pagina</div>}></Route>
        </Routes>
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
