export default function InfoGeneral() {
  return (
    <>
      <form id="info-form">
        <label>
          <span>Nombre</span>
          <input required name="name" placeholder="Nombre de experiencia " />
        </label>
        <label>
          <span>Empresa</span>
          <input required name="organization" placeholder="Organizacion" />
        </label>
        <label>
          <span>En Curso: </span>
          <input type="checkbox" />
        </label>
        <div className="date-row">
          <label>
            <span>Fecha de Inicio</span>
            <input
              name="startDate"
              required
              type="month"
              placeholder="2018-05"
            />
          </label>
        </div>

        <label>
          <span>Descripción</span>
          <textarea
            name="description"
            className="info-form-description"
            // defaultValue={thisData?.description}
          ></textarea>
        </label>
        <div className="buttons-container">
          <button className="btn" type="button">
            Cancelar
          </button>
          <button className="btn primary-button" type="submit">
            Guardar
          </button>
        </div>
      </form>

      <form id="info-form">
        <label>
          <span>Nombre</span>
          <input required name="name" placeholder="Nombre de Titulo " />
        </label>
        <label>
          <span>Universidad o Colegio </span>
          <input required name="organization" placeholder="Organizacion" />
        </label>
        <label>
          <span>En Curso: </span>
          <input type="checkbox" />
        </label>
        <div className="date-row">
          <label>
            <span>Fecha de Inicio</span>
            <input
              name="startDate"
              required
              type="month"
              placeholder="2018-05"
            />
          </label>
        </div>

        <label>
          <span>Descripción</span>
          <textarea
            name="description"
            className="info-form-description"
          ></textarea>
        </label>
        <div className="buttons-container">
          <button className="btn" type="button">
            Cancelar
          </button>
          <button className="btn primary-button" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </>
  );
}
