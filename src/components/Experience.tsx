import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
            <span className="text-gradient-gold">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-8 mb-10"
          >
            <div className="md:text-right md:pr-12">
              <span className="font-body text-sm font-semibold text-primary">2025 – Present</span>
            </div>

            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0">
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <Briefcase size={12} className="text-primary-foreground" />
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 hover-lift">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Freelance Video Editor
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Edited short videos, reels, and promotional clips. Enhanced visuals with transitions,
                filters, and sound effects for various clients and brands.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
