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
    { label: "Available", value: "Freelance & Full time" },
    { label: "Email", value: "eyadmosa853@gmail.com" },
  ];

  const coreValues = [
    { text: `Performance Driven: I care about making things fast, smooth, and optimized ... not just "working"` },
    { text: `Detail Oriented: I pay close attention to the micro interactions and small design details that make a product feel right` },
    { text: `No Nonsense Collaboration: Easy to work with, clear and transparent communication, and zero unnecessary complexity.` },
  ]

  const text1 = `Hi, I'm Eyad Mosa. I'm a fullstack developer who likes taking messy problems and turning them into something clean and simple.`
  const text2 = `While my core stack includes React, Next.js, Node.js, Python, and SQL/NoSQL databases, my real value lies in my approach. I build with an end to end perspective, engineering against future failure points and ensuring codebases remain clean, readable, and highly maintainable.`
  const text3 = `No over engineering. No cheap shortcuts. Just fast, smooth, and intentional software.`

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
              {text1}
            </motion.p>
            <motion.p {...fadeUp(0.2)} className="text-purple-200/70 text-lg leading-relaxed mb-10 font-body">
              {text2}
            </motion.p>
            <motion.p {...fadeUp(0.2)} className="text-purple-200/70 text-lg leading-relaxed mb-10 font-body">
              {text3}
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
                  <div key={v.text} className="flex items-center gap-3 text-xs text-purple-200/70 font-body">
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
