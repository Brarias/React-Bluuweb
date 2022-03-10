import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

// usamos Outlet para q se pinte el componente correspondiente a la ruta que anidamos

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
