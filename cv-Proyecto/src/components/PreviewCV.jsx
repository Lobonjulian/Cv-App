export default function PreviewCV({
  generalState,
  imagenPerfil,
  educacion,
  experiencia,
  estilos,
  showPreview,
}) {
  if (!showPreview) return;

  const nombreCompleto = generalState.nombre + " " + generalState.apellido;
  const [color, font] = estilos;
  const estilosFuentes = { fontFamily: font, fontSize: "1rem" };
  const estilosColor = isColorDark(color) ? "#e6e6e6" : "#252323";

  return (
    <div className="preview-cv" style={estilosFuentes}>
      <header style={{ backgroundColor: color, color: estilosColor }}>
        <img src={imagenPerfil} alt="Foto de perfil" />
        <div>
          <h1>{nombreCompleto}</h1>
          <h2>{generalState.puestoTrabajo}</h2>
        </div>
      </header>
      {experiencia.length !== 0 && (
        <DataSection
          data={experiencia}
          title="Experiencia"
          color={color}
          estilosColor={estilosColor}
        />
      )}
      {educacion.length !== 0 && (
        <DataSection
          data={educacion}
          title="Educación"
          color={color}
          estilosColor={estilosColor}
        />
      )}
    </div>
  );

  function DataSection({ data, title, color, estilosColor }) {
    return (
      <section>
        <h3 style={{ backgroundColor: color, color: estilosColor }}>{title}</h3>
        <ul>
          {data.map((unidadDato) => {
            return (
              <li key={unidadDato.id}>
                <h4>
                  {unidadDato.nombre} ({unidadDato.fechaInicio} -{" "}
                  {unidadDato.fechaFinal})
                </h4>
                <h5>{unidadDato.institucion}</h5>
                <p>{unidadDato.descripcion}</p>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  function isColorDark(color) {
    // elimina cualquier "#" del color
    color = color.replace(/^#/, "");

    const r = parseInt(color.slice(0, 2), 16);
    const g = parseInt(color.slice(2, 4), 16);
    const b = parseInt(color.slice(4, 6), 16);

    // Calcular la luminancia utilizando la fórmula para la luminancia relativa.
    const luminancia = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // ajuste del umbral (e.g., 0.5 for a mid-point)
    const umbral = 0.5;

    // Verifique si la luminancia es menor que el umbral para determinar si está oscuro
    return luminancia < umbral;
  }
}
