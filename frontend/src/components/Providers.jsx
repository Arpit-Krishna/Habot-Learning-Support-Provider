import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchProviders } from "../services/providerService";
import SearchSortBar from "../components/SearchBar";
import ProviderCard from "./PCard";
import PaginationControls from "./Pagination";

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

  // Fetch providers
  useEffect(() => {
    fetchProviders().then(data => {
      setProviders(data);
      setLoading(false);
    });
  }, []);

  // Read query param from URL
  useEffect(() => {
    const initialQuery = searchParams.get("q") || "";
    setQuery(initialQuery);
  }, [searchParams]);

  // Filter based on query
  useEffect(() => {
    const q = query.toLowerCase();
    const result = providers.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.specialization.toLowerCase().includes(q)
    );
    setFiltered(result);
    setCurrentPage(1);
  }, [query, providers]);

  // Update query + URL param on input
  const handleQueryChange = (val) => {
    setQuery(val);
    setSearchParams({ q: val });
  };

  // Sort filtered providers
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

  // Pagination
  const totalPages = Math.ceil(sortedProviders.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedProviders = sortedProviders.slice(startIdx, startIdx + itemsPerPage);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading providers...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 max-w-7xl mx-auto pt-20">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Learning Support Providers</h1>

      <SearchSortBar
        query={query}
        onQueryChange={handleQueryChange}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {paginatedProviders.length > 0 ? (
          paginatedProviders.map(provider => (
            <ProviderCard
              key={provider.id}
              provider={provider}
              onViewDetails={(id) => navigate(`/providers/${id}`)}
            />
          ))
        ) : (
          <div className="col-span-full text-center mt-8">
            <p className="text-lg  text-gray-400 mb-2">
              No providers found. Please try a different search or filter.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setSearchParams({});
                setCurrentPage(1);
              }}
              className="inline-flex items-center gap-2 bg-blue-600 text-white py-1.5 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}
