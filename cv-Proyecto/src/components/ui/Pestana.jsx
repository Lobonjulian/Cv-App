import { PESTANAS } from "../../constantes";

export default function Pestana({ pestanaActual, cambiarPestana }) {
  return (
    <nav>
      <ul>
        {PESTANAS.map((pestana, index) => (
          <li key={index}>
            <button
              className={pestanaActual === index ? "active" : ""}
              onClick={() => cambiarPestana(index)}
            >
              {pestana}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
