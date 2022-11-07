import Nav from "../components/nav/Nav";
import { useContext } from "react";
import Documentos from "../components/main/Documentos";
import { showContext } from "../context/showContext";

function Menu() {
  const { showDocumentos } = useContext(showContext);
  return (
    <>
      <Nav />
      {showDocumentos && <Documentos />}
    </>
  );
}

export default Menu;
