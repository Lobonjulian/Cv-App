export default function Estilo() {
  return (
    <div className="flex items-center flex-col gap-4">
      <section>
        <h3>Color</h3>
        <label>
          Selecciona tu Color Favorito
          <input type="color" />
        </label>
      </section>
      <section>
        <h3>Fuentes</h3>
        <div className="flex gap-2">
          <button data-font="serif">
            <span>aA</span>
            <span>Serif</span>
          </button>
          <button

          // data-font="sans"
          >
            <span>aA</span>
            <span>Sans</span>
          </button>
          <button

          // data-font="mono"
          >
            <span>aA</span>
            <span>Mono</span>
          </button>
        </div>
      </section>
    </div>
  );
}
