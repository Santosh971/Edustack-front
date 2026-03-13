import { BookOpen, Users, Globe } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Structured Curriculum", desc: "Well-designed courses from A1 to B2 tailored for Canadian requirements." },
  { icon: Users, title: "Expert Mentorship", desc: "Guidance from experienced French language instructors throughout your journey." },
  { icon: Globe, title: "Flexible Online Learning", desc: "Access recorded lessons anytime, anywhere — learn at your own pace." },
];

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 bg-background">
    <div className="container max-w-4xl text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary">About Edustack</h2>
      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
        Edustack is an online French learning institute helping students master the French language for education, career advancement, and immigration pathways in Canada. With recorded lessons, live sessions, and dedicated mentorship, we make French learning accessible, flexible, and effective.
      </p>
    </div>
    <div className="container grid sm:grid-cols-3 gap-6 mt-12">
      {features.map((f) => (
        <div key={f.title} className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow text-center space-y-3">
          <div className="mx-auto w-12 h-12 rounded-full bg-gold-light flex items-center justify-center">
            <f.icon className="text-secondary" size={24} />
          </div>
          <h3 className="font-bold text-primary text-lg">{f.title}</h3>
          <p className="text-muted-foreground text-sm">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default AboutSection;
