import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, X, Instagram } from "lucide-react";

const projects = [
  {
    title: "Food Shop Promotional Editing",
    description: "Eye-catching promotional reels and videos for The Boss Biryani, boosting social media engagement.",
    instagram: "https://www.instagram.com/the_boss_biryani",
    tag: "Food & Promo",
  },
  {
    title: "Travel / Lifestyle Editing",
    description: "Stunning travel and lifestyle content with cinematic transitions and color grading.",
    instagram: "https://www.instagram.com/mr_wanderer_007",
    tag: "Travel & Lifestyle",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [modal, setModal] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
            My <span className="text-gradient-gold">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden group hover-lift cursor-pointer"
              onClick={() => setModal(i)}
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent flex items-center justify-center">
                <Instagram className="text-primary/40" size={64} />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity font-body font-medium text-primary-foreground bg-primary px-4 py-2 rounded-lg text-sm">
                    View Project
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground font-body text-xs font-medium rounded-full mb-3">
                  {project.tag}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-6"
          onClick={() => setModal(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card rounded-2xl p-8 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
            <span className="inline-block px-3 py-1 bg-accent text-accent-foreground font-body text-xs font-medium rounded-full mb-4">
              {projects[modal].tag}
            </span>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              {projects[modal].title}
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              {projects[modal].description}
            </p>
            <a
              href={projects[modal].instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Instagram size={18} />
              View on Instagram
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
