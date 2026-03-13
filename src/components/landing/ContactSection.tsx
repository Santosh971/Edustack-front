import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background section-pattern">
      <div className="container">
        <div className="text-center space-y-4 mb-14">
          <span className="inline-block text-secondary text-sm font-semibold uppercase tracking-widest">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Get In Touch</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Have questions about our courses? We'd love to help you get started.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-card rounded-2xl p-5 border shadow-card hover:shadow-card-hover transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl gradient-gold flex items-center justify-center shrink-0">
                  <Mail className="text-primary-foreground" size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Email Us</h4>
                  <a href="mailto:info@edustack.ca" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                    info@edustack.ca
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-5 border shadow-card hover:shadow-card-hover transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl gradient-navy flex items-center justify-center shrink-0">
                  <MessageCircle className="text-primary-foreground" size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">WhatsApp</h4>
                  <a href="https://wa.me/1234567890" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-5 border shadow-card hover:shadow-card-hover transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                  <MapPin className="text-secondary" size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Location</h4>
                  <p className="text-muted-foreground text-sm">Online — Learn from anywhere in Canada & worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-card rounded-2xl p-6 md:p-8 border shadow-card space-y-4">
            <h3 className="font-bold text-primary text-lg mb-2">Send us a message</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="rounded-xl h-12"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="rounded-xl h-12"
              />
            </div>
            <Input
              type="tel"
              placeholder="Phone / WhatsApp Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="rounded-xl h-12"
            />
            <Textarea
              placeholder="Your Message — Tell us about your French learning goals..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="rounded-xl resize-none"
            />
            <Button variant="gold" size="lg" type="submit" className="w-full shadow-gold">
              <Send size={16} /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
