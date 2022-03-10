// creamos el hook para hacer solicitud de la API con fetch

import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]); // creamos la constante donde guardameromos los datos recibidos de la AP

  const [error, setError] = useState(""); // constante para detectar el error

  const [loading, setLoading] = useState(false); // constante para capturar la carga

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json()) // retornamos la respuesta en json
      .then((data) => setData(data)) // obtenemos la data que es lo q vamos a pintar
      .catch((e) => setError("Error de servidor")) // capturamos el error
      .finally(() => setLoading(false));
  }, [url]); // cada vez q cambie la url, se ejecuta el useEffect

  return { data, error, loading };
};
