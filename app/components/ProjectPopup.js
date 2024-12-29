'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ProjectPopup = ({ isOpen, onClose }) => {
  const projects = [
    {
      title: "PDF AI",
      description: "A powerful AI model optimization platform. Worked on frontend development and AI model integration.",
      techStack: ["React", "Next.js", "Convex DB", "vectore db", "google gemini api", "Shadcn UI"],
      livePreview: "https://pdfai-taupe.vercel.app/",
      github: "https://github.com/Shubhamkanskar",
      image: "/pdf ai.png"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with AI integration, built using Next.js, React, and Tailwind CSS. Features dynamic animations and responsive design.",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      livePreview: "https://shubham-portfolio.vercel.app",
      github: "https://github.com/Shubhamkanskar/myportfolio",
      image: "/portfolio.png"
    },
    {
      title: "My Socials",
      description: "Share your every socials in one single accessable link.",
      techStack: ["React", "tailwind css", "next js", "vercel", "MongoDB"],
      livePreview: "https://my-socials-beta.vercel.app/",
      github: "https://github.com/Shubhamkanskar/MySocials",
      image: "/demo.png"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[100]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Popup Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-[90%] max-w-4xl mx-auto max-h-[80vh] overflow-y-auto"
          >
            {/* Popup Content */}
            <div className="bg-gradient-to-br from-gray-900/95 to-black
                          border border-purple-500/20 shadow-xl shadow-purple-500/10
                          backdrop-blur-lg rounded-2xl p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                  Featured Projects
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Projects Grid */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  >
                    {/* Project Image */}
                    <div className="relative h-36 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          priority={true}
                          className="rounded-t-xl"
                        />
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-3">
                      <h3 className="text-base font-semibold text-white mb-1">{project.title}</h3>
                      <p className="text-gray-400 text-xs mb-2 line-clamp-2">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-2">
                        <a
                          href={project.livePreview}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 transition-colors duration-300"
                          title="Live Preview"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 transition-colors duration-300"
                          title="View Code"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectPopup;
