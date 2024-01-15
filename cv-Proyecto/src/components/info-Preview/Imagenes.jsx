import { useRef } from "react";

export default function Imagenes({ imagenPerfil, onChangePerfil }) {
  const inputRef = useRef(null);

  const imageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onChangePerfil(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="items-center flex-col flex mt-4 p-4" role="tabpanel">
      <h3 className="mb-4 text-xl font-semibold text-indigo-400">
        Imagen de Perfil
      </h3>
      {imagenPerfil && (
        <div className="relative">
          <img
            className="w-48 h-48 object-cover rounded-full shadow-lg"
            src={imagenPerfil}
            alt="foto de perfil"
          />
          <button onClick={() => onChangePerfil("")}>
            {" "}
            <span className="text-2xl rounded-full bg-red-600 absolute top-36 right-3">
              ✖️
            </span>{" "}
          </button>
        </div>
      )}
      {!imagenPerfil && (
        <p className="opacity-85 text-slate-300">No hay imagen de perfil</p>
      )}
      <form className="gap-2 flex flex-col">
        <label className="flex flex-col">
          <span className="font-semibold mb-2">Seleccionar una imagen</span>
          <input
            ref={inputRef}
            type="file"
            onChange={imageChange}
            style={{ display: "none" }}
          />
          <input
            className="border-2 rounded-md bg-slate-100 hover:bg-slate-300 "
            type="button"
            value="Buscar..."
            onClick={() => inputRef.current.click()}
          />
        </label>
      </form>
    </div>
  );
}
