import Nav from "../components/nav/Nav";
import Documentos from "../components/main/Documentos";
import Acciones from "../components/main/Acciones";
import { useContext } from "react";
import { showContext } from "../context/showContext";

function Menu() {
  const { showDocumentos } = useContext(showContext);
  return (
    <>
      <Nav />
      {showDocumentos && <Documentos />}
      <Acciones />
    </>
  );
}

export default Menu;
