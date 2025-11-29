import { motion } from 'framer-motion'
import { FiCpu, FiBattery, FiTrendingUp } from 'react-icons/fi'
import './About.css'

const About = () => {
  const interests = [
    {
      icon: <FiBattery />,
      title: 'Electrochemistry',
      description: 'Computational electrochemistry using COMSOL Multiphysics for battery modeling and simulation'
    },
    {
      icon: <FiCpu />,
      title: 'Machine Learning',
      description: 'Data-driven models for battery state-of-health prediction and performance optimization'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Energy Storage',
      description: 'Advanced research in lithium-ion and lithium-sulfur battery technologies'
    }
  ]

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Hey there! I'm a final-year B.Tech student in Chemical and Electrochemical Engineering 
              at CSIR-CECRI, Karaikudi. I'm deeply fascinated by the intersection of electrochemistry, 
              AI, and computational modeling.
            </p>
            <p>
              My research focuses on using machine learning and numerical methods to enhance the design, 
              optimization, and performance prediction of energy storage devices. Whether it's developing 
              hybrid electrochemical models or working with EIS data, I love diving deep into how we can 
              make batteries smarter and more efficient.
            </p>
            <p>
              When I'm not in the lab synthesizing MOFs or testing battery cells, you'll probably find me 
              coding Python models, exploring new AI techniques, or thinking about how to bridge the gap 
              between research and real-world applications.
            </p>
          </motion.div>

          <div className="interests-grid">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="interest-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="interest-icon">{interest.icon}</div>
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="subsection-title">Education</h3>
          <div className="education-card">
            <div className="edu-header">
              <h4>Bachelor of Technology in Chemical and Electrochemical Engineering</h4>
              <span className="year">2022 - 2026</span>
            </div>
            <p className="institution">CSIR - Central Electrochemical Research Institute</p>
            <p className="cgpa">CGPA: 8.3/10.0</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
