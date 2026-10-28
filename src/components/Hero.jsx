import { FiDownload, FiMail } from "react-icons/fi";
import { EMAIL } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="page pb-20 pt-[calc(var(--nav-height)+3.5rem)] md:pt-[calc(var(--nav-height)+5rem)] lg:pb-28"
    >
      <p className="reveal text-muted">
        <span className="font-medium text-paper">Emmanuel Owusu</span>,
        software engineer
      </p>

      <h1
        id="hero-title"
        className="reveal mt-6 max-w-[11.5em] text-balance font-heading font-extrabold leading-[0.98] tracking-[-0.03em] text-paper"
        style={{
          "--delay": "60ms",
          fontSize: "clamp(2.25rem, 1rem + 6.4vw, 6.25rem)",
        }}
      >
        I build clean, scalable mobile and web applications.
      </h1>

      <div className="mt-12 grid gap-10 border-t border-line pt-10 md:mt-16 md:grid-cols-12 md:gap-8 lg:pt-12">
        <div
          className="reveal md:col-span-7 md:col-start-6 md:row-start-1 lg:col-span-5 lg:col-start-6"
          style={{ "--delay": "160ms" }}
        >
          <p className="max-w-[34em] text-lg leading-relaxed text-muted md:text-xl">
            I create clean, fast, and scalable digital products that solve
            real-world problems. My focus is on writing efficient code and
            building solutions that actually work.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a href="#projects" className="btn-signal">
              See my work
            </a>
            <a
              href="/Emmanuel_Owusu_Resume.pdf"
              download="Emmanuel_Owusu_Resume.pdf"
              className="text-link"
            >
              <FiDownload aria-hidden="true" />
              Download résumé (PDF)
            </a>
          </div>

          <p className="mt-6 text-muted">
            <FiMail aria-hidden="true" className="mr-2 inline align-[-0.125em]" />
            <a href={`mailto:${EMAIL}`} className="text-link break-all">
              {EMAIL}
            </a>
          </p>
        </div>

        <figure
          className="reveal max-w-[18rem] md:col-span-5 md:row-start-1 md:max-w-none lg:col-span-4"
          style={{ "--delay": "240ms" }}
        >
          <img
            src="/emma1.JPG"
            alt="Portrait of Emmanuel Owusu"
            width="852"
            height="806"
            fetchPriority="high"
            decoding="async"
            className="aspect-[4/5] w-full rounded-[3px] bg-surface object-cover object-[50%_30%]"
          />
        </figure>
      </div>
    </section>
  );
}
