const events = [
  {
    title: "Midnight Gala",
    category: "Luxury Event",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Future Summit",
    category: "Corporate",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Golden Wedding",
    category: "Wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
  },
];

const Events = () => {
  return (
    <section id="events" className="bg-[#0d0d0d] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
              Our Work
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-6xl">
              Events that
              <span className="text-white/40"> stand out.</span>
            </h2>
          </div>

          <p className="max-w-md text-white/50">
            A glimpse into some of the experiences we've
            created for our clients.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="group relative overflow-hidden rounded-3xl"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 p-7">
                <p className="text-sm font-semibold text-amber-400">
                  {event.category}
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;