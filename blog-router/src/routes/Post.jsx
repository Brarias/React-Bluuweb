import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Post = () => {
  const params = useParams(); // creamos la constante para capturar el id

  const { data, error, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error !== "") {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>
        {data.id} - {data.title}
      </h1>
      <p>{data.body}</p>
    </div>
  );
};

export default Post;
