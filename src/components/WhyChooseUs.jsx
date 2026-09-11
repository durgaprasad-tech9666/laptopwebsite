const WhyChooseUs = () => {
  const features = [
    {
      title: "Creative",
      text: "Original concepts built specifically around your vision.",
    },
    {
      title: "Precise",
      text: "Every detail is planned, managed and executed flawlessly.",
    },
    {
      title: "Personal",
      text: "A dedicated team that works closely with you.",
    },
  ];

  return (
    <section className="bg-amber-400 py-24 text-black">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-3">

          {features.map((feature, index) => (
            <div key={feature.title}>
              <span className="text-sm font-bold">
                0{index + 1}
              </span>

              <h3 className="mt-6 text-4xl font-black">
                {feature.title}
              </h3>

              <p className="mt-5 max-w-sm leading-7 text-black/60">
                {feature.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;