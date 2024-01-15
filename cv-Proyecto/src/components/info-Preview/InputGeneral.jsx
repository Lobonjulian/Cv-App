export default function InputGeneral({ handler, label, state, type = "text" }) {
  return (
    <label className=" mb-2 flex">
      <span className="mr-4"> {label} </span>
      <input
        className="border-slate-300 rounded-sm border-2 p-1"
        type={type}
        value={state}
        onChange={(e) => handler(e.target.value)}
      />
    </label>
  );
}
