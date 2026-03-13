import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Get In Touch</h2>
          <p className="text-muted-foreground">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold-light flex items-center justify-center shrink-0">
                <Mail className="text-secondary" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-primary">Email Us</h4>
                <a href="mailto:info@edustack.ca" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                  info@edustack.ca
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold-light flex items-center justify-center shrink-0">
                <Phone className="text-secondary" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-primary">WhatsApp</h4>
                <a href="https://wa.me/1234567890" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <Button variant="gold" size="lg" type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
