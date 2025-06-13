import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProviderById } from "../services/providerService";
import { Star } from "lucide-react";

export default function ProviderDetail() {
  const { id } = useParams();

  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProviderById(id)
      .then(data => {
        setProvider(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Provider not found.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading provider details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-red-500 mb-4">{error}</p>
        <Link
          to="/providers"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Back to Providers
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 pt-20">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        <Link to="/" className="hover:underline text-blue-600 dark:text-blue-400">
          Home
        </Link>
        <span className="mx-1">/</span>
        <Link to="/providers" className="hover:underline text-blue-600 dark:text-blue-400">
          Providers
        </Link>
        <span className="mx-1">/</span>
        <span className="font-medium text-gray-900 dark:text-gray-100">
          {provider.name}
        </span>
      </div>

      {/* Provider detail card */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-2">{provider.name}</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">{provider.specialization}</p>
        <p className="text-gray-500 dark:text-gray-400 mb-3">{provider.location}</p>

        <div className="flex items-center mb-4">
          {Array.from({ length: provider.rating }).map((_, idx) => (
            <Star key={idx} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          ))}
          {Array.from({ length: 5 - provider.rating }).map((_, idx) => (
            <Star key={idx + provider.rating} className="w-5 h-5 text-gray-300" />
          ))}
        </div>

        <p className="mb-3">{provider.longDescription}</p>
        <p className="text-gray-700 dark:text-gray-300">
          📧 <a href={`mailto:${provider.contactEmail}`} className="text-blue-600 hover:underline">{provider.contactEmail}</a>
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          📞 {provider.phoneNumber}
        </p>
      </div>
    </div>
  );
}
