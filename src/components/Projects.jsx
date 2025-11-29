import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiGitBranch, FiDatabase, FiCpu, FiZap } from 'react-icons/fi'
import './Projects.css'

const Projects = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const characters = 'Li₂Sₓ•MOF•EIS•CV•SOH•PyBaMM•COMSOL•ML•AI•NiCo•0123456789'
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops = []

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height
    }

    function draw() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#00ff88'
      ctx.font = fontSize + 'px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length))
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)
    return () => clearInterval(interval)
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Machine Learning-Driven Health Prognosis of Li-ion Batteries',
      period: 'Sep 2025 - Current',
      icon: <FiCpu />,
      workflow: [
        'EIS Data Collection',
        'Feature Extraction',
        'ML Model Training',
        'SOH Prediction',
        'Real-time Diagnostics'
      ],
      technologies: ['Python', 'ML', 'EIS', 'Data Analysis'],
      color: '#00d4ff'
    },
    {
      id: 2,
      title: 'Hybrid Electrochemical Battery Modelling Using PyBaMM',
      period: 'Jul 2025 - Aug 2025',
      icon: <FiDatabase />,
      workflow: [
        'Model Selection',
        'PyBaMM Implementation',
        'ML Integration',
        'Parameter Optimization',
        'Degradation Analysis'
      ],
      technologies: ['PyBaMM', 'Python', 'ML', 'MATLAB'],
      color: '#00ff88'
    },
    {
      id: 3,
      title: 'Propyl Viologen-Based Catalysis for Anode-Free Li-S Batteries',
      period: 'Jan 2025 - June 2025',
      icon: <FiZap />,
      workflow: [
        'Material Synthesis',
        'Electrolyte Preparation',
        'Cell Assembly',
        'Electrochemical Testing',
        'Performance Analysis'
      ],
      technologies: ['Synthesis', 'CV', 'EIS', 'Galvanostatic'],
      color: '#a855f7'
    },
    {
      id: 4,
      title: 'Nickel-Cobalt Nanocage MOFs for Li-S Batteries',
      period: 'Jan 2025 - June 2025',
      icon: <FiGitBranch />,
      workflow: [
        'MOF Synthesis',
        'Characterization (XRD, SEM, TEM)',
        'Cathode Fabrication',
        'Battery Testing',
        'Cycle Life Analysis'
      ],
      technologies: ['MOFs', 'Hydrothermal', 'FTIR', 'Raman'],
      color: '#00d4ff'
    },
    {
      id: 5,
      title: 'Data-driven Methods for Li-Ion Battery Health Assessment',
      period: 'Jul 2024 - Aug 2024',
      icon: <FiDatabase />,
      workflow: [
        'Literature Review',
        'Data Collection',
        'Method Comparison',
        'Model Evaluation',
        'Report Generation'
      ],
      technologies: ['Data Science', 'EIS', 'Python', 'Review'],
      color: '#00ff88'
    }
  ]

  const [activeProject, setActiveProject] = useState(null)

  return (
    <section className="projects section" id="projects">
      <canvas ref={canvasRef} className="code-rain" />
      
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Research Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${activeProject === project.id ? 'active' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: `0 20px 60px ${project.color}40`
              }}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
              style={{ '--project-color': project.color }}
            >
              <div className="project-header">
                <div className="project-icon" style={{ color: project.color }}>
                  {project.icon}
                </div>
                <div className="project-meta">
                  <h3 className="project-title glitch" data-text={project.title}>
                    {project.title}
                  </h3>
                  <span className="project-period">{project.period}</span>
                </div>
              </div>

              <div className="workflow-section">
                <h4>Research Workflow</h4>
                <div className="workflow-steps">
                  {project.workflow.map((step, idx) => (
                    <motion.div
                      key={idx}
                      className="workflow-step"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="step-number" style={{ borderColor: project.color }}>
                        {idx + 1}
                      </div>
                      <span>{step}</span>
                      {idx < project.workflow.length - 1 && (
                        <div className="step-arrow" style={{ color: project.color }}>→</div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag" style={{ borderColor: project.color }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Animated graph visualization */}
              <div className="graph-visualization">
                <svg viewBox="0 0 200 100" className="performance-graph">
                  <motion.path
                    d="M 10 80 Q 60 20, 100 40 T 190 20"
                    stroke={project.color}
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  {[20, 40, 60, 80].map((x, i) => (
                    <motion.circle
                      key={i}
                      cx={x * 2.5}
                      cy={80 - i * 15}
                      r="3"
                      fill={project.color}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: i * 0.2 }}
                    />
                  ))}
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
