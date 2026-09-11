const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#090909]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-10 md:flex-row md:items-center">

        <div>
          <p className="text-xl font-black">
            LUMINA<span className="text-amber-400">.</span>
          </p>

          <p className="mt-2 text-sm text-white/40">
            Creating extraordinary experiences.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-white/50">
          <a href="#" className="hover:text-white">
            Instagram
          </a>

          <a href="#" className="hover:text-white">
            LinkedIn
          </a>

          <a href="#" className="hover:text-white">
            Facebook
          </a>
        </div>

        <p className="text-sm text-white/30">
          © 2026 Lumina Events
        </p>

      </div>
    </footer>
  );
};

export default Footer;