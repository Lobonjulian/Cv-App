import PreviewCV from "./components/PreviewCV";
import { EJEMPLO } from "../src/constantes.js";
import { useState } from "react";
import Contenedor from "./components/ContenedorCV.jsx";

function App() {
  // estados
  const [imagenPerfil, setImagenPerfil] = useState("/perfilCV.avif");
  const [nombre, setNombre] = useState(EJEMPLO.nombre);
  const [apellido, setApellido] = useState(EJEMPLO.apellido);
  const [puestoTrabajo, setPuestoTrabajo] = useState(EJEMPLO.puestoTrabajo);
  const [email, setEmail] = useState(EJEMPLO.email);
  const [telefono, setTelefono] = useState(EJEMPLO.telefono);
  const [ubicacion, setUbicacion] = useState(EJEMPLO.ubicacion);
  const [educacion, setEducacion] = useState(EJEMPLO.educacion);
  const [experiencia, setExperiencia] = useState(EJEMPLO.experiencia);
  const [color, setColor] = useState("#0e374e");
  const [font, setFont] = useState("serif");
  const estiloData = [color, font];
  const estiloHandlers = [setColor, setFont];
  const [showPreview, setShowPreview] = useState(true);
  const generalState = {
    nombre,
    apellido,
    email,
    puestoTrabajo,
    telefono,
    ubicacion,
  };

  // Manejadores de Evento
  const handleNombre = (nuevoValor) => setNombre(nuevoValor);
  const handleApellido = (nuevoValor) => setApellido(nuevoValor);
  const handlePuestoTrabajo = (nuevoValor) => setPuestoTrabajo(nuevoValor);
  const handleEmail = (nuevoValor) => setEmail(nuevoValor);
  const handleTelefono = (nuevoValor) => setTelefono(nuevoValor);
  const handleUbicacion = (nuevoValor) => setUbicacion(nuevoValor);

  const generalHandlers = {
    handleNombre,
    handleApellido,
    handlePuestoTrabajo,
    handleEmail,
    handleTelefono,
    handleUbicacion,
  };

  return (
    <>
      <h1 className="text-4xl text-center my-4 font-semibold">CV Aplicación</h1>
      <Contenedor
        imagenPerfil={imagenPerfil}
        onChangePerfil={setImagenPerfil}
        generalState={generalState}
        generalHandlers={generalHandlers}
        educacion={educacion}
        onChangeEducacion={setEducacion}
        experiencia={experiencia}
        onChangeExperiencia={setExperiencia}
        estilos={estiloData}
        estilosHandlers={estiloHandlers}
        showPreview={showPreview}
        setShowPreview={setShowPreview}
      />
      <PreviewCV
        generalState={generalState}
        imagenPerfil={imagenPerfil}
        educacion={educacion}
        experiencia={experiencia}
        estilos={estiloData}
        showPreview={showPreview}
      />
    </>
  );
}

export default App;
