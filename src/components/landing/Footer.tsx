import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="gradient-navy pt-14 pb-8 relative overflow-hidden">
    {/* Pattern */}
    <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
      backgroundSize: "30px 30px"
    }} />

    <div className="container relative z-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-primary-foreground/10">
        {/* Brand */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="font-heading font-extrabold text-2xl text-primary-foreground">
            Edu<span className="text-secondary">stack</span>
          </h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Empowering students to master French and unlock opportunities in Canada through expert-led online education.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors group">
                <Icon size={16} className="text-primary-foreground/60 group-hover:text-primary-foreground" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <nav className="space-y-3">
            {["About", "Courses", "Method", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                {l}
              </a>
            ))}
          </nav>
        </div>

        {/* Course Levels */}
        <div>
          <h4 className="font-bold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Course Levels</h4>
          <nav className="space-y-3">
            {["Beginner (A1)", "Elementary (A2)", "Intermediate (B1)", "Advanced (B2)"].map((l) => (
              <a key={l} href="#levels" className="block text-primary-foreground/60 hover:text-secondary transition-colors text-sm">{l}</a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <div className="space-y-3 text-primary-foreground/60 text-sm">
            <p>info@edustack.ca</p>
            <p>+1 (234) 567-890</p>
            <p>100% Online Learning</p>
          </div>
        </div>
      </div>

      <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-primary-foreground/40 text-xs">
        <p>© {new Date().getFullYear()} Edustack French Learning Institute. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
