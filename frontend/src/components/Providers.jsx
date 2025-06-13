import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchProviders } from "../services/providerService";
import { Star } from "lucide-react";
import SearchBar from "../components/SearchBar";

export default function ProviderList() {
  const [providers, setProviders] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const itemsPerPage = 6;
  const navigate = useNavigate();

    useEffect(() => {
        fetchProviders().then(data => {
        setProviders(data);
        setLoading(false);
        });
    }, []);

    useEffect(() => {
        const initialQuery = searchParams.get("q") || "";
        setQuery(initialQuery);
    }, [searchParams]);

    useEffect(() => {
        const q = query.toLowerCase();
        const result = providers.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.specialization.toLowerCase().includes(q)
        );
        setFiltered(result);
        setCurrentPage(1);
    }, [query, providers]);

    useEffect(() => {
        const q = query.toLowerCase();
        const result = providers.filter(
        (p) =>
            p.name.toLowerCase().includes(q) ||
            p.specialization.toLowerCase().includes(q)
        );
        setFiltered(result);
        setCurrentPage(1); // reset to page 1 on search
    }, [query, providers]);

    // When typing in search bar on Providers page
    const handleQueryChange = (val) => {
        setQuery(val);
        setSearchParams({ q: val });
    };

    // Sort data
    let sortedProviders = [...filtered];

    if (sortBy === "name") {
        sortedProviders.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "location") {
        sortedProviders.sort((a, b) => a.location.localeCompare(b.location));
    } else if (sortBy === "ratingDesc") {
        sortedProviders.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "ratingAsc") {
        sortedProviders.sort((a, b) => a.rating - b.rating);
    }

  const totalPages = Math.ceil(sortedProviders.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedProviders = sortedProviders.slice(
    startIdx,
    startIdx + itemsPerPage
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading providers...</p>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-7xl mx-auto pt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Learning Support Providers
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-6">
        <div className="flex-1">
          <SearchBar query={query} onChange={(e) => handleQueryChange(e.target.value)} />
        </div>

        <div className="sm:w-48 mt-4 sm:mt-0">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full p-3 border rounded shadow-sm"
          >
            <option value="">Sort By</option>
            <option value="name">Name (A-Z)</option>
            <option value="location">Location (A-Z)</option>
            <option value="ratingDesc">Rating (High to Low)</option>
            <option value="ratingAsc">Rating (Low to High)</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {paginatedProviders.length > 0 ? (
          paginatedProviders.map((provider) => (
            <div
              key={provider.id}
              className="p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2">{provider.name}</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {provider.specialization}
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                  {provider.location}
                </p>
                <div className="flex items-center mb-4">
                  {Array.from({ length: provider.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                  {Array.from({ length: 5 - provider.rating }).map((_, idx) => (
                    <Star
                      key={idx + provider.rating}
                      className="w-4 h-4 text-gray-300"
                    />
                  ))}
                </div>
              </div>
              <button
                onClick={() => navigate(`/providers/${provider.id}`)}
                className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No providers match your search.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`py-2 px-4 rounded ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Prev
          </button>
          <span className="text-gray-700 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`py-2 px-4 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
