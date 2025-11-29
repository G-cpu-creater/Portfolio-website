import { motion } from 'framer-motion'
import { FiLayers, FiBrain, FiTrendingUp, FiUsers, FiArrowRight } from 'react-icons/fi'
import './ResearchOS.css'

const ResearchOS = () => {
  const features = [
    {
      icon: <FiLayers />,
      title: 'Unified Workspace',
      description: 'All research tools in one intelligent environment - data, papers, analysis, and notes'
    },
    {
      icon: <FiBrain />,
      title: 'Context-Aware AI',
      description: 'AI that understands your research context and provides meaningful insights'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Smart Analytics',
      description: 'Automated analysis, interpretation, and visualization of research data'
    },
    {
      icon: <FiUsers />,
      title: 'Collaborative',
      description: 'Built for individual researchers, labs, and research institutions'
    }
  ]

  return (
    <section className="researchos section" id="researchos">
      <div className="container">
        <motion.div
          className="researchos-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Founder's Project</h2>
          <motion.div
            className="project-badge"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Early MVP Stage
          </motion.div>
        </motion.div>

        <div className="researchos-content">
          <motion.div
            className="researchos-main"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="logo-section">
              <h3 className="researchos-logo">
                <span className="logo-research">Research</span>
                <span className="logo-os">OS</span>
              </h3>
              <p className="tagline">An AI-Native Operating System for Scientific Research</p>
            </div>

            <div className="problem-section">
              <h4>The Problem</h4>
              <p>
                Researchers aren't struggling because their experiments are too complex—they're 
                struggling because their workflow is broken and scattered. A typical PhD student 
                switches between Excel, Zotero, Python, ChatGPT, Notion, and a jungle of folders.
              </p>
              <div className="stat-highlight">
                <span className="stat-number">30-40%</span>
                <span className="stat-text">of productive time wasted on stitching information together</span>
              </div>
            </div>

            <div className="solution-section">
              <h4>The Solution</h4>
              <p>
                ResearchOS is a unified, intelligent workspace where the entire research lifecycle 
                lives in one place. But it's more than just "putting tools together"—the core innovation 
                is <strong>context-aware AI</strong>.
              </p>
              <p>
                Everything you do feeds into a project-level AI system that actually understands 
                your research. It explains results, cross-references papers, suggests next steps, 
                highlights inconsistencies, and helps interpret your data.
              </p>
            </div>

            <div className="vision-section">
              <h4>The Vision</h4>
              <p>
                To become the operating system that accelerates scientific discovery. A world where 
                researchers don't waste time juggling tools, where knowledge is connected, where 
                insights surface faster, and where AI acts as a genuine research partner.
              </p>
            </div>

            <motion.a
              href="https://elctr-dc.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="researchos-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore ResearchOS
              <FiArrowRight />
            </motion.a>
          </motion.div>

          <motion.div
            className="features-grid"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h5>{feature.title}</h5>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="moat-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4>Our Moat: Deep Project Memory</h4>
          <p>
            Unlike general AI tools that forget context, ResearchOS builds a persistent knowledge 
            graph of each project. The more you use it, the smarter it becomes. Once your entire 
            research brain is inside ResearchOS, switching to another tool becomes nearly impossible.
          </p>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="researchos-bg">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>
    </section>
  )
}

export default ResearchOS
