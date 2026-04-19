import { motion } from "framer-motion";

// Placeholder data - we will swap this with your actual work
const projects = [
  {
    id: 1,
    title: "E-Commerce API",
    stack: "ASP.NET Core • C#",
    desc: "A robust backend API handling thousands of requests.",
    img: "/placeholder1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Task Manager App",
    stack: "React • Node/Express",
    desc: "A full-stack productivity tool with real-time updates.",
    img: "/placeholder2.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-heading font-bold text-white mb-16 text-center">
        Selected Work
      </h2>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            // THIS IS THE MAGIC: Alternates layout based on even/odd index
            className={`flex flex-col gap-8 items-center md:gap-16 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Project Image */}
            <div className="w-full md:w-1/2 h-64 md:h-96 bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-white/5">
              {/* Uncomment when you have screenshots */}
              {/* <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" /> */}
            </div>

            {/* Project Info */}
            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-blue-400 font-bold tracking-widest text-sm uppercase">
                {project.stack}
              </p>
              <h3 className="text-3xl font-heading font-bold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.desc}
              </p>

              <motion.a
                whileHover={{ x: 5 }}
                href={project.link}
                className="inline-block mt-4 text-white font-bold border-b-2 border-blue-500 pb-1"
              >
                View on GitHub →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
