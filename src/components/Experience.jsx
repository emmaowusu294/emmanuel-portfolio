// Newest first. UITS entries follow the résumé (public/Emmanuel_Owusu_Resume.pdf);
// the Microsoft and Zhuwa Africa entries were supplied directly by Emmanuel. Keep it factual.
const entries = [
  {
    id: "microsoft-student-ambassador",
    type: "Student ambassador",
    role: "Microsoft Student Ambassador",
    org: "Microsoft",
    dates: "October 2026 – Present",
    points: [],
  },
  {
    id: "zhuwa-africa-internship",
    type: "Internship",
    role: "Software Engineering Intern",
    org: "Zhuwa Africa",
    dates: "July 2026 – Present",
    points: [],
  },
  {
    id: "uits-internship",
    type: "Internship",
    role: "Software Development Intern",
    org: "KNUST University Information Technology Services (UITS), Kumasi",
    dates: "October 2025 – December 2025",
    points: [
      "Developed and maintained web applications using ASP.NET Core MVC, focusing on user authentication and database management.",
      "Collaborated with the IT services team to implement responsive frontend designs and improve system performance.",
      "Utilized C# and SQL to build robust backend logic for university-internal tools.",
    ],
  },
  {
    id: "uits-bootcamp",
    type: "Training",
    role: "Software Development Bootcamp 2025",
    org: "KNUST University Information Technology Services (UITS)",
    dates: "15 September – 24 October 2025",
    points: [],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="page py-20 md:py-28"
    >
      <h2 id="experience-title" className="section-title">
        Experience
      </h2>

      <ol className="mt-14 md:mt-20" data-reveal="fade">
        {entries.map((entry, index) => (
          <li
            key={entry.id}
            data-reveal-item
            style={{ "--i": index }}
            className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-4 lg:col-span-3">
              <p className="text-muted">{entry.dates}</p>
              <p className="mt-1 text-sm text-muted">{entry.type}</p>
            </div>

            <div className="md:col-span-8 lg:col-span-7">
              <h3 className="font-heading text-2xl font-bold leading-tight text-paper md:text-3xl">
                {entry.role}
              </h3>
              <p className="mt-2 text-paper">{entry.org}</p>

              {entry.points.length > 0 && (
                <ul className="mt-6 max-w-[40em] space-y-3 text-muted">
                  {entry.points.map((point) => (
                    <li key={point} className="flex gap-4 leading-relaxed">
                      <span
                        aria-hidden="true"
                        className="mt-[0.7em] h-px w-3 shrink-0 bg-signal"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
