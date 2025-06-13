import { Link } from "react-router-dom";

export default function Home() {

   return (
  <section className="w-full h-screen overflow-hidden bg-gradient-to-br from-blue-900 to-black flex items-center justify-center">
    <div className="text-center w-full px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
        Empowering Every Child to Learn
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 mb-8">
        Discover trusted learning support providers for dyslexia, ADHD, autism, and more. Start your journey here.
      </p>
      <Link
        to="/providers"
        className="inline-block bg-white text-gray-200 font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-200"
      >
        Browse Providers
    </Link>
  </div>
</section>
  );
}
