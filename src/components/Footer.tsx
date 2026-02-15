import { motion } from "framer-motion";
import { Instagram, Heart } from "lucide-react";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="py-10 px-6 border-t border-border"
  >
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-lg font-bold text-foreground">
        Ganesh<span className="text-gradient-gold"> B.</span>
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/mr_wanderer_007"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-accent flex items-center justify-center hover:bg-primary/20 transition-colors"
        >
          <Instagram size={16} className="text-primary" />
        </a>
      </div>
      <p className="font-body text-xs text-muted-foreground flex items-center gap-1">
        Made with <Heart size={12} className="text-primary" /> © 2025
      </p>
    </div>
  </motion.footer>
);

export default Footer;
