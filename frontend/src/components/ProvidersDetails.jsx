import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProviderById } from "../services/providerService";
import { ArrowLeft, Star } from "lucide-react";
import img from "../assets/img.png";

export default function ProviderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

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
        <button
          onClick={() => navigate("/providers")}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition transform hover:scale-105"
        >
          Back to Providers
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">

        <div className="bg-gray-200 dark:bg-gray-700 p-4 flex justify-center">
          <img 
            src={img}
            alt="Institution Logo"
            className="w-28 h-28 object-cover rounded"
          />
        </div>

        <div className="p-4 text-left space-y-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{provider.name}</h2>

          <div className="flex items-center gap-0.5">
            {Array.from({ length: provider.rating }).map((_, idx) => (
              <Star key={`filled-${idx}`} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            ))}
            {Array.from({ length: 5 - provider.rating }).map((_, idx) => (
              <Star key={`empty-${idx}`} className="w-4 h-4 text-gray-300" />
            ))}
          </div>

          <p className="text-gray-600 dark:text-gray-300">{provider.specialization}</p>
          <p className="text-gray-500 dark:text-gray-400">{provider.location}</p>

          <div className="grid grid-cols-2 gap-y-1 text-sm text-gray-700 dark:text-gray-300 mt-3">
            <span className="font-medium">ORG ID:</span>
            <span>{provider.id}</span>
            
            <span className="font-medium">EMAIL:</span>
            <span>
              <a href={`mailto:${provider.contactEmail}`} className="text-blue-600 hover:underline">
                {provider.contactEmail}
              </a>
            </span>

            <span className="font-medium">PHONE:</span>
            <span>{provider.phoneNumber}</span>

            {provider.website && (
              <>
                <span className="font-medium">WEBSITE:</span>
                <span>
                  <a href={provider.website} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                    {provider.website}
                  </a>
                </span>
              </>
            )}

            {provider.experienceYears !== undefined && (
              <>
                <span className="font-medium">EXPERIENCE:</span>
                <span>{provider.experienceYears} yrs</span>
              </>
            )}
          </div>

          <div className="mt-3">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {provider.longDescription}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate("/providers")}
        className="mt-6 flex items-center gap-2 bg-blue-600 text-white py-2 px-5 rounded-full shadow-lg hover:bg-blue-700 active:bg-blue-800 transition transform hover:scale-105"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to List</span>
      </button>
    </div>
  );
}
