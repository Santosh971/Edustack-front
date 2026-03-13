import { Target, Route, Laptop, MessageCircle, Check } from "lucide-react";
import classroomImg from "@/assets/classroom.jpg";

const reasons = [
  { icon: Target, title: "Exam Focused Training", desc: "Courses designed with TEF, TCF, and DELF exam preparation in mind." },
  { icon: Route, title: "Structured Learning Path", desc: "A clear, step-by-step curriculum from beginner to advanced." },
  { icon: Laptop, title: "Flexible Online Learning", desc: "Study from anywhere with on-demand access to all course materials." },
  { icon: MessageCircle, title: "Practical Speaking Practice", desc: "Regular speaking sessions to build real-world conversational confidence." },
];

const WhyChooseSection = () => (
  <section id="why-choose" className="py-20 md:py-28 bg-background section-pattern">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text side */}
        <div className="space-y-8">
          <div>
            <span className="inline-block text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Why Edustack</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight">
              Why Students Choose <span className="text-gradient-gold">Edustack</span>
            </h2>
          </div>

          <div className="space-y-4">
            {reasons.map((r) => (
              <div key={r.title} className="group flex gap-4 items-start bg-card rounded-2xl p-5 border shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <r.icon className="text-secondary" size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-base">{r.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="relative hidden lg:block">
          <div className="rounded-3xl overflow-hidden shadow-card-hover">
            <img src={classroomImg} alt="Interactive classroom session" className="w-full h-[500px] object-cover" />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card-hover p-5 border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
                <Check className="text-primary-foreground" size={18} />
              </div>
              <div>
                <p className="font-bold text-primary text-sm">Certified Program</p>
                <p className="text-xs text-muted-foreground">Industry recognized</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-28 h-28 border-4 border-secondary/20 rounded-3xl -z-10" />
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
