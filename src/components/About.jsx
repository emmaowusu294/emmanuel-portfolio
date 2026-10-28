// Facts come from the résumé (public/Emmanuel_Owusu_Resume.pdf) and the projects on this page.
// Skills are unchanged from the first redesign round until the proposed list is approved.
const toolkit = [
  {
    area: "Web",
    tools: ["HTML5", "CSS3", "JavaScript", "React", "Vite", "Tailwind CSS"],
    usedIn: "FinanceHub, this portfolio",
  },
  {
    area: "Mobile",
    tools: ["React Native", "Expo", "REST APIs"],
    usedIn: "Paymii",
  },
  {
    area: "Backend and data",
    tools: ["ASP.NET Core MVC", "C#", "SQL Server", "ASP.NET Core Identity"],
    usedIn: "LibriVerse",
  },
];

function Row({ title, index, children }) {
  return (
    <div
      data-reveal-item
      style={{ "--i": index }}
      className="grid gap-4 border-t border-line py-8 lg:grid-cols-12 lg:gap-12"
    >
      <h3 className="font-heading text-xl font-bold text-paper lg:col-span-4">
        {title}
      </h3>
      <div className="lg:col-span-8">{children}</div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-y border-line bg-surface"
    >
      <div className="page py-20 md:py-28">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
          <h2 id="about-title" className="section-title lg:col-span-4">
            About
          </h2>
          <p className="max-w-[34em] text-lg leading-relaxed text-muted md:text-xl lg:col-span-8">
            I&apos;m a software engineer and Computer Science student at KNUST
            in Kumasi, Ghana. I build web and mobile applications with React,
            React Native, and ASP.NET Core.
          </p>
        </div>

        <div className="mt-14 md:mt-20" data-reveal="fade">
          <Row title="Education" index={0}>
            <p className="font-medium text-paper">BSc Computer Science</p>
            <p className="mt-1 text-muted">
              Kwame Nkrumah University of Science and Technology (KNUST),
              Kumasi, Ghana
            </p>
            <p className="mt-1 text-sm text-muted">2024 – 2027 (expected)</p>
          </Row>

          <Row title="Technical skills" index={1}>
            <dl>
              {toolkit.map((group) => (
                <div
                  key={group.area}
                  className="grid gap-1 border-t border-line py-4 first:border-t-0 first:pt-0 sm:grid-cols-[10rem_1fr] sm:gap-8"
                >
                  <dt className="font-medium text-paper">{group.area}</dt>
                  <dd>
                    <p className="leading-relaxed text-paper">
                      {group.tools.join(", ")}
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      Used in {group.usedIn}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </Row>
        </div>
      </div>
    </section>
  );
}
