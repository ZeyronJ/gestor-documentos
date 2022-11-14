import axios from "axios";

export const getPostsRequests = async () =>
  await axios.get("http://localhost:4000/posts"); //esto es asi por el proxy, sino tendria que ser http://localhost:4000/posts
export const createPostRequests = async (post) => {
  const form = new FormData();
  for (let key in post) {
    form.append(key, post[key]);
  }
  return await axios.post("http://localhost:4000/posts", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const deletePostRequests = async (id) =>
  await axios.delete("http://localhost:4000/posts/" + id);
export const downloadPostRequests = async (id) =>
  await axios.get("http://localhost:4000/download/" + id);
