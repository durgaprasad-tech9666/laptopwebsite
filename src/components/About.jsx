const About = () => {
  return (
    <section id="about" className="py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            About Lumina
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
            Details make the
            <span className="text-white/40"> difference.</span>
          </h2>

          <p className="mt-8 leading-8 text-white/60">
            We are a creative event management studio focused on
            transforming ideas into remarkable experiences.
          </p>

          <p className="mt-5 leading-8 text-white/60">
            Our team combines creative direction, flawless planning
            and world-class production to make every event feel
            effortless.
          </p>

          <div className="mt-10 flex gap-12">
            <div>
              <p className="text-4xl font-black text-amber-400">12+</p>
              <p className="mt-2 text-sm text-white/50">
                Years Experience
              </p>
            </div>

            <div>
              <p className="text-4xl font-black text-amber-400">480+</p>
              <p className="mt-2 text-sm text-white/50">
                Events Created
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85"
            alt="Event planning"
            className="h-[550px] w-full rounded-3xl object-cover"
          />

          <div className="absolute -bottom-8 -left-8 rounded-2xl border border-white/10 bg-[#111]/90 p-6 backdrop-blur-xl">
            <p className="text-3xl font-black">98%</p>
            <p className="mt-1 text-sm text-white/50">
              Client Satisfaction
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;