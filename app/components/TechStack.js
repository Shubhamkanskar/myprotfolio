import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiJavascript, SiNodedotjs, SiNextdotjs, SiFirebase,
  SiPrisma, SiMongodb, SiPostgresql
} from 'react-icons/si';
import { TbBrandOpenai } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

const TechStack = () => {
  const technologies = [
    { icon: SiJavascript, color: "#64B5F6", name: "JavaScript" },
    { icon: SiReact, color: "#4FC3F7", name: "React" },
    { icon: SiNodedotjs, color: "#81C784", name: "Node.js" },
    { icon: SiNextdotjs, color: "#B3E5FC", name: "Next.js" },
    { icon: SiFirebase, color: "#4DD0E1", name: "Firebase" },
    { icon: SiPrisma, color: "#90CAF9", name: "Prisma" },
    { icon: SiMongodb, color: "#4DB6AC", name: "MongoDB" },
    { icon: BiLogoPostgresql, color: "#4FC3F7", name: "PostgreSQL" },
    { icon: TbBrandOpenai, color: "#80DEEA", name: "GenAI" },
  ];

  // Create three copies to ensure smooth infinite scrolling
  const extendedTechnologies = [...technologies, ...technologies, ...technologies];

  return (
    <div className="w-full overflow-hidden py-4 bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/50">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1 * technologies.length * 96] // Multiply by item width (96px)
        }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          },
        }}
      >
        {extendedTechnologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="inline-flex flex-col items-center mx-6 group"
            >
              <div className="relative">
                <Icon
                  className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                />
                <motion.div
                  className="absolute -inset-2 rounded-full opacity-20"
                  style={{ backgroundColor: tech.color }}
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 0.15,
                    scale: 1.2
                  }}
                  transition={{
                    duration: 0.2
                  }}
                />
              </div>
              <span className="mt-1 text-xs font-medium text-blue-200/70">
                {tech.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TechStack;