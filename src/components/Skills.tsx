import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Adobe Premiere Pro", level: 90 },
  { name: "CapCut", level: 85 },
  { name: "Canva", level: 88 },
  { name: "Color Grading & Retouching", level: 82 },
  { name: "Audio Enhancement & Syncing", level: 78 },
  { name: "Transitions & Visual Effects", level: 85 },
  { name: "Illustration", level: 70 },
  { name: "Poster Design", level: 80 },
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

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-5 hover-lift group"
            >
              <div className="flex justify-between mb-3">
                <span className="font-body font-medium text-foreground text-sm">
                  {skill.name}
                </span>
                <span className="font-body text-sm text-primary font-semibold">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-gold-glow"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
