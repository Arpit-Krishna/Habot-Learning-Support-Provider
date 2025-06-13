export default function SearchBar({ query, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by name or specialization..."
      value={query}
      onChange={onChange}
      className="block w-full mb-6 p-3 border rounded shadow-sm"
    />
  );
}
