import { useState } from "react";
import toast from "react-hot-toast";
import { FaLinkedin, FaWhatsapp, FaLink, FaGithub } from "react-icons/fa";
import { EMAIL } from "../data/profile";

const socials = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin aria-hidden="true" className="text-muted" />,
    link: "https://www.linkedin.com/in/emmanuelowusu123/",
  },
  {
    name: "GitHub",
    icon: <FaGithub aria-hidden="true" className="text-muted" />,
    link: "https://github.com/emmaowusu294",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp aria-hidden="true" className="text-muted" />,
    link: "https://wa.link/np412w",
  },
  {
    name: "Linktree",
    icon: <FaLink aria-hidden="true" className="text-muted" />,
    link: "https://linktr.ee/eowusu2",
  },
];

export default function Contact() {
  const [sending, setSending] = useState(false);

  // Web3Forms Submission Logic
  const onSubmit = async (event) => {
    event.preventDefault();
    if (sending) return;
    setSending(true);

    const form = event.currentTarget;
    const toastId = toast.loading("Sending message...");

    const formData = new FormData(form);
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
        toast.success("Message sent successfully! I'll get back to you soon.", {
          id: toastId,
        });
        form.reset();
      } else {
        toast.error("Couldn't send message. Try again.", { id: toastId });
      }
    } catch {
      toast.error("Network error. Please try again.", { id: toastId });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="page py-20 md:py-28"
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <h2 id="contact-title" className="section-title">
            Let&apos;s connect
          </h2>
          <p className="mt-6 text-lg text-muted">
            Open for work or just a chat about code.
          </p>

          <p className="mt-10 text-sm text-muted">Email me directly</p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-2 inline-block break-all font-heading text-2xl font-bold text-paper underline decoration-signal decoration-2 underline-offset-[8px] transition-colors duration-150 hover:text-signal active:text-signal-pressed sm:text-3xl"
          >
            {EMAIL}
          </a>

          <h3 className="mt-12 text-sm font-medium text-muted">
            Elsewhere
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4 sm:flex sm:flex-wrap">
            {socials.map(({ name, icon, link }) => (
              <li key={name}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  {icon}
                  {name}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-6 lg:col-span-6 lg:col-start-7"
          aria-label="Contact form"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-medium text-paper"
              >
                Your name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                required
                className="field"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium text-paper"
              >
                Your email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                className="field"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-medium text-paper"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows="6"
              className="field resize-y"
              placeholder="Hey Emmanuel, ..."
            ></textarea>
          </div>

          {/* Honeypot Spam Protection (Hidden) */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            tabIndex={-1}
            aria-hidden="true"
          />

          <button
            type="submit"
            disabled={sending}
            className="btn-signal w-full sm:w-auto"
          >
            {sending ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
