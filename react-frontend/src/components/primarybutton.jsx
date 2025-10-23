export default function PrimaryButton({ label, onClick, type = "primary" }) {
  const base =
    "px-6 py-3 rounded-lg font-semibold transition duration-300 text-lg";

  const styles =
    type === "outline"
      ? "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
      : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {label}
    </button>
  );
}
