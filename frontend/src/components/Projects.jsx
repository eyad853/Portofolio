import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data";
import ProjectSidebar from "./ProjectSidebar";

const ProjectCard = ({ project, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -6 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 300, damping: 24 }}
    onClick={() => onClick(project)}
    className="card-glass gradient-border rounded-2xl flex-shrink-0 cursor-pointer overflow-hidden group"
    style={{ width: 300 }}
  >
    {/* Card header visual */}
    <div
      className="h-44 flex items-center justify-center relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at 30% 40%, ${project.color}30, transparent 60%), radial-gradient(circle at 70% 70%, ${project.accentColor}20, transparent 50%), #0d0b1a`,
      }}
    >
        <img
          src={project.coverPhoto}
          className="w-full h-full object-cover"
        />
      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${project.color}15 1px, transparent 1px), linear-gradient(90deg, ${project.color}15 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Hover reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: "rgba(7,5,16,0.7)" }}
      >
        <span
          className="text-sm font-display font-semibold px-4 py-2 rounded-xl text-white"
          style={{ background: `linear-gradient(135deg, ${project.color}, ${project.accentColor})` }}
        >
          View Details →
        </span>
      </motion.div>
    </div>

    {/* Card body */}
    <div className="p-5">
      <h3 className="font-display font-bold text-lg text-white mb-1 line-clamp-1">{project.title}</h3>
      <p className="text-purple-300/60 text-xs font-body mb-3 line-clamp-2">{project.subtitle}</p>
      <p className="text-purple-200/60 text-sm leading-relaxed line-clamp-2 font-body mb-4">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-0.5 rounded-md"
            style={{ background: "rgba(147,51,234,0.15)", color: "rgba(200,180,255,0.7)" }}
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="text-xs font-mono px-2 py-0.5 rounded-md text-purple-400/50">
            +{project.tags.length - 4}
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = ({setImageSrc}) => {
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);

  const scroll = (dir) => {
    containerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <>
      <section id="projects" className="relative py-28 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-purple-400 text-sm font-mono tracking-widest uppercase block mb-3">
                — What I've built
              </span>
              <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
                Featured{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #f59e0b, #e11d48)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Projects
                </span>
              </h2>
            </motion.div>

            {/* Scroll controls */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex gap-2"
            >
              <button
                onClick={() => scroll(-1)}
                className="w-10 h-10 rounded-xl card-glass text-purple-300 hover:text-white hover:bg-purple-500/20 transition-all font-bold flex items-center justify-center"
              >
                ‹
              </button>
              <button
                onClick={() => scroll(1)}
                className="w-10 h-10 rounded-xl card-glass text-purple-300 hover:text-white hover:bg-purple-500/20 transition-all font-bold flex items-center justify-center"
              >
                ›
              </button>
            </motion.div>
          </div>

          {/* Cards row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            ref={containerRef}
            className="flex gap-5 items-center justify-around overflow-x-auto  scrollbar-hide py-4"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={setSelected} />
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-purple-400/40 text-sm font-mono mt-6"
          >
            ← scroll to explore · click any card for details →
          </motion.p>
        </div>
      </section>

      {/* Sidebar */}
      {selected && (
        <ProjectSidebar project={selected} onClose={() => setSelected(null)} setImageSrc={setImageSrc}/>
      )}
    </>
  );
};

export default Projects;
