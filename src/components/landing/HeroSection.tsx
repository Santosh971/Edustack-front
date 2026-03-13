import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-illustration.png";

const HeroSection = () => (
  <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-navy-light">
    <div className="container grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6 animate-fade-up">
        <span className="inline-block bg-secondary/20 text-secondary-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
          🇫🇷 Learn French. Build Your Future in Canada.
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-primary">
          Master French with Confidence — Your Gateway to Opportunities in Canada
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-lg">
          Edustack French Learning Institute helps international students and future immigrants build strong French language skills through structured online training, expert mentorship, and practical speaking practice.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="gold" size="xl">Register Now</Button>
          <Button variant="navy-outline" size="xl">Join Next Batch</Button>
        </div>
      </div>
      <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <img src={heroImg} alt="Students learning French online" className="w-full max-w-md lg:max-w-lg" />
      </div>
    </div>
  </section>
);

export default HeroSection;
