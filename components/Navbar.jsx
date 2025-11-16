export default function Navbar() {
  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center fixed top-0 left-0 bg-[#0D3E45]/80 backdrop-blur-sm border-b border-[#CBB27A]/20 z-50">
      <div className="font-serif text-xl tracking-wide text-[#F3F0E7]">
        GDW
      </div>

      <div className="flex gap-6 text-[#E8E1D5]">
        <a href="/" className="hover:text-[#CBB27A] transition">Home</a>
        <a href="/biography" className="hover:text-[#CBB27A] transition">Biography</a>
        <a href="/portfolio" className="hover:text-[#CBB27A] transition">Portfolio</a>
        <a href="/contact" className="hover:text-[#CBB27A] transition">Contact</a>
      </div>
    </nav>
  );
}
