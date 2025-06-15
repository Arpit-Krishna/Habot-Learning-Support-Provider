export default function SearchSortBar({ query, onQueryChange, sortBy, onSortChange }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-7">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search by name or specialization..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="w-full p-3 border rounded shadow-sm"
        />
      </div>

      <div className="sm:w-48 mt-4 sm:mt-0">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full p-3 border rounded shadow-sm bg-gray-100 text-black"
        >
          <option value="">Sort By</option>
          <option value="name">Name (A-Z)</option>
          <option value="location">Location (A-Z)</option>
          <option value="ratingDesc">Rating (High to Low)</option>
          <option value="ratingAsc">Rating (Low to High)</option>
        </select>
      </div>
    </div>
  );
}
