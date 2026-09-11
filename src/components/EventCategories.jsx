const categories = [
  {
    number: "01",
    title: "Corporate",
    text: "Conferences, launches and professional experiences.",
  },
  {
    number: "02",
    title: "Weddings",
    text: "Elegant celebrations designed around your story.",
  },
  {
    number: "03",
    title: "Private",
    text: "Birthdays, parties and unforgettable gatherings.",
  },
  {
    number: "04",
    title: "Luxury",
    text: "High-end experiences crafted down to every detail.",
  },
];

const EventCategories = () => {
  return (
    <section className="border-y border-white/10 bg-[#0d0d0d]">
      <div className="mx-auto grid max-w-7xl md:grid-cols-4">

        {categories.map((category) => (
          <div
            key={category.number}
            className="group border-white/10 p-8 transition hover:bg-white/[0.03] md:border-r"
          >
            <span className="text-sm text-amber-400">
              {category.number}
            </span>

            <h3 className="mt-10 text-2xl font-bold">
              {category.title}
            </h3>

            <p className="mt-4 leading-7 text-white/50">
              {category.text}
            </p>

            <div className="mt-8 h-px w-10 bg-amber-400 transition-all group-hover:w-full" />
          </div>
        ))}

      </div>
    </section>
  );
};

export default EventCategories;