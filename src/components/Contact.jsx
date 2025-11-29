import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, just open email client
    const subject = encodeURIComponent(`Message from ${formData.name}`)
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.email}`)
    window.location.href = `mailto:gouthamg24p07@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's Connect!</h3>
            <p>
              I'm always open to discussing research collaborations, new projects, 
              or opportunities in battery technology and AI. Feel free to reach out!
            </p>

            <div className="contact-methods">
              <motion.a
                href="mailto:gouthamg24p07@gmail.com"
                className="contact-method"
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="method-icon">
                  <FiMail />
                </div>
                <div className="method-info">
                  <h4>Email</h4>
                  <p>gouthamg24p07@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/gaushik-goutham"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="method-icon">
                  <FiLinkedin />
                </div>
                <div className="method-info">
                  <h4>LinkedIn</h4>
                  <p>gaushik-goutham</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/G-cpu-creater"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="method-icon">
                  <FiGithub />
                </div>
                <div className="method-info">
                  <h4>GitHub</h4>
                  <p>G-cpu-creater</p>
                </div>
              </motion.a>
            </div>

            <div className="location-info">
              <h4>Location</h4>
              <p>CSIR - Central Electrochemical Research Institute</p>
              <p>Karaikudi, India</p>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Send a Message</h3>
            
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project or collaboration idea..."
              />
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
              <FiSend />
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="footer-content">
          <p>&copy; 2025 Goutham Vishnuvardhanan. All rights reserved.</p>
          <p className="footer-tagline">
            Building the future of energy storage, one battery at a time ⚡
          </p>
        </div>
      </motion.footer>
    </section>
  )
}

export default Contact
