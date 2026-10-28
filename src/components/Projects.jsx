import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    // Details verified in the USI.Atelier repository (frontend/package.json,
    // CLAUDE.md, frontend/src/lib/site.ts). The repository is private, so no source link.
    id: 4,
    title: "USI Atelier",
    kind: "Full-stack e-commerce platform",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ASP.NET Core",
      "EF Core",
      "PostgreSQL",
      "Paystack",
      "Cloudinary",
    ],
    desc: "An online store and admin dashboard for USI Atelier, a Ghanaian ready-to-wear fashion brand. Shoppers browse the catalogue and check out without an account, paying through Paystack; an order is only marked paid after the backend verifies the payment. Administrators manage products, images, sizes and stock, featured pieces, and orders.",
    img: "/usi-atelier.png",
    imgWidth: 1361,
    imgHeight: 687,
    imgFit: "contain",
    alt: "USI Atelier storefront homepage with the brand logo over a model in a patterned shirt, beside the line “Elegance, for you.”",
    liveLink: "https://usi-atelier.shop",
    githubLink: null,
  },
  {
    id: 1,
    title: "FinanceHub Landing Page",
    kind: "Responsive landing page",
    stack: ["HTML5", "CSS3", "Vanilla JS"],
    desc: "A high-conversion, responsive landing page for a fintech mobile application. Engineered without frameworks to demonstrate strong foundational UI/UX skills and semantic web design.",
    img: "/financehub-1600.webp",
    imgWidth: 1600,
    imgHeight: 1067,
    imgFit: "cover",
    alt: "FinanceHub landing page shown on a laptop and a phone",
    liveLink: "https://finance-hub-project.vercel.app/",
    githubLink: "https://github.com/emmaowusu294/FinanceHub-Project",
  },
  {
    id: 2,
    title: "Paymii Crypto App",
    kind: "Mobile app frontend, team project",
    stack: ["React Native", "Expo", "REST APIs"],
    desc: "Engineered the mobile frontend for a cryptocurrency platform. Built a secure, user-friendly interface with real-time market data visualizations and seamless transfer flows, consuming a Spring Boot backend.",
    img: "/Paymii.jpg",
    imgWidth: 1920,
    imgHeight: 1080,
    imgFit: "cover",
    alt: "Three Paymii app screens: receiving bitcoin, the welcome screen, and a bitcoin price chart",
    liveLink: "#",
    githubLink: "https://github.com/paymii90/Paymii/tree/main/frontend",
  },
  {
    id: 3,
    title: "LibriVerse Digital Library",
    kind: "Full-stack web application",
    stack: ["ASP.NET Core MVC", "C#", "SQL Server"],
    desc: "Developed a full-stack digital library management system featuring role-based authorization (Identity), a secure admin dashboard for CRUD operations, and a patron portal for digital checkouts.",
    img: "/libriverse.png",
    imgWidth: 1441,
    imgHeight: 828,
    imgFit: "contain",
    alt: "LibriVerse book detail page for Oliver Twist shown on a laptop",
    liveLink: "#",
    githubLink: "https://github.com/emmaowusu294/LibriVerse---BookLibraryApp",
  },
];

const hasLink = (link) => link && link !== "#";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="page py-20 md:py-28"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 id="projects-title" className="section-title">
          Selected work
        </h2>
        <p className="max-w-[28em] text-muted">
          Web, mobile, and full-stack work.
        </p>
      </div>

      <div className="mt-14 md:mt-20">
        {projects.map((project) => (
          <article
            key={project.id}
            aria-labelledby={`project-${project.id}`}
            data-reveal="row"
            className="reveal-row grid gap-8 border-t border-line py-12 md:grid-cols-12 md:gap-x-8 md:py-16 lg:gap-x-12"
          >
            <div
              data-reveal-item
              style={{ "--i": 0 }}
              className="md:col-span-12 lg:col-span-7"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[3px] border border-line bg-surface">
                <img
                  src={project.img}
                  alt={project.alt}
                  width={project.imgWidth}
                  height={project.imgHeight}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full ${
                    project.imgFit === "contain"
                      ? "object-contain p-4 sm:p-8"
                      : "object-cover"
                  }`}
                />
              </div>
            </div>

            {/* Tablet: description and details side by side under the image.
                Desktop: one column beside the image, details pinned to the bottom. */}
            <div className="grid gap-8 md:col-span-12 md:grid-cols-12 lg:col-span-5 lg:flex lg:flex-col lg:justify-between lg:gap-10">
              <div
                data-reveal-item
                style={{ "--i": 1 }}
                className="md:col-span-7"
              >
                <p className="text-muted">{project.kind}</p>
                <h3
                  id={`project-${project.id}`}
                  className="mt-2 font-heading text-3xl font-bold leading-tight tracking-[-0.01em] text-paper md:text-4xl"
                >
                  {project.title}
                </h3>
                <p className="mt-5 max-w-[36em] leading-relaxed text-muted">
                  {project.desc}
                </p>
              </div>

              <div
                data-reveal-item
                style={{ "--i": 2 }}
                className="md:col-span-5"
              >
                <h4 className="text-sm font-medium text-paper">Built with</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-[3px] border border-line px-3 py-1 text-sm text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                  {hasLink(project.liveLink) && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-signal"
                    >
                      <FiExternalLink aria-hidden="true" />
                      Visit live site
                      <span className="sr-only">
                        for {project.title} (opens in a new tab)
                      </span>
                    </a>
                  )}
                  {hasLink(project.githubLink) && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                    >
                      <FiGithub aria-hidden="true" />
                      View source on GitHub
                      <span className="sr-only">
                        for {project.title} (opens in a new tab)
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
