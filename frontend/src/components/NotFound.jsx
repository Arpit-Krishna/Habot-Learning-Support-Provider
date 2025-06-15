import { useNavigate } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";
import img from "../assets/pnf.png";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4 relative">
       <img 
        src={img}
        alt="Page not found"
        className="w-48 h-auto mb-4 rounded shadow-lg"
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* <h1 className="text-6xl font-bold text-blue-600">404</h1> */}
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">Page Not Found</p>
        
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          <ArrowLeftCircle className="w-5 h-5" />
          <span>Go Home</span>
        </button>
      </div>
    </div>
  );
}
