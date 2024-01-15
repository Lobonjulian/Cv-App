export default function Estilo({ estiloHandlers, estilo }) {
  const [color, font] = estilo;
  const [setColor, setFont] = estiloHandlers;

  return (
    <div
      className="flex items-center flex-col gap-4"
      role="tabpanel"
      id="estilo"
    >
      <section>
        <h3>Color</h3>
        <label>
          Selecciona tu Color Favorito
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
      </section>
      <section>
        <h3>Fuentes</h3>
        <div className="flex gap-2">
          <button
            className={font === "serif" ? "selected " : ""}
            data-font="serif"
            onClick={() => setFont("serif")}
          >
            <span>aA</span>
            <span>Serif</span>
          </button>
          <button
            className={font === "sans" ? "selected " : ""}
            data-font="sans"
            onClick={() => setFont("sans-serif")}
          >
            <span>aA</span>
            <span>Sans</span>
          </button>
          <button
            className={font === "mono" ? "selected " : ""}
            data-font="mono"
            onClick={() => setFont("monospace")}
          >
            <span>aA</span>
            <span>Mono</span>
          </button>
        </div>
      </section>
    </div>
  );
}
