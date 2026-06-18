import { useRef } from "react";
import { motion } from "framer-motion";
import { skills } from "../data";
import { FaReact , FaNodeJs , FaDocker } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";


const SkillCard = ({ skill }) => (
  <motion.div
    whileHover={{ scale: 1.06, y: -4 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="card-glass gradient-border rounded-xl flex  justify-center flex-col items-center flex-shrink-0 w-40 p-4 cursor-default"
  >
    <div 
    style={{ color: skill.color }}
    className={`text-5xl mb-6`}><skill.icon/></div>
    <div className="font-display font-semibold text-white text-sm mb-2">{skill.name}</div>
  </motion.div>
);

const ScrollRow = ({ items, direction = 1, label }) => {
  const containerRef = useRef(null);

  const scroll = (dir) => {
    containerRef.current?.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3 px-1">
        <span className="text-purple-400/60 text-xs font-mono tracking-wider uppercase">{label}</span>
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            className="w-8 h-8 rounded-lg card-glass text-purple-300 hover:text-white hover:bg-purple-500/30 transition-all text-sm flex items-center justify-center"
          >
            ‹
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-8 h-8 rounded-lg card-glass text-purple-300 hover:text-white hover:bg-purple-500/30 transition-all text-sm flex items-center justify-center"
          >
            ›
          </button>
        </div>
      </div>
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide py-2"
      >
        {items.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const row1 = skills.filter((s) => s.row === 1);
  const row2 = skills.filter((s) => s.row === 2);

  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-mono tracking-widest uppercase block mb-3">
            — What I work with
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
            My{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #e11d48, #9333ea)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Skills
            </span>
          </h2>
          <p className="text-purple-200/50 mt-4 max-w-md mx-auto font-body">
            Technologies I've mastered across the full stack frontend, backend, databases & DevOps.
          </p>
        </motion.div>

        {/* Rows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <ScrollRow items={row1} label="// Frontend & Core" />
          <ScrollRow items={row2} label="// Backend & DevOps" />
        </motion.div>

        {/* Decorative stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 card-glass gradient-border rounded-2xl p-6 flex flex-col sm:flex-row gap-6 justify-around text-center"
        >
          {[
            { icon: <FaReact />, label: "Frontend", color: "#61DAFB" , val: "Expert" },
            { icon: <FaNodeJs/>, label: "Backend", color: "#68A063" , val: "Expert" },
            { icon: <BiLogoPostgresql />, label: "Databases", color: "#336791" , val: "Expert" },
            { icon: <FaDocker />, label: "DevOps", color: "#2496ED" , val: "Expert" },
          ].map((item) => (
            <div key={item.label}>
              <div 
              style={{ color: item.color }}              
              className={`text-2xl flex justify-center mb-3`}>{item.icon}</div>
              <div className="text-white font-display font-semibold text-sm">{item.label}</div>
              <div className="text-purple-400 text-xs font-mono mt-0.5">{item.val}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
