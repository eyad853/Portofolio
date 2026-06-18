import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const ProjectSidebar = ({ project, onClose }) => {
  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const images = []

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50"
            style={{ background: "rgba(7,5,16,0.85)", backdropFilter: "blur(6px)" }}
            onClick={onClose}
          />

          {/* Sidebar panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
            className="fixed top-0 right-0 bottom-0 z-50 overflow-y-auto"
            style={{
              width: "min(90vw, 580px)",
              background: "#0a0817",
              borderLeft: "1px solid rgba(147,51,234,0.25)",
            }}
          >
            {/* Colored top bar */}
            <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.accentColor})` }} />

            <div className="p-8">
              {/* Close button */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="mb-6 w-9 h-9 rounded-xl flex items-center justify-center text-purple-300 hover:text-white transition-colors"
                style={{ background: "rgba(147,51,234,0.15)", border: "1px solid rgba(147,51,234,0.3)" }}
              >
                ✕
              </motion.button>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="font-display font-bold text-3xl text-white mb-1"
              >
                {project.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
                className="text-purple-300/60 font-body mb-6"
              >
                {project.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
                className="text-purple-300/60 font-body mb-6 cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <img src={project.mainImage} className="w-full h-full object-cover rounded-md cursor-pointer" />
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
                className="text-purple-200/70 leading-relaxed font-body mb-8"
              >
                {project.description}
              </motion.p>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <p className="text-purple-400/60 text-xs font-mono uppercase tracking-wider mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono text-purple-300"
                      style={{ background: "rgba(147,51,234,0.15)", border: "1px solid rgba(147,51,234,0.3)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {!project.isServerOpen&&(<motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34 }}
                className="flex gap-3 mb-10"
              >
                <div className="w-full py-5 px-2 border-2 border-orange-500 bg-yellow-800 rounded-md">
                  ⚠️ Note: The live demo is currently unavailable because the backend server is temporarily offline. The project source code and implementation details are still available for review. The live demo will be restored once the server is back online.
                </div>
              </motion.div>)}

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34 }}
                className="flex gap-3 mb-10"
              >
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl font-semibold font-display text-sm text-center text-white"
                  style={{ background: `linear-gradient(135deg, ${project.color}, ${project.accentColor})` }}
                >
                  Live Demo ↗
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl font-semibold font-display text-sm text-center text-purple-300"
                  style={{ background: "rgba(147,51,234,0.15)", border: "1px solid rgba(147,51,234,0.35)" }}
                >
                  GitHub ↗
                </a>
              </motion.div>

              {project.images.length>0&&(
                project.images.map(image=>(
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22 }}
                    className="text-purple-200/70 leading-relaxed font-body mb-8 cursor-pointer"
                  >
                    <img src={image} className="w-full h-full object-cover rounded-md cursor-pointer" />
                  </motion.p>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectSidebar;
