import { createContext, useState } from "react";

export const showContext = createContext(); //Intermediario para que los demas componentes puedan usar el contexto

//Provee la informacion a todos sus hijos
export const ShowProvider = ({ children }) => {
  const [showDocumentos, setShowDocumentos] = useState(false); //variable bool que se usara para mostrar Mis unidades
  return (
    <showContext.Provider value={{ showDocumentos, setShowDocumentos }}>
      {children}
    </showContext.Provider>
  );
};
