import { useRef } from "react";

export default function Picture({ UrlImagen, onChangePerfil }) {
  const inputRef = useRef(null);

  const imageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onChangePerfil(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="items-center flex-col flex mt-4">
      <h3>Imagen de Perfil</h3>
      {UrlImagen && (
        <div>
          <img src={UrlImagen} alt="foto de perfil" />
          <button onClick={() => onChangePerfil("")}>Eliminar</button>
        </div>
      )}
      {!UrlImagen && <p>No hay imagen de perfil</p>}
      <form className="mt-4 flex flex-col">
        <label>
          <span>Selecciona una imagen</span>
          <input
            ref={inputRef}
            type="file"
            onChange={imageChange}
            // style={{ display: "none" }}
          />
          <input
            type="button"
            value="Buscar..."
            onClick={() => inputRef.current.click()}
            className="btn"
          />
        </label>
      </form>
    </div>
  );
}
