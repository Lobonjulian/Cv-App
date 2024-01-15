import InputGeneral from "./InputGeneral";

export default function General() {
  return (
    <div>
      <h2>Detalles Personales</h2>
      <form>
        <InputGeneral label="Nombre" />
        <InputGeneral label="Apellido" />
        <InputGeneral label="Perfil Laboral" />
        <InputGeneral label="Teléfono" type="tel" />
        <InputGeneral label="Email" type="email" />
        <InputGeneral label="Localización" />
      </form>
    </div>
  );
}
