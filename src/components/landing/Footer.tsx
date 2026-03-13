const Footer = () => (
  <footer className="bg-primary py-10">
    <div className="container">
      <div className="grid sm:grid-cols-3 gap-8 text-primary-foreground/80 text-sm">
        <div>
          <h3 className="font-heading font-extrabold text-lg text-primary-foreground mb-3">
            Edu<span className="text-secondary">stack</span>
          </h3>
          <p>Empowering students to master French and unlock opportunities in Canada.</p>
        </div>
        <div>
          <h4 className="font-bold text-primary-foreground mb-3">Quick Links</h4>
          <nav className="space-y-2">
            <a href="#about" className="block hover:text-secondary transition-colors">About</a>
            <a href="#levels" className="block hover:text-secondary transition-colors">Courses</a>
            <a href="#method" className="block hover:text-secondary transition-colors">Method</a>
            <a href="#contact" className="block hover:text-secondary transition-colors">Contact</a>
          </nav>
        </div>
        <div>
          <h4 className="font-bold text-primary-foreground mb-3">Contact</h4>
          <p>info@edustack.ca</p>
          <p>+1 (234) 567-890</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-primary-foreground/60 text-xs">
        © {new Date().getFullYear()} Edustack French Learning Institute. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
