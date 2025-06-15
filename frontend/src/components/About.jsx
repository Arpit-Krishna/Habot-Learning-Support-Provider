import img from "../assets/habot.jpeg"
export default function About() {
  return (
    <div className="bg-[#E6F0FA] min-h-screen text-[#1B2A41]">
      {/* Header */}
      <div className="bg-[#C3DDF2] py-16 text-center">
        <p className="mt-10 text-4xl font-extrabold">About HABOT</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
        
        <div className="flex justify-center">
          <img
            src= {img}
            alt="HABOT Tutoring Promo"
            className="rounded-lg shadow-md w-full max-w-md object-cover"
          />
        </div>
        <div className="space-y-6 pt-22 text-base leading-relaxed">
          <p>
            HABOT Connect DMCC simplifies the process for parents to find the right support for children with learning difficulties.
            Our platform offers a focused directory of learning support providers, making it easy for families to browse, search, and connect.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p>
              We aim to empower parents by providing access to trusted and verified learning support providers.
              Every child deserves the right guidance to unlock their full potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
