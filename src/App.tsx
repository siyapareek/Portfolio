import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <nav className="p-6 flex justify-between items-center backdrop-blur-sm z-10 fixed w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold gradient-text"
          >
            SP
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-x-8"
          >
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </motion.div>
        </nav>

        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-violet-400"
            >
              Hi, I'm
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-4 gradient-text"
            >
              Siya Pareek
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative inline-block mb-8"
            >
              <span className="text-xl md:text-2xl text-gray-400">
                Computer Science Student & 
              </span>
              <span className="text-xl md:text-2xl gradient-text font-semibold">
                Blockchain Enthusiast
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center space-x-6"
            >
              <a 
                href="https://github.com/siyapareek" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/siya-pareek" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:siyapareek139@gmail.com" 
                className="social-icon-link"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex justify-center pb-8 relative z-10"
        >
          <ChevronDown size={24} className="text-violet-400" />
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20 relative">
        <motion.div 
          className="absolute top-40 right-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 gradient-text">About Me</h2>
          <div className="card-glow">
            <div className="glass-card rounded-lg p-8">
              <p className="text-lg text-gray-300 mb-6">
                I'm a Computer Science student at Vellore Institute of Technology with a passion for blockchain technology and software development. Currently maintaining a CGPA of 8.83, I combine academic excellence with practical experience in various technical domains.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 gradient-text">Technical Skills</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <Code size={16} className="text-violet-400" />
                      <span>Python, Java</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Code size={16} className="text-violet-400" />
                      <span>HTML, CSS, JavaScript</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Code size={16} className="text-violet-400" />
                      <span>SQL, Google Cloud</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Code size={16} className="text-violet-400" />
                      <span>Power BI, Excel, R</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Code size={16} className="text-violet-400" />
                      <span>Git, Docker</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 gradient-text">Achievements</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="achievement-item">200+ DSA problems solved</li>
                    <li className="achievement-item">Google HashCode Rank: 3450/25000+</li>
                    <li className="achievement-item">QOTB Semi-finalist at NIT Delhi</li>
                    <li className="achievement-item">Top 25 in National Business Plan Competition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 md:px-20 relative">
        <motion.div 
          className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 gradient-text">Experience</h2>
          <div className="card-glow">
            <div className="glass-card rounded-lg p-8">
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold gradient-text">Research Intern</h3>
                  <span className="text-gray-400">May 2022 - June 2022</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-4">Indian Institute of Technology (IIT BHU)</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-violet-400">•</span>
                    <span>Developed NLP applications for Twitter sentiment analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-violet-400">•</span>
                    <span>Categorized 5,000+ tweets into abusive and non-abusive categories</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-violet-400">•</span>
                    <span>Created proof of concept for categorization techniques</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold gradient-text">Blockchain Club</h3>
                  <span className="text-gray-400">July 2023 - June 2024</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-4">Founder and Vice President</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-violet-400">•</span>
                    <span>Led team of 50 members across six divisions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-violet-400">•</span>
                    <span>Streamlined operations and enhanced communication</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-violet-400">•</span>
                    <span>Implemented innovative technical solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-20 relative">
        <motion.div 
          className="absolute top-40 right-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 gradient-text">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="card-glow"
            >
              <div className="glass-card rounded-lg p-6">
                <div className="h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="E-commerce"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 gradient-text">Shoppers - E-Commerce Website</h3>
                <p className="text-gray-300 mb-4">
                  A fully responsive e-commerce website built with HTML, CSS, and JavaScript, focusing on user experience and modern design principles.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">HTML • CSS • JavaScript</span>
                  <div className="flex space-x-4">
                    <a 
                      href="https://siyapareek.github.io/Shoppers_Ecommerce_Website/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href="https://github.com/siyapareek/Shoppers_Ecommerce_Website" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="card-glow"
            >
              <div className="glass-card rounded-lg p-6">
                <div className="h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Medical AI"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 gradient-text">Tuberculosis Detection</h3>
                <p className="text-gray-300 mb-4">
                  ML-powered system achieving 96.1% accuracy in detecting tuberculosis from chest X-rays using advanced image processing techniques.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Python • Machine Learning</span>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/siyapareek/Tuberculosis_Detection" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 relative">
        <motion.div 
          className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl font-bold mb-8 gradient-text">Get In Touch</h2>
          <div className="card-glow inline-block">
            <div className="glass-card rounded-lg p-8">
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="button-glow">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:siyapareek139@gmail.com"
                  className="text-white font-semibold"
                >
                  <span>Say Hello</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>Designed & Built by Siya Pareek</p>
      </footer>
    </div>
  );
}

export default App;