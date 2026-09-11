const CTA = () => {
  return (
    <section id="contact" className="px-6 pb-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white px-8 py-20 text-black sm:px-16 lg:py-28">

        <div className="relative z-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-black/50">
            Let's create something extraordinary
          </p>

          <h2 className="mt-6 text-5xl font-black tracking-tight sm:text-7xl">
            Your next event
            <span className="text-black/30">
              {" "}starts here.
            </span>
          </h2>

          <a
            href="mailto:hello@luminaevents.com"
            className="mt-10 inline-block rounded-full bg-black px-8 py-4 font-bold text-white transition hover:bg-amber-400 hover:text-black"
          >
            Talk to Our Team →
          </a>
        </div>

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-400 blur-3xl" />

      </div>
    </section>
  );
};

export default CTA;