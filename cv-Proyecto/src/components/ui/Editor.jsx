import { useState } from "react";
import Pestana from "./Pestana";
import Formas from "./Formas";

export default function editor({
  imagenPerfil,
  onChangePerfil,
  generalState,
  generalHandlers,
  educacion,
  onChangeEducacion,
  experiencia,
  onChangeExperiencia,
  estilos,
  estilosHandlers,
}) {
  const [pestanaActual, setPestanaActual] = useState(0);
  const cambiarPestana = (pestanaIndex) => setPestanaActual(pestanaIndex);

  return (
    <div className="mb-3">
      <Pestana pestanaActual={pestanaActual} cambiarPestana={cambiarPestana} />
      <Formas
        pestanaActual={pestanaActual}
        imagenperfil={imagenPerfil}
        onChangePerfil={onChangePerfil}
        generalState={generalState}
        generalHandlers={generalHandlers}
        educacion={educacion}
        onChangeEducacion={onChangeEducacion}
        experiencia={experiencia}
        onChangeExperiencia={onChangeExperiencia}
        estilos={estilos}
        estilosHandlers={estilosHandlers}
      />
    </div>
  );
}
