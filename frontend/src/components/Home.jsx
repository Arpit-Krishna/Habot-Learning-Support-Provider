import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="w-full h-screen overflow-hidden bg-gradient-to-br from-[#08294D] via-[#465B75] to-[#91B7DC] flex items-center justify-center">
      <div className="text-center w-full px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white drop-shadow-lg">
          Empowering Every Child to Learn
        </h1>
        <p className="text-lg sm:text-xl text-white/80 mb-8">
          Discover trusted learning support providers for dyslexia, ADHD, autism, and more. Start your journey here.
        </p>
        <Link
          to="/providers"
          className="relative inline-block overflow-hidden rounded-2xl bg-gradient-to-r from-[#4291e0] via-[#2a5589] to-[#133150] px-6 py-3 font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <span
            className="absolute inset-0 z-0 h-full w-full origin-left scale-x-0 bg-white/20 transition-transform duration-300 ease-out hover:scale-x-100"
          ></span>
          <span className="relative z-10 text-white">Browse Providers</span>
        </Link>
      </div>
    </section>
  );
}
