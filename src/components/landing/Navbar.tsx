import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#levels" },
  { label: "Method", href: "#method" },
  { label: "Why Us", href: "#why-choose" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-card border-b" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-18 py-4">
        <a href="#" className="font-heading text-2xl font-extrabold text-primary">
          Edu<span className="text-gradient-gold">stack</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="default" className="text-primary font-semibold">Login</Button>
          <Button variant="gold" size="lg">
            Register Now <ChevronRight size={16} />
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-lg border-t animate-fade-in">
          <div className="container flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 px-4 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-muted transition-all">
                {l.label}
              </a>
            ))}
            <div className="border-t my-2" />
            <Button variant="gold" size="lg" className="mt-2">Register Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
