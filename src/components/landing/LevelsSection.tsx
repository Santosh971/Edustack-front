const levels = [
  { level: "A1", name: "Beginner", desc: "Start from scratch — learn basic greetings, everyday vocabulary, and simple sentence structures.", color: "bg-secondary/20 border-secondary" },
  { level: "A2", name: "Elementary", desc: "Build on basics — understand common expressions, short conversations, and routine tasks.", color: "bg-primary/10 border-primary" },
  { level: "B1", name: "Intermediate", desc: "Gain independence — discuss familiar topics, travel situations, and express opinions.", color: "bg-secondary/20 border-secondary" },
  { level: "B2", name: "Advanced", desc: "Communicate fluently — engage in complex discussions, professional settings, and academic contexts.", color: "bg-primary/10 border-primary" },
];

const LevelsSection = () => (
  <section id="levels" className="py-16 md:py-24 bg-background">
    <div className="container text-center space-y-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary">French Levels We Teach</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">From absolute beginner to advanced fluency — we've got your entire French learning journey covered.</p>
    </div>
    <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {levels.map((l) => (
        <div key={l.level} className={`rounded-xl p-6 border-2 ${l.color} hover:shadow-lg transition-shadow space-y-3`}>
          <span className="text-3xl font-extrabold text-primary">{l.level}</span>
          <h3 className="font-bold text-lg text-primary">{l.name}</h3>
          <p className="text-muted-foreground text-sm">{l.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default LevelsSection;
