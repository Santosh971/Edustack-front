import { GraduationCap, Plane, FileCheck, School } from "lucide-react";

const audiences = [
  { icon: GraduationCap, title: "International Students in Canada", desc: "Already in Canada and want to boost French skills." },
  { icon: Plane, title: "Planning to Study in Canada", desc: "Preparing French proficiency before arriving." },
  { icon: FileCheck, title: "PR Applicants", desc: "Need French for immigration and PR processes." },
  { icon: School, title: "School & College Students", desc: "Building French skills for academic and personal growth." },
];

const AudienceSection = () => (
  <section className="py-16 md:py-24 bg-muted">
    <div className="container text-center space-y-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Who This Course Is For</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">Our programs are designed for learners at every stage of their Canadian journey.</p>
    </div>
    <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {audiences.map((a) => (
        <div key={a.title} className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow text-center space-y-3">
          <div className="mx-auto w-14 h-14 rounded-full bg-primary flex items-center justify-center">
            <a.icon className="text-primary-foreground" size={28} />
          </div>
          <h3 className="font-bold text-primary">{a.title}</h3>
          <p className="text-muted-foreground text-sm">{a.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default AudienceSection;
