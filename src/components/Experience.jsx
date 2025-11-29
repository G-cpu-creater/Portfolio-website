import { motion } from 'framer-motion'
import { FiAward, FiCode, FiDatabase, FiCpu } from 'react-icons/fi'
import './Experience.css'

const Experience = () => {
  const timeline = [
    {
      period: 'Sep 2025 - Current',
      title: 'Machine Learning-Driven Battery Health Prognosis',
      organization: 'CSIR-CECRI',
      type: 'research',
      description: 'Developing ML models for SOH prediction using EIS data',
      guide: 'Dr. Sindhuja R'
    },
    {
      period: 'Jul 2025 - Aug 2025',
      title: 'Hybrid Electrochemical Battery Modelling',
      organization: 'IIT Madras',
      type: 'internship',
      description: 'Developed robust hybrid models using PyBaMM coupled with ML methods',
      guide: 'Dr. Atriya Biswas'
    },
    {
      period: 'Jan 2025 - June 2025',
      title: 'Advanced Li-S Battery Research',
      organization: 'CSIR-CECRI',
      type: 'research',
      description: 'Working on propyl viologen catalysis and MOF-based cathodes',
      guide: 'Dr. Arul Manuel Stephan'
    },
    {
      period: 'Jul 2024 - Aug 2024',
      title: 'Data-Driven Battery Health Assessment',
      organization: 'CSIR-CECRI',
      type: 'internship',
      description: 'Comprehensive review of ML methods for battery diagnostics using EIS',
      guide: 'Dr. Sindhuja R'
    }
  ]

  const skills = {
    programming: ['Python', 'MATLAB', 'SQL', 'JavaScript'],
    ml: ['Machine Learning', 'Data Analysis', 'Predictive Modeling'],
    software: ['COMSOL Multiphysics', 'PyBaMM', 'OriginPro', 'PS-Trace'],
    lab: ['EIS', 'CV', 'SEM/TEM', 'XRD', 'FTIR', 'Raman'],
    libraries: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
  }

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience & Skills
        </motion.h2>

        <div className="experience-content">
          {/* Timeline */}
          <motion.div
            className="timeline-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="subsection-title">Research Timeline</h3>
            <div className="timeline">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`timeline-item ${item.type}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{item.period}</span>
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-org">{item.organization}</p>
                    <p className="timeline-desc">{item.description}</p>
                    {item.guide && <p className="timeline-guide">Guide: {item.guide}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="skills-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="subsection-title">Technical Skills</h3>
            
            <div className="skill-category">
              <div className="category-header">
                <FiCode />
                <h4>Programming</h4>
              </div>
              <div className="skill-tags">
                {skills.programming.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <FiCpu />
                <h4>AI & Machine Learning</h4>
              </div>
              <div className="skill-tags">
                {skills.ml.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <FiDatabase />
                <h4>Software & Tools</h4>
              </div>
              <div className="skill-tags">
                {skills.software.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <FiAward />
                <h4>Lab Techniques</h4>
              </div>
              <div className="skill-tags">
                {skills.lab.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          className="achievements-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="subsection-title">Achievements & Activities</h3>
          <div className="achievements-grid">
            <div className="achievement-card">
              <FiAward className="achievement-icon" />
              <p>Acting President - Intersect (National Technical Symposium)</p>
            </div>
            <div className="achievement-card">
              <FiAward className="achievement-icon" />
              <p>AI & Data Science Certification - DRISHTI CPS, IIT Indore & Microsoft</p>
            </div>
            <div className="achievement-card">
              <FiAward className="achievement-icon" />
              <p>Two-time Sportsperson of the Year (College)</p>
            </div>
            <div className="achievement-card">
              <FiAward className="achievement-icon" />
              <p>State-level Table Tennis Player</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
