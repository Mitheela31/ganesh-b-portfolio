import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
            <span className="text-gradient-gold">Education</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 max-w-md mx-auto hover-lift text-center"
        >
          <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="text-primary" size={28} />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-1">
            Diploma in Mechanical Engineering
          </h3>
          <p className="font-body text-muted-foreground mb-1">Shanmugha Polytechnic College</p>
          <span className="font-body text-sm text-primary font-medium">Completed in 2024</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
