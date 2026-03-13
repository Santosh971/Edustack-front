import { Play, Video, Mic, HeartHandshake } from "lucide-react";

const methods = [
  { icon: Play, title: "Recorded Classes", desc: "Learn anytime with structured, pre-recorded lessons you can revisit at your pace." },
  { icon: Video, title: "Live Online Sessions", desc: "Join interactive live classes for real-time doubt solving and deeper understanding." },
  { icon: Mic, title: "Speaking Practice Sessions", desc: "Improve your fluency and pronunciation through guided speaking exercises." },
  { icon: HeartHandshake, title: "Mentorship Support", desc: "Get personal guidance and motivation from expert mentors throughout the course." },
];

const MethodSection = () => (
  <section id="method" className="py-16 md:py-24 bg-muted">
    <div className="container text-center space-y-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Our Learning Method</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">A blended approach combining the best of self-paced and instructor-led learning.</p>
    </div>
    <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {methods.map((m) => (
        <div key={m.title} className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-all hover:-translate-y-1 text-center space-y-3">
          <div className="mx-auto w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center">
            <m.icon className="text-secondary" size={28} />
          </div>
          <h3 className="font-bold text-primary">{m.title}</h3>
          <p className="text-muted-foreground text-sm">{m.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default MethodSection;
