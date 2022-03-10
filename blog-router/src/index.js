import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "./routes/Blog";
import Contacto from "./routes/Contacto";
import Inicio from "./routes/Inicio";
import NoEncontrado from "./routes/NoEncontrado";
import Post from "./routes/Post";

// para llamar a las rutas, debemos importar los componentes Routes y route
// anidamos las rutas para que no desaparezca el navbar. Anidamos todo dentro de Inicio
// utisamos index en vez de path, para pintar la ruta raiza, en este caso Inicio
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Inicio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<Post />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
//"blog/:id es un param, leemos el id y lo asignamos como una ruta dinámica"
