import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
  let [searchParams, setSearchParams] = useSearchParams(); // creamos parámetros de búsqueda

  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error !== "") {
    return <h2>{error}</h2>;
  }

  const handleChange = (e) => {
    let filter = e.target.value;

    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  return (
    // con Link creamos enlaces en los posts
    // en el value del input va el filtro de búsqueda
    <div>
      <h1>Blog</h1>
      <input
        type="text"
        className="form-control mb2"
        value={searchParams.get("filter") || ""}
        onChange={handleChange}
      />

      {data
        .filter((item) => {
          // asignamos la búsqueda al filtro
          let filter = searchParams.get("filter");
          if (!filter) return true;

          let title = item.title.toLowerCase();
          return title.startsWith(filter.toLowerCase());
        })
        .map((item) => (
          <h4 key={item.id}>
            <Link to={`/blog/${item.id}`}>
              {item.id} - {item.title}
            </Link>
          </h4>
        ))}
    </div>
  );
};

export default Blog;
