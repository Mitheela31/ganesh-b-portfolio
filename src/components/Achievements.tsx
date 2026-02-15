import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, TrendingUp } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Food Promotion Reels",
    description: "Edited multiple high-quality food promotion reels driving brand visibility.",
  },
  {
    icon: TrendingUp,
    title: "Social Media Growth",
    description: "Improved social media engagement through visually compelling content.",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
            <span className="text-gradient-gold">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="glass-card rounded-2xl p-8 text-center hover-lift group"
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="text-primary" size={30} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
