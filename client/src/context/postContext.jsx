import { useState, useContext, createContext, useEffect } from "react";
import { getPostsRequests, createPostRequests } from "../api/posts";

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await getPostsRequests();
    setPosts(res.data);
  };
  const createPost = async (post) => {
    const res = await createPostRequests(post); //Se añade usando el SV y la DB (se demora un poquito, por eso la siguiente linea)
    setPosts([...posts, res.data]); //Se añade mediante estados, no interfiriendo con la DB
    console.log(res);
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <postContext.Provider value={{ posts, setPosts, getPosts, createPost }}>
      {children}
    </postContext.Provider>
  );
};
