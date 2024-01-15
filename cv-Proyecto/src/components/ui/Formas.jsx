import { useState } from "react";
import Imagenes from "../info-Preview/Imagenes";
import General from "../info-Preview/General";
import InfoGeneral from "../info-Preview/InfoGeneral";
import Estilo from "../info-Preview/Estilo";

export default function Formas({
  pestanaActual,
  imagenperfil,
  onChangePerfil,
  generalState,
  setGeneralState,
}) {
  const [informacionDetallada, setInformacionDetallada] = useState(null);
  const handleDetallesChange = (abrirSeccion) => {
    if (abrirSeccion === informacionDetallada) {
      setInformacionDetallada(null);
      return;
    }
    setInformacionDetallada(abrirSeccion);
  };
  switch (pestanaActual) {
    case 0:
      return (
        <Imagenes imagenPerfil={imagenperfil} onChangePerfil={onChangePerfil} />
      );
    case 1:
      return <General />;
    case 2:
      return <InfoGeneral />;
    case 3:
      return <Estilo />;
      default:
        break
  }
  return <div>Formas</div>;
}
