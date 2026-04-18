import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
const projects = [
  {
    title: 'Billing & Management System',
    description: 'Developed a scalable billing application with stock management, GST calculation, and dynamic product handling. Handled client requirements and delivered end-to-end solution.',
    stack: 'Next.js • Flask • MySQL',
    image: '/projects/project1.svg',
    github: 'https://github.com/Naveen131114'
  },
  {
    title: 'Factory Production Tracking',
    description: 'Built a production tracking system to monitor workflows, activities, and improve operational efficiency. Worked closely with clients to refine requirements.',
    stack: 'React • Flask',
    image: '/projects/project2.svg',
    github: 'https://github.com/Naveen131114'
  },
  {
    title: 'ML Parcel Monitoring',
    description: 'Created a system for capturing images and detecting staff behavior using ML-based processing.',
    stack: 'React • Machine Learning',
    image: '/projects/project3.svg',
    github: 'https://github.com/Naveen131114'
  },
  {
    title: 'Healthcare Management System',
    description: 'Developed a complete hospital management system with multiple role-based modules including receptionist, lab, pharmacy, billing, doctor, and admin workflows.',
    stack: 'PHP • MySQL',
    image: '/projects/project4.svg',
    github: 'https://github.com/Naveen131114'
  },
  {
    title: 'Authentication & Security (POC)',
    description: 'Implemented secure Google OAuth login system with Flask and integrated authentication flows.',
    stack: 'Flask • OAuth',
    image: '/projects/project5.svg',
    github: 'https://github.com/Naveen131114/Google_Signin'
  },
  {
    title: 'Multi-language Web Application',
    description: 'Built localization system supporting multiple languages (Tamil, English, Hindi) using i18n in React.',
    stack: 'React • i18n',
    image: '/projects/project6.svg',
    github: 'https://github.com/Naveen131114/react_template_glogin_multilanguage'
  },
  {
    title: 'Online Code Editor',
    description: 'Developed a browser-based code editor supporting Java, Python, and JavaScript execution.',
    stack: 'React • Node.js',
    image: '/projects/project7.svg',
    github: 'https://github.com/Naveen131114/editor_tool'
  }
];


