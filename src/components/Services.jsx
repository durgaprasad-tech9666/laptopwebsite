const services = [
  "Event Concept & Creative Direction",
  "Venue Selection & Management",
  "Stage & Event Production",
  "Catering & Hospitality",
  "Entertainment & Artists",
  "Guest Management",
];

const Services = () => {
  return (
    <section id="services" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            What We Do
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-6xl">
            Everything you need.
            <span className="text-white/30">
              {" "}One creative team.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid border-t border-white/10 md:grid-cols-2">

          {services.map((service, index) => (
            <div
              key={service}
              className="group flex items-center justify-between border-b border-white/10 py-7"
            >
              <div className="flex items-center gap-6">
                <span className="text-sm text-amber-400">
                  0{index + 1}
                </span>

                <h3 className="text-xl font-semibold transition group-hover:translate-x-2">
                  {service}
                </h3>
              </div>

              <span className="text-2xl text-white/30 transition group-hover:text-amber-400">
                ↗
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;