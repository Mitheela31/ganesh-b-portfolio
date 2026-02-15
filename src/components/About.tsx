import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Film, MapPin } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
            About <span className="text-gradient-gold">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-muted-foreground leading-relaxed text-lg mb-6">
              Creative and detail-oriented Video and Photo Editor passionate about visual storytelling.
              I bring ideas to life through compelling visuals, seamless transitions, and polished edits
              that captivate audiences.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed text-lg mb-8">
              Skilled in video editing, photo retouching, and content creation. I specialize in
              creating engaging social media content, promotional videos, and stunning visual narratives.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground font-body">
              <MapPin size={18} className="text-primary" />
              <span>Based in Thanjavur</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Film, label: "Video Editing", desc: "Reels & Promos" },
              { icon: Camera, label: "Photo Editing", desc: "Retouching & Grading" },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-6 text-center hover-lift"
              >
                <item.icon className="mx-auto mb-3 text-primary" size={32} />
                <h4 className="font-display font-semibold text-foreground mb-1">{item.label}</h4>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
