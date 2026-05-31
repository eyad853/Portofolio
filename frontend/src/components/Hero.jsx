import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const introduction = `Tired of messy code that breaks every time you need an update?
                        Struggling with systems that won't talk to each other? 
                        Need dashboards that actually work?
                        
                        I build web applications that are clean, maintainable, and actually do what you need them to do without the headaches.`

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1">
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-purple-500" />
              <span className="text-purple-400 text-sm font-mono tracking-widest uppercase">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-display font-bold text-5xl md:text-7xl leading-[0.95] mb-6 text-white"
            >
              Building
              <br />
              <span
                className="glow-crimson"
                style={{
                  background: "linear-gradient(90deg, #e11d48, #9333ea)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                digital
              </span>
              <br />
              experiences
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="text-purple-200/60 text-lg leading-relaxed mb-10 max-w-xl font-body whitespace-pre-line"
            >
            {introduction}
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => scrollTo("projects")}
                className="px-7 py-3.5 rounded-xl font-semibold font-display text-white text-sm"
                style={{ background: "linear-gradient(135deg, #7c3aed, #e11d48)" }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147,51,234,0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={() => scrollTo("contact")}
                className="px-7 py-3.5 rounded-xl font-semibold font-display text-sm text-purple-300"
                style={{ border: "1px solid rgba(147,51,234,0.4)" }}
                whileHover={{
                  scale: 1.05,
                  background: "rgba(147,51,234,0.15)",
                  borderColor: "rgba(147,51,234,0.8)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </motion.div>

            {/* Stats
            <motion.div {...fadeUp(0.5)} className="flex gap-8 mt-14">
              {[
                { num: "3+", label: "Years Exp." },
                { num: "30+", label: "Projects" },
                { num: "15+", label: "Clients" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-bold text-3xl text-white glow-purple">
                    {s.num}
                  </div>
                  <div className="text-purple-200/50 text-sm mt-1 font-body">{s.label}</div>
                </div>
              ))}
            </motion.div> */}
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="order-1 lg:order-2 relative flex-shrink-0"
          >
            {/* Outer ring glow */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-16px] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #9333ea, #e11d48, #f59e0b, #9333ea)",
                opacity: 0.6,
                filter: "blur(2px)",
              }}
            />
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
              style={{ border: "3px solid rgba(147,51,234,0.5)" }}
            >
              {/* Placeholder avatar */}
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #1e0a3c 0%, #0d0b1a 50%, #2d0a1e 100%)",
                }}
              >
                <div className="w-full h-full">
                  <img src="/me.jpeg" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-8 card-glass gradient-border rounded-xl px-3 py-2 text-xs font-mono text-purple-300"
            >
              Open to work
            </motion.div>
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 bottom-10 card-glass gradient-border rounded-xl px-3 py-2 text-xs font-mono text-yellow-300"
            >
              React + Node
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
