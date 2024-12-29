'use client';
import Hero from './sections/Hero';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      
      {/* About Section */}
      <motion.section 
        id="about"
        className="py-20 px-4 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-playfair">
            About Me
          </h2>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            <p className="text-gray-300 text-lg leading-relaxed font-inter">
              As a <span className="font-semibold text-blue-400">Full Stack Engineer</span> with <span className="font-semibold underline decoration-blue-400/50">9 months of hands-on experience</span> at Deployh.ai, I specialize in <span className="italic text-blue-300">MERN Stack Development 
              and AI model optimization</span>. My journey in tech is backed by a strong educational foundation in Computer Applications, 
              where I consistently maintained high academic performance. I combine my theoretical knowledge with practical expertise 
              to deliver scalable and efficient web solutions.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Experience Timeline Section */}
      <motion.section 
        id="experience"
        className="py-20 px-4 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-purple-500/5"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 font-playfair">
            Journey
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Current Role */}
              <motion.div 
                className="relative flex items-center justify-between"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="w-5/12">
                  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2 font-poppins">Full Stack Engineer</h3>
                    <p className="text-blue-400 font-medium">DeployH.AI</p>
                    <p className="text-gray-500 italic">May 2023 - Present</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
                <div className="w-5/12">
                  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-300">
                    <div className="text-gray-300 space-y-2 font-inter">
                      <p className="border-b border-blue-500/20 pb-2 text-blue-300">
                        Building scalable web applications using <span className="font-semibold text-blue-200">MERN Stack</span>
                      </p>
                      <p className="border-b border-blue-500/20 pb-2 text-blue-300">
                        Implementing <span className="italic">AI model optimizations</span>
                      </p>
                      <p className="border-b border-blue-500/20 pb-2 text-blue-300">
                        Developing <span className="font-medium">RESTful APIs</span>
                      </p>
                      <p className="text-blue-200 font-medium">
                        <span className="underline decoration-blue-500/50">9 months</span> of professional experience
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Education - MCA */}
              <motion.div 
                className="relative flex items-center justify-between"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="w-5/12">
                  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-colors duration-300">
                    <p className="text-gray-300 font-inter">
                      <span className="text-purple-300 font-semibold">CGPA: 8.0</span>
                      <br/>
                      <span className="italic text-purple-200">Specialized in Advanced Web Development and Cloud Computing</span>
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
                <div className="w-5/12">
                  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-colors duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2 font-poppins">Master of Computer Applications</h3>
                    <p className="text-purple-400 font-medium">YEIIMS, SPPU</p>
                    <p className="text-gray-500 italic">2023</p>
                  </div>
                </div>
              </motion.div>

              {/* Education - BCA */}
              <motion.div 
                className="relative flex items-center justify-between"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="w-5/12">
                  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2 font-poppins">Bachelor of Computer Applications</h3>
                    <p className="text-blue-400 font-medium">SPPU</p>
                    <p className="text-gray-500 italic">2021</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
                <div className="w-5/12">
                  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-300">
                    <p className="text-gray-300 font-inter">
                      <span className="text-blue-300 font-semibold">CGPA: 7.9</span>
                      <br/>
                      <span className="italic text-blue-200">Foundation in Computer Science and Programming</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        className="py-20 px-4 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-playfair">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Languages & Frameworks",
                skills: "JavaScript, Next.js, React.js, Redux, Node.js, Express.js, MongoDB, Clerk",
                gradient: "from-blue-500 to-purple-500"
              },
              {
                title: "Developer Tools",
                skills: "VS Code, Redux DevTools, GitHub, Chrome DevTools, Git, Linux",
                gradient: "from-purple-500 to-blue-500"
              },
              {
                title: "Web Development",
                skills: "HTML, CSS, Tailwind CSS, MUI",
                gradient: "from-blue-500 to-purple-500"
              },
              {
                title: "Other Skills",
                skills: "API Development, RESTful APIs, Performance Optimization, UI/UX Design",
                gradient: "from-purple-500 to-blue-500"
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="group"
              >
                <div className="h-full bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10
                  hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                  <div className={`h-1 w-20 mb-4 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                  <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
                  <p className="text-gray-400">{category.skills}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