const skills = [
  'React',
  'Next.js',
  'Flask',
  'Node.js',
  'PHP',
  'MySQL',
  'Flutter',
  'JavaScript',
  'Bootstrap',
  'Tailwind CSS',
  'Git',
  'GitHub',
  'Docker',
  'Virtual Box',
  'google ml-kit',
  'tensorflow',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function App() {
  return (
    <div className="app-shell">
      <div className="background-glow" />

      {/* HERO */}
      <header className="hero section">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Full Stack Developer | Trainer</p>
          <h1>Naveenkumar M</h1>
          <p className="hero-text">
            I build scalable web applications using React, Next.js, Flask, and PHP. Experienced in developing real-world systems like billing platforms, production tracking tools, and ML-based solutions.
          </p>
          <div className="hero-actions">
            <a className="button" href="/resume.pdf" download>
              Download Resume
            </a>
            <a className="ghost-button" href="#projects">
              View Projects
            </a>
          </div>
        </motion.div>
      </header>

      <main>

        {/* ABOUT */}
        <motion.section
          className="section about"
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="section-title">
            {/* <span>01</span> */}
            <h2>About</h2>
          </div>
          <p>
            Full Stack Developer with 2+ years of experience delivering 10+ applications across domains like billing systems, healthcare, e-commerce,
            and manufacturing. Experienced in client handling, requirement gathering, and delivering scalable solutions.
          </p>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          className="section skills"
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="section-title">
            {/* <span>02</span> */}
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

        {/* CASE STUDIES */}
        <motion.section
          className="section case-study"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="section-title">
            <h2>Case Studies</h2>
          </div>

          <div className="space-y-6">

            {/* BILLING SYSTEM */}
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-2">
                Billing & Management System
              </h3>

              <p className="text-gray-400 mb-2">
                <strong>Problem:</strong> Businesses struggled with manual billing, stock tracking, and maintaining creditor/debtor ledgers, leading to errors and inefficiency.
              </p>

              <p className="text-gray-400 mb-2">
                <strong>Solution:</strong> Developed a full-stack billing system with GST calculation, stock management, and complete accounts handling including creditor/debtor ledgers, sales & purchase tracking (similar to Tally/FoxPro).
              </p>

              <p className="text-gray-400">
                <strong>Impact:</strong> Reduced manual work, improved financial tracking accuracy, and streamlined daily accounting and billing operations.
              </p>
            </div>

            {/* HOSPITAL SYSTEM */}
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-2">
                Healthcare Management System
              </h3>

              <p className="text-gray-400 mb-2">
                <strong>Problem:</strong> Hospitals faced difficulty managing multiple departments like reception, lab, pharmacy, and billing in a centralized way.
              </p>

              <p className="text-gray-400 mb-2">
                <strong>Solution:</strong> Built a role-based system with modules for receptionist, doctor, lab, pharmacy, billing desk, and admin with controlled workflows.
              </p>

              <p className="text-gray-400">
                <strong>Impact:</strong> Improved coordination between departments, reduced data duplication, and streamlined patient handling.
              </p>
            </div>

            {/* GARMENTS SYSTEM */}
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-2">
                Garments Production Tracking System
              </h3>

              <p className="text-gray-400 mb-2">
                <strong>Problem:</strong> Production units lacked visibility in tracking workflow stages and resource usage.
              </p>

              <p className="text-gray-400 mb-2">
                <strong>Solution:</strong> Developed a system to track production stages, manage resources, and monitor activities in real time.
              </p>

              <p className="text-gray-400">
                <strong>Impact:</strong> Improved production efficiency, better tracking, and reduced operational delays.
              </p>
            </div>

            {/* COURIER ML */}
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-2">
                Parcel Monitoring System (ML)
              </h3>

              <p className="text-gray-400 mb-2">
                <strong>Problem:</strong> Courier offices lacked a way to monitor staff behavior and prevent parcel mishandling.
              </p>

              <p className="text-gray-400 mb-2">
                <strong>Solution:</strong> Built an ML-based system to capture images and detect improper parcel handling behavior.
              </p>

              <p className="text-gray-400">
                <strong>Impact:</strong> Improved accountability, reduced damage risks, and enhanced monitoring capabilities.
              </p>
            </div>

            {/* PRIMS ALGORITHM */}
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-2">
                Shortest Path Algorithm (Prim’s Algorithm)
              </h3>

              <p className="text-gray-400 mb-2">
                <strong>Problem:</strong> Needed an efficient way to find the minimum spanning tree for weighted graphs.
              </p>

              <p className="text-gray-400 mb-2">
                <strong>Solution:</strong> Implemented Prim’s Algorithm in C to compute the shortest path with optimized logic.
              </p>

              <p className="text-gray-400">
                <strong>Impact:</strong> Strengthened understanding of algorithms, problem-solving, and core programming concepts.
              </p>
            </div>

          </div>
        </motion.section>

        {/* PROJECTS */}
        <section className="section projects" id="projects">
          <div className="section-title">
            {/* <span>03</span> */}
            <h2>Projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <div className="project-media">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-copy">
                  <p className="project-label"></p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-stack">{project.stack}</p>
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <motion.section
          className="section contact grid grid-rows-4 gap-6"
          id='contact'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="section-title text-center mb-10">
            <h2>Contact</h2>
          </div>

          {/* Intro */}
          <div className="text-center mb-12">
            <p className="text-xl font-medium">
              Let’s build something impactful together 🚀
            </p>
            <p className="text-gray-400 mt-2">
              Open for opportunities, collaborations, and freelance work.
            </p>
          </div>
          <a className="button mb-12" href="tel:+918489294594">
            Contact Me
          </a>
          {/* Cards */}
          <div className="flex flex-col gap-4 max-w-xl mx-auto text-sm space-y-6 mt-">

            {/* EMAIL */}
            <div>
              <a
                href="mailto:m.naveenkumarmunees@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white whitespace-nowrap overflow-x-auto"
              >
                <FaEnvelope className="text-red-400 text-lg w-5 shrink-0" />
                <span className="w-28 shrink-0">Email</span>
                <span>:</span>
                <span className="font-medium">
                  m.naveenkumarmunees@gmail.com
                </span>
              </a>
            </div>

            {/* WHATSAPP */}
            <div>
              <a
                href="https://wa.me/918489294594"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white whitespace-nowrap overflow-x-auto"
              >
                <FaPhoneAlt className="text-green-500 text-lg w-5 shrink-0" />
                <span className="w-28 shrink-0">WhatsApp</span>
                <span>:</span>
                <span className="font-medium">
                  +91 8489294594
                </span>
              </a>
            </div>
            {/* LINKEDIN */}
            <div>
              <a
                href="https://www.linkedin.com/in/naveenkumar-muneeswaran/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white whitespace-nowrap overflow-x-auto"
              >
                <FaLinkedin className="text-blue-500 text-lg w-5 shrink-0" />
                <span className="w-28 shrink-0">LinkedIn</span>
                <span>:</span>
                <span className="font-medium">
                  View Profile
                </span>
              </a>
            </div>
            {/* GITHUB */}
            <div>
              <a
                href="https://github.com/Naveen131114"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-6 text-gray-300 hover:text-white"
              >
                <FaGithub className="text-gray-300 text-lg w-5 shrink-0" />

                <span className="w-28 shrink-0">GitHub</span>

                <span>:</span>

                <span className="font-medium">
                  View Projects
                </span>
              </a>
            </div>
          </div>
          {/* Footer note */}
          <div className="mt-12 text-center text-gray-500 text-sm">
            ⚡ Available for Full-Time | Freelance | Collaboration
          </div>
        </motion.section>
      </main>
    </div >
  );
}

export default App;
