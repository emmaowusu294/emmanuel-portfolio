import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // <-- Don't forget these imports!

const projects = [
  {
    id: 1,
    title: "FinanceHub Landing Page",
    stack: "HTML5 • CSS3 • Vanilla JS",
    desc: "A high-conversion, responsive landing page for a fintech mobile application. Engineered without frameworks to demonstrate strong foundational UI/UX skills and semantic web design.",
    img: "/FinanceHubb.jpg",
    liveLink: "https://finance-hub-project.vercel.app/",
    githubLink: "https://github.com/emmaowusu294/FinanceHub-Project",
  },
  {
    id: 2,
    title: "Paymii Crypto App",
    stack: "React Native • Expo • REST APIs",
    desc: "Engineered the mobile frontend for a cryptocurrency platform. Built a secure, user-friendly interface with real-time market data visualizations and seamless transfer flows, consuming a Spring Boot backend.",
    img: "/Paymii.jpg",
    liveLink: "#",
    githubLink: "https://github.com/paymii90/Paymii/tree/main/frontend",
  },
  {
    id: 3,
    title: "LibriVerse Digital Library",
    stack: "ASP.NET Core MVC • C# • SQL Server",
    desc: "Developed a full-stack digital library management system featuring role-based authorization (Identity), a secure admin dashboard for CRUD operations, and a patron portal for digital checkouts.",
    img: "/libriverse.png",
    liveLink: "#",
    githubLink: "https://github.com/emmaowusu294/LibriVerse---BookLibraryApp",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 md:px-12 py-20">
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
            className={`flex flex-col gap-8 items-center md:gap-16 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Project Image - Kept your awesome scale hover effect! */}
            <div className="w-full md:w-1/2 h-64 md:h-96 bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-white/5 group">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
              />
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

              {/* Dynamic Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-white/10">
                {/* Only shows if liveLink exists AND isn't just a hashtag */}
                {project.liveLink && project.liveLink !== "#" && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                  >
                    <FaExternalLinkAlt size={14} /> Live Demo
                  </motion.a>
                )}

                {/* Always shows if a GitHub link exists */}
                {project.githubLink && project.githubLink !== "#" && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition-colors border border-white/10"
                  >
                    <FaGithub size={16} /> GitHub
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
