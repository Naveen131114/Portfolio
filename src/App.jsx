import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Aurora Dashboard',
    description: 'A modern analytics dashboard with animated charts, custom filters, and responsive widgets.',
    stack: 'React • Vite • Framer Motion',
    image: '/projects/project1.svg',
    github: 'https://github.com/your-username/aurora-dashboard'
  },
  {
    title: 'Pixel Portfolio',
    description: 'A premium portfolio experience with immersive card motion and clean developer branding.',
    stack: 'React • CSS • UX Design',
    image: '/projects/project2.svg',
    github: 'https://github.com/your-username/pixel-portfolio'
  },
  {
    title: 'Velocity App',
    description: 'A productivity tool prototype focused on fast interactions, quick access, and delightful UI.',
    stack: 'React • Vite • API Integration',
    image: '/projects/project3.svg',
    github: 'https://github.com/your-username/velocity-app'
  }
];

const skills = [
  'React',
  'Framer Motion',
  'Vite',
  'Responsive UI',
  'JavaScript',
  'GitHub'
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function App() {
  return (
    <div className="app-shell">
      <div className="background-glow" />
      <header className="hero section">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="eyebrow">Premium animated portfolio</p>
          <h1>Upgrade your digital presence.</h1>
          <p className="hero-text">
            I build bold, animated experiences with React, Vite, and Framer Motion. Clean dark gradients, card-based layouts,
            and subtle micro-interactions make every section feel premium.
          </p>
          <div className="hero-actions">
            <a className="button" href="/resume.pdf" download>
              Download Resume
            </a>
            <a className="ghost-button" href="#projects">
              Explore Projects
            </a>
          </div>
        </motion.div>
      </header>

      <main>
        <motion.section
          className="section about"
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <div className="section-title">
            <span>01</span>
            <h2>About</h2>
          </div>
          <p>
            I create premium front-end experiences for modern brands and digital products. My work focuses on
            polished motion, accessible layouts, and interfaces that feel fast and memorable.
          </p>
        </motion.section>

        <motion.section
          className="section skills"
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="section-title">
            <span>02</span>
            <h2>Skills</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill} className="skill-pill">
                {skill}
              </div>
            ))}
          </div>
        </motion.section>

        <section className="section projects" id="projects">
          <div className="section-title">
            <span>03</span>
            <h2>Projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <div className="project-media">
                  <img src={project.image} alt={`${project.title} screenshot`} />
                </div>
                <div className="project-copy">
                  <p className="project-label">Featured Project</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-stack">{project.stack}</p>
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          className="section contact"
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="section-title">
            <span>04</span>
            <h2>Contact</h2>
          </div>
          <p>
            Ready to build something premium? Send a message and let&apos;s turn an idea into a polished product.
          </p>
          <a className="button" href="mailto:hello@yourdomain.com">
            Say Hello
          </a>
        </motion.section>
      </main>
    </div>
  );
}

export default App;
