import React from "react";

export default function Resources() {
  const resourceData = [
    {
      category: "Dyslexia",
      links: [
        { name: "British Dyslexia Association", url: "https://www.bdadyslexia.org.uk/" },
        { name: "International Dyslexia Association", url: "https://dyslexiaida.org/" },
      ]
    },
    {
      category: "ADHD",
      links: [
        { name: "CHADD (Children and Adults with ADHD)", url: "https://chadd.org/" },
        { name: "ADDitude Magazine", url: "https://www.additudemag.com/" }
      ]
    },
    {
      category: "Autism Spectrum Disorder",
      links: [
        { name: "Autism Speaks", url: "https://www.autismspeaks.org/" },
        { name: "National Autistic Society", url: "https://www.autism.org.uk/" }
      ]
    },
    {
      category: "General Learning Difficulties",
      links: [
        { name: "Understood.org", url: "https://www.understood.org/" },
        { name: "National Center for Learning Disabilities", url: "https://www.ncld.org/" }
      ]
    },
    {
      category: "Parent Support Communities",
      links: [
        { name: "Parenting Special Needs Magazine", url: "https://parentingspecialneeds.org/" },
        { name: "MyAutismTeam", url: "https://www.myautismteam.com/" }
      ]
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto pt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Learning Resources & Support</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {resourceData.map((section) => (
          <div
            key={section.category}
            className="p-6 bg-gray-800 rounded-lg shadow flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-3">{section.category}</h2>
              <ul className="space-y-5">
                {section.links.map((link) => (
                  <li key={link.url}>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <p className="text-center text-gray-300 mb-1">
        Helping parents find the right learning support for their children.
        </p>

        <div className="flex justify-center mt-1">
        <a
            href="/providers"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
            Explore Providers
        </a>
        </div>
      </div>
    </div>
  );
}
