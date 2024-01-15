import { EJEMPLO } from "../../constantes";

export default function Botones({
  onChangePerfil,
  generalHandlers,
  onChangeEducacion,
  onChangeExperiencia,
  showPreview,
  setShowPreview,
}) {
  const setEjemplo = () => {
    onChangePerfil(EJEMPLO.imagenPerfil);
    generalHandlers.handleNombre(EJEMPLO.nombre);
    generalHandlers.handleApellido(EJEMPLO.apellido);
    generalHandlers.handlePuestoTrabajo(EJEMPLO.puestoTrabajo);
    generalHandlers.handleEmail(EJEMPLO.email);
    generalHandlers.handleUbicacion(EJEMPLO.ubicacion);
    generalHandlers.handleTelefono(EJEMPLO.telefono);
    onChangeEducacion(EJEMPLO.educacion);
    onChangeExperiencia(EJEMPLO.experiencia);
  };

  const limpiar = () => {
    onChangePerfil("");
    Object.values(generalHandlers).forEach((handler) => {
      handler("");
    });
    onChangeEducacion([]);
    onChangeExperiencia([]);
  };

  const mostrarIcon = showPreview ? (
    <svg>
      <use xlinkHref="#icon-eye" />
    </svg>
  ) : (
    <svg>
      <use xlinkHref="#icon-eye-closed" />
    </svg>
  );

  return (
    <div>
      <div>
        <button onClick={() => setShowPreview(!showPreview)}>
          {mostrarIcon}
        </button>
        <button onClick={() => setEjemplo()}>Ejemplo</button>
        <button onClick={() => limpiar()}>Limpiar</button>
      </div>
    </div>
  );
}
