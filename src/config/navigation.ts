// Shared navigation links - used in Navbar and Footer
// These IDs must match the section IDs on the page

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#levels" },
  { label: "Method", href: "#method" },
  { label: "Why Us", href: "#why-choose" },
];

// Fixed navbar height for scroll offset
export const NAVBAR_HEIGHT = 80;

// Smooth scroll to section with offset for fixed navbar
export const scrollToSection = (href: string) => {
  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - NAVBAR_HEIGHT;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

// Handle nav link click - prevents default and scrolls smoothly
export const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  scrollToSection(href);
};