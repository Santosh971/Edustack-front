import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#levels" },
  { label: "Method", href: "#method" },
  { label: "Why Us", href: "#why-choose" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-heading text-xl font-extrabold text-primary">
          Edu<span className="text-secondary">stack</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button variant="gold" size="lg">Register Now</Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t pb-4">
          <div className="container flex flex-col gap-3 pt-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-muted-foreground hover:text-primary">
                {l.label}
              </a>
            ))}
            <Button variant="gold" size="lg" className="mt-2">Register Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
