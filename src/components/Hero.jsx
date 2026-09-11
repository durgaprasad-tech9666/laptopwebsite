const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/event2.jpg"
          alt="Event"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-24">
        <div className="max-w-4xl">

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
            Premium Event Experiences
          </p>

          <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
            We create
            <span className="block text-amber-400">
              unforgettable
            </span>
            moments.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
            From intimate celebrations to extraordinary corporate
            experiences, we design and execute events that people
            remember long after the lights go down.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-amber-400 px-7 py-4 font-bold text-black transition hover:bg-amber-300"
            >
              Start Your Event
            </a>

            <a
              href="#events"
              className="rounded-full border border-white/20 bg-white/5 px-7 py-4 font-bold backdrop-blur transition hover:bg-white/10"
            >
              Explore Events
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;