import Editor from "./ui/Editor";
import Botones from "./ui/Botones";

export default function ContenedorCV({
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
  showPreview,
  setShowPreview,
}) {
  return (
    <main>
      <Editor
        imagenPerfil={imagenPerfil}
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
      <Botones
        onChangePerfil={onChangePerfil}
        generalHandlers={generalHandlers}
        onChangeEducacion={onChangeEducacion}
        onChangeExperiencia={onChangeExperiencia}
        showPreview={showPreview}
        setShowPreview={setShowPreview}
      />
    </main>
  );
}
