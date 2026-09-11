const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <a href="#" className="text-2xl font-black tracking-tight">
          LUMINA<span className="text-amber-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm text-white/70 hover:text-white">
          Home
          </a>

          <a href="#events" className="text-sm text-white/70 hover:text-white">
            Events
          </a>

          <a href="#services" className="text-sm text-white/70 hover:text-white">
            Services
          </a>

          <a href="#about" className="text-sm text-white/70 hover:text-white">
            About
          </a>

          <a href="#contact" className="text-sm text-white/70 hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-amber-400"
        >
          Plan an Event
        </a>
      </div>
    </nav>
  );
};

export default Navbar;