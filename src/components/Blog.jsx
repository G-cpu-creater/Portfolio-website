import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi'
import './Blog.css'

const Blog = () => {
  // Placeholder blog posts - user will add content later
  const placeholderPosts = [
    {
      id: 1,
      title: 'Understanding EIS for Battery Health Monitoring',
      excerpt: 'Coming soon: A deep dive into how Electrochemical Impedance Spectroscopy can be used for real-time battery diagnostics...',
      date: 'Coming Soon',
      readTime: '5 min read',
      category: 'Battery Tech'
    },
    {
      id: 2,
      title: 'Machine Learning Meets Energy Storage',
      excerpt: 'Coming soon: Exploring how ML algorithms can predict battery degradation and optimize performance...',
      date: 'Coming Soon',
      readTime: '7 min read',
      category: 'AI & ML'
    },
    {
      id: 3,
      title: 'Building ResearchOS: Lessons from the Lab',
      excerpt: 'Coming soon: The journey of building a SaaS product while pursuing research in electrochemistry...',
      date: 'Coming Soon',
      readTime: '6 min read',
      category: 'Product'
    }
  ]

  return (
    <section className="blog section" id="blog">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Blog & Insights
        </motion.h2>

        <motion.p
          className="blog-intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sharing thoughts on batteries, AI, research, and building in public
        </motion.p>

        <div className="blog-grid">
          {placeholderPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 60px var(--shadow)' }}
            >
              <div className="blog-category">{post.category}</div>
              
              <h3 className="blog-title">{post.title}</h3>
              
              <p className="blog-excerpt">{post.excerpt}</p>
              
              <div className="blog-meta">
                <span className="meta-item">
                  <FiCalendar /> {post.date}
                </span>
                <span className="meta-item">
                  <FiClock /> {post.readTime}
                </span>
              </div>

              <motion.button
                className="read-more"
                whileHover={{ x: 5 }}
                disabled
              >
                Read More <FiArrowRight />
              </motion.button>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="blog-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p>More articles coming soon! Stay tuned for insights on battery research, ML applications, and startup building.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
