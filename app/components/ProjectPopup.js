import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Brain,
  Database,
  Box,
  Code2,
  FileJson,
  Layout,
  Bot,
  Boxes,
  Globe,
  Github,
  Eye,
  X,
  Sparkles,
  MonitorSmartphone
} from 'lucide-react';

const ProjectPopup = ({ isOpen, onClose }) => {
  const projects = [
    {
      title: "PDF AI",
      description: "A powerful AI model optimization platform. Worked on frontend development and AI model integration. Built with modern technologies to provide an intuitive user experience for document analysis.",
      techStack: [
        { name: "React", icon: Code2, color: "#61DAFB" },
        { name: "Next.js", icon: Layout, color: "#000000" },
        { name: "Convex DB", icon: Database, color: "#FF4154" },
        { name: "Vector DB", icon: Boxes, color: "#4B32C3" },
        { name: "Google Gemini", icon: Brain, color: "#4285F4" },
        { name: "Shadcn UI", icon: Box, color: "#38B2AC" }
      ],
      livePreview: "https://pdfai-taupe.vercel.app/",
      github: "https://github.com/Shubhamkanskar/pdfai",
      image: "/pdf ai.png",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with AI integration. Showcases projects and skills with a clean, responsive design and smooth animations.",
      techStack: [
        { name: "Next.js", icon: Layout, color: "#000000" },
        { name: "React", icon: Code2, color: "#61DAFB" },
        { name: "TypeScript", icon: FileJson, color: "#3178C6" },
        { name: "Tailwind", icon: Box, color: "#38B2AC" }
      ],
      livePreview: "https://shubhamkanaskar.vercel.app/",
      github: "https://github.com/Shubhamkanskar/myprotfolio",
      image: "/portfolio.png"
    },
    {
      title: "My Socials",
      description: "Share your every socials in one single accessible link. A centralized platform for managing and sharing all your social media presence.",
      techStack: [
        { name: "React", icon: Code2, color: "#61DAFB" },
        { name: "Next.js", icon: Layout, color: "#000000" },
        { name: "MongoDB", icon: Database, color: "#47A248" },
        { name: "Tailwind", icon: Box, color: "#38B2AC" }
      ],
      livePreview: "https://my-socials-beta.vercel.app/",
      github: "https://github.com/Shubhamkanskar/MySocials",
      image: "/demo.png"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[100] p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-xl"
          >
            <div className="bg-gradient-to-br from-gray-900/98 to-black/98
                          border border-purple-500/30 shadow-xl shadow-purple-500/20
                          backdrop-blur-xl rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <MonitorSmartphone className="w-6 h-6 text-purple-400" />
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                    Featured Projects
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-white/5 rounded-xl overflow-hidden border 
                              ${project.featured
                        ? 'border-purple-500/50 shadow-lg shadow-purple-500/30 scale-105'
                        : 'border-purple-500/30'} 
                              hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 
                              transition-all duration-300`}
                  >
                    <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
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

                    <div className="p-4">
                      <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                        {project.title}
                        {project.featured && (
                          <span className="flex items-center gap-1 text-xs px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded-full">
                            <Sparkles className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-3">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map(({ name, icon: Icon, color }) => (
                          <div
                            key={name}
                            className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors duration-300"
                          >
                            <Icon className="w-4 h-4" style={{ color }} />
                            <span className="text-xs font-medium">{name}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.livePreview}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 transition-colors duration-300"
                        >
                          <Eye className="w-4 h-4" />
                          <span className="text-sm font-medium">Live Preview</span>
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 transition-colors duration-300"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm font-medium">View Code</span>
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