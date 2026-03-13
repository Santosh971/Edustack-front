import { Target, Route, Laptop, MessageCircle } from "lucide-react";

const reasons = [
  { icon: Target, title: "Exam Focused Training", desc: "Courses designed with TEF, TCF, and DELF exam preparation in mind." },
  { icon: Route, title: "Structured Learning Path", desc: "A clear, step-by-step curriculum from beginner to advanced." },
  { icon: Laptop, title: "Flexible Online Learning", desc: "Study from anywhere with on-demand access to all course materials." },
  { icon: MessageCircle, title: "Practical Speaking Practice", desc: "Regular speaking sessions to build real-world conversational confidence." },
];

const WhyChooseSection = () => (
  <section id="why-choose" className="py-16 md:py-24 bg-background">
    <div className="container text-center space-y-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Why Choose Edustack</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">We're committed to delivering the best French learning experience for Canadian aspirants.</p>
    </div>
    <div className="container grid sm:grid-cols-2 gap-6 mt-12 max-w-3xl">
      {reasons.map((r) => (
        <div key={r.title} className="flex gap-4 items-start bg-card rounded-xl p-5 border shadow-sm hover:shadow-md transition-shadow">
          <div className="shrink-0 w-12 h-12 rounded-lg bg-gold-light flex items-center justify-center">
            <r.icon className="text-secondary" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-primary">{r.title}</h3>
            <p className="text-muted-foreground text-sm mt-1">{r.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseSection;
