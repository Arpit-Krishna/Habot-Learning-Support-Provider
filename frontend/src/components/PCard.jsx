import { Star } from "lucide-react";

export default function ProviderCard({ provider, onViewDetails }) {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-gray-800 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-2">{provider.name}</h2>
        <p className="text-gray-300">{provider.specialization}</p>
        <p className="text-gray-400 mb-2">{provider.location}</p>
        <div className="flex items-center mb-4">
          {Array.from({ length: provider.rating }).map((_, idx) => (
            <Star key={idx} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          ))}
          {Array.from({ length: 5 - provider.rating }).map((_, idx) => (
            <Star key={idx + provider.rating} className="w-4 h-4 text-gray-300" />
          ))}
        </div>
      </div>
      <button
        onClick={() => onViewDetails(provider.id)}
        className="mt-auto flex items-center justify-center gap-2 
                   bg-blue-600 text-white 
                   hover:bg-blue-700 
                   py-2 px-4 rounded-lg 
                   transition duration-300"
      >
        View Details
      </button>
    </div>
  );
}
