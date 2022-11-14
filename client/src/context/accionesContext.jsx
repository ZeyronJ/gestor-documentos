import { createContext, useState } from "react";
import { deletePostRequests, downloadPostRequests } from "../api/posts.js";
import { usePosts } from "../context/postContext.jsx";

export const accionesContext = createContext();

export const AccionesProvider = ({ children }) => {
  const [postSelect, setPostSelect] = useState(0);
  const { posts, setPosts } = usePosts();
  const deletePost = async (id) => {
    await deletePostRequests(id); //No se utiliza res ya que el backend no nos entrega mas que solo si se pudo o no realizar el delete
    setPosts(posts.filter((post) => post.id !== id)); //Se añade mediante estados, no interfiriendo con la DB
  };
  const downloadPost = async (id) => {
    //await downloadPostRequests(id);
    window.open("http://localhost:4000/download/" + id);
  };
  return (
    <accionesContext.Provider
      value={{ postSelect, setPostSelect, deletePost, downloadPost }}
    >
      {children}
    </accionesContext.Provider>
  );
};
