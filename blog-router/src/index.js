import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "./routes/Blog";
import Contacto from "./routes/Contacto";
import Inicio from "./routes/Inicio";
import NoEncontrado from "./routes/NoEncontrado";
import Post from "./routes/Post";
import RutaProtegida from "./routes/RutaProtegida";
import UserProvider from "./context/UserProvider";
import VerificarUsuario from "./components/VerificarUsuario";

// para llamar a las rutas, debemos importar los componentes Routes y route
// anidamos las rutas para que no desaparezca el navbar. Anidamos todo dentro de Inicio
// utisamos index en vez de path, para pintar la ruta raiza, en este caso Inicio
// envolvemos a toda la aplicación con el userProvider para q los demás componentes puedan acceder a sus atributos
// envolvemos la ruta protegida con VerificarUsuario, para hacer un redirect en caso q no exista
ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<Post />} />
          <Route path="contacto" element={<Contacto />} />

          <Route
            path="protegida"
            element={
              <VerificarUsuario>
                <RutaProtegida />
              </VerificarUsuario>
            }
          />

          <Route path="*" element={<NoEncontrado />} />
        </Route>
      </Routes>
    </UserProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
//"blog/:id es un param, leemos el id y lo asignamos como una ruta dinámica"
