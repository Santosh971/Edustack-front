import certImg from "@/assets/certificate.png";
import { Award } from "lucide-react";

const CertificateSection = () => (
  <section className="py-16 md:py-24 bg-muted">
    <div className="container grid md:grid-cols-2 gap-10 items-center max-w-4xl">
      <div className="space-y-4">
        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
          <Award className="text-secondary" size={24} />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Earn Your Certificate</h2>
        <p className="text-muted-foreground leading-relaxed">
          Upon completing your course, receive an official <strong>Certificate of Completion</strong> from Edustack French Learning Institute — a testament to your dedication and language proficiency.
        </p>
      </div>
      <div className="flex justify-center">
        <img src={certImg} alt="Edustack Certificate of Completion" className="w-full max-w-sm rounded-lg shadow-lg" />
      </div>
    </div>
  </section>
);

export default CertificateSection;
