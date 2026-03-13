import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2" />

    <div className="container text-center space-y-6 relative z-10">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground">
        Start Your French Learning Journey Today
      </h2>
      <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg">
        Join hundreds of students who are building their future in Canada through French fluency.
      </p>
      <div className="flex flex-wrap justify-center gap-4 pt-2">
        <Button variant="gold" size="xl">Register Now</Button>
        <Button variant="gold-outline" size="xl" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
          Join Next Batch
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
