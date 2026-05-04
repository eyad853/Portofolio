import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const About = () => {
  const info = [
    { label: "Name", value: "Eyad Mosa" },
    { label: "Role", value: "Full Stack Developer" },
    { label: "Available", value: "Freelance & Full-time" },
    { label: "Email", value: "eyadmosa853@yourname.dev" },
  ];

  const coreValues = [
    { text: "I care about making things fast and smooth, not just “working”" },
    { text: "I pay attention to the small details that make a design feel right" },
    { text: "Easy to work with, clear communication, no overcomplicating things" },
  ]

  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <span className="text-purple-400 text-sm font-mono tracking-widest uppercase block mb-3">
            — Who I am
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
            About{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #9333ea, #f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — story */}
          <div>
            <motion.p {...fadeUp(0.1)} className="text-purple-200/70 text-lg leading-relaxed mb-6 font-body">
              Hey! I'm a full-stack developer who thrives at the intersection of design and
              engineering. I build web applications that are not just functional, but
              genuinely delightful to use.
            </motion.p>
            <motion.p {...fadeUp(0.2)} className="text-purple-200/70 text-lg leading-relaxed mb-10 font-body">
              From crafting responsive UIs with React to architecting scalable backends with
              Node.js and designing efficient databases — I handle the full picture. I'm
              obsessed with performance, clean code, and shipping things that matter.
            </motion.p>
          </div>

          {/* Right — info card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="card-glass gradient-border rounded-2xl p-8"
          >
            <div className="grid grid-cols-2 gap-5">
              {info.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                >
                  <p className="text-purple-400/60 text-xs font-mono uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-white font-semibold font-body text-sm">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <div
              className="mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(147,51,234,0.2)" }}
            >
              <p className="text-purple-400/60 text-xs font-mono uppercase tracking-wider mb-3">
                Core values
              </p>
              <div className="space-y-2">
                {coreValues.map((v) => (
                  <div key={v.text} className="flex items-center gap-3 text-sm text-purple-200/70 font-body">
                    <span>{v.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
