import { Award, CheckCircle2 } from "lucide-react";
import certImg from "@/assets/certificate-grad.jpg";

const benefits = [
  "Official Certificate of Completion",
  "Recognized by educational institutions",
  "Boosts your resume & PR applications",
  "Digital & printable format",
];

const CertificateSection = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container">
      <div className="gradient-navy rounded-3xl overflow-hidden relative">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }} />

        <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-14 relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full">
              <Award size={14} />
              Certification
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground leading-tight">
              Earn Your Certificate of Completion
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed">
              Upon completing your course, receive an official Certificate of Completion from Edustack French Learning Institute — a testament to your dedication and language proficiency.
            </p>
            <div className="space-y-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 text-primary-foreground/90 text-sm font-medium">
                  <CheckCircle2 className="text-secondary shrink-0" size={18} />
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-foreground/10 max-w-sm">
              <img src={certImg} alt="Graduate celebrating certification" className="w-full h-[300px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CertificateSection;
