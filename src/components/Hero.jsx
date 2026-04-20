import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between min-h-[80vh]"
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight">
          Hi, I'm Emmanuel. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
            CS3 Web Developer.
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-lg">
          Building scalable backends and smooth, responsive frontends.
          Specializing in ASP.NET MVC, React, and Node.
        </p>

        {/* Crisp White Action Button with Hover Scale/Glow */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 15px rgba(255,255,255,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-8 py-3 bg-accent text-background font-bold rounded-full transition-colors"
        >
          Download Resume
        </motion.button>
      </motion.div>

      {/* Hero Image / Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-800 border-4 border-white/10 overflow-hidden">
          {/* Uncomment this when you add your image to the public folder */}
          <img
            src="/emma1.JPG"
            alt="Emmanuel"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
