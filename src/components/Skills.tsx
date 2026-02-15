import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Adobe Premiere Pro",
  "CapCut",
  "Color Grading & Retouching",
  "Audio Enhancement & Syncing",
  "Transitions & Visual Effects",
  "Poster Design",
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
            My <span className="text-gradient-gold">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl px-5 py-4 hover-lift text-center"
            >
              <span className="font-body font-medium text-foreground text-sm">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
