import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaLink,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // The new X logo

export default function Contact() {
  // Web3Forms Submission Logic
  const onSubmit = async (event) => {
    event.preventDefault();

    // Optional: Show a loading toast while waiting for the API
    const toastId = toast.loading("Sending message...");

    const formData = new FormData(event.target);
    formData.append("access_key", "f4ccc161-74a1-4045-b59b-9d06219fedd1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        // 2. Replace alert with toast.success, and dismiss the loading toast
        toast.success("Message sent successfully! I'll get back to you soon.", {
          id: toastId,
        });
        event.target.reset();
      } else {
        toast.error("Couldn't send message. Try again.", { id: toastId });
      }
    } catch (error) {
      toast.error("Network error. Please try again.", { id: toastId });
    }
  };

  const socials = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/emmanuelowusu123/",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/emmaowusu294",
      color: "hover:text-blue-500",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      link: "https://wa.link/np412w",
      color: "hover:text-green-500",
    },
    {
      name: "Linktree",
      icon: <FaLink />,
      link: "https://linktr.ee/eowusu2",
      color: "hover:text-green-400",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:emowusu@gmail.com",
      color: "hover:text-red-400",
    },
  ];

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-heading font-bold text-white">
          Let's Connect
        </h2>
        <p className="text-gray-400 mt-4">
          Open for opportunities or just a chat about code.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-16">
        {/* Left Side: The Form */}
        <div className="w-full md:w-1/2">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-gray-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-gray-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full bg-gray-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="Hey Emmanuel, I loved your portfolio..."
              ></textarea>
            </div>

            {/* Honeypot Spam Protection (Hidden) */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </div>

        {/* Right Side: Social Links Grid */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.05 }}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 bg-gray-900 border border-white/5 rounded-xl text-gray-300 transition-colors ${social.color}`}
              >
                <span className="text-2xl">{social.icon}</span>
                <span className="font-bold">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
