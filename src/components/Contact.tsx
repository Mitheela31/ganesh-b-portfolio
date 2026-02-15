import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="font-body text-muted-foreground leading-relaxed">
              Ready to bring your vision to life? Let's create something amazing together.
            </p>
            {[
              { icon: Phone, label: "Phone", value: "9344137074", href: "tel:9344137074" },
              { icon: Mail, label: "Email", value: "ganeshappu300@gmail.com", href: "mailto:ganeshappu300@gmail.com" },
              { icon: MapPin, label: "Location", value: "Thanjavur", href: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-4 glass-card rounded-xl p-4 hover-lift group"
              >
                <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground">{item.label}</p>
                  <p className="font-body font-medium text-foreground text-sm">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-card rounded-2xl p-8 space-y-5"
          >
            <div>
              <label className="font-body text-sm text-muted-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-body font-semibold rounded-lg animate-glow-pulse hover:opacity-90 transition-all"
            >
              {submitted ? "Message Sent! ✓" : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
