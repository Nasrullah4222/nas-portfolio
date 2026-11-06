const volunteering = [
  {
    number: "01",
    organization: "National STEM Olympiad",
    role: "Volunteer",
    date: "2023",
    image: "/assets/socials/STEAMOlympiad.png",
    description:
      "Supported STEM-focused activities and contributed to engaging students in science, technology, engineering, and mathematics initiatives.",
  },
  {
    number: "02",
    organization: "Green Life Society",
    role: "Volunteer",
    date: "2020 - 2022",
    image: "/assets/socials/GreenLifeSociety.png",
    description:
      "Promoted affordable and accessible plants while supporting community members facing financial difficulties.",
  },
  {
    number: "03",
    organization: "Let's Plant Trees BD",
    role: "Volunteer",
    date: "2019 - 2020",
    image: "/assets/socials/Let'sPlantATree.png",
    description:
      "Participated in tree plantation initiatives to promote environmental sustainability and contribute to greener local communities.",
  },
];

const Volunteering = () => {
  return (
    <section id="volunteering" className="c-space compact-section-spacing">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
        <div className="flex items-start pt-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">
              <span className="mr-3 inline-block h-px w-9 align-middle bg-orange" />
              Volunteer work
            </p>
            <h2 className="mt-5 text-5xl font-bold leading-none tracking-[-0.05em] text-white md:text-6xl">
              Volunteering
            </h2>
          </div>
        </div>
        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-white/15" />
          <div>
            {volunteering.map((item) => (
              <article
                key={item.number}
                className="group relative grid gap-5 border-b border-white/10 py-8 pl-12 first:pt-0 sm:grid-cols-[4rem_minmax(0,1fr)_2rem] sm:items-start sm:pl-10"
              >
                <span className="absolute left-[13px] top-10 z-10 size-2.5 rounded-full bg-neutral-600 transition-colors group-hover:bg-orange sm:left-[2px]" />
                <img
                  src={item.image}
                  alt={`${item.organization} logo`}
                  className="size-16 rounded-xl border border-white/10 bg-white object-contain p-2 transition-shadow duration-300 group-hover:shadow-[0_0_24px_rgb(249_115_22/45%)]"
                />
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                    <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-orange">
                      {item.role}, {item.organization}
                    </h3>
                    <p className="text-sm text-neutral-500">{item.date}</p>
                  </div>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-400">
                    {item.description}
                  </p>
                </div>
                <span className="hidden text-sm text-neutral-500 sm:block">
                  {item.number}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
