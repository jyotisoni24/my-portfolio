import Image from "next/image";

const techs = [
  { name: "HTML", logo: "/html.png" },
  { name: "CSS", logo: "/css.png" },
  { name: "JavaScript", logo: "/js.png" },
  { name: "React", logo: "/react.png" },
  { name: "C++", logo: "/c++.png" },
  { name: "C", logo: "/c.png" },
];

export default function TechStack() {
  return (
    <section className="p-6 bg-grey text-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-4 text-white text-center">Tech Stack</h2>
      <div className="mt-20 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-3xl">
        {techs.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <Image
              src={tech.logo}
              alt={tech.name}
              width={60}
              height={60}
              className="object-contain hover:scale-110 transition-transform duration-300"
            />
            <p className="mt-2 text-sm">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
