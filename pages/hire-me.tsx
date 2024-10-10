import Head from "next/head";
import Link from "next/link";
import { FaCode, FaMobile, FaLock, FaRocket, FaEnvelope, FaLinkedin, FaGithub, FaUserTie, FaChevronLeft } from 'react-icons/fa';

export default function HireMe() {
  return (
    <div className="bg-light">
      <Head>
        <title>Hire Richard Bentil - Full Stack Developer</title>
        <meta name="description" content="Hire Richard Bentil for your next web or mobile development project. Expertise in front-end, back-end, and security." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link href="/" className="navbar-brand fw-bold">Richard Bentil</Link>
          <Link href="/" className="btn btn-outline-primary">
            <FaChevronLeft className="me-2" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      <main>
        <section className="py-5 bg-primary text-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="display-4 fw-bold mb-3">{`Let's`} Build Something Amazing Together</h1>
                <p className="lead mb-4">{`I'm`} available for freelance projects and full-time opportunities. Get in touch to discuss how I can help bring your ideas to life.</p>
                <Link href="#contact-form" className="btn btn-light btn-lg">Get Started</Link>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <img src="/placeholder.svg?height=400&width=600" alt="Richard Bentil - Full Stack Developer" className="img-fluid rounded shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">Services I Offer</h2>
            <div className="row g-4">
              {[
                { icon: FaCode, title: "Web Development", description: "Custom websites and web applications built with modern technologies and best practices." },
                { icon: FaMobile, title: "Mobile Development", description: "Cross-platform mobile apps that provide a seamless experience on both iOS and Android devices." },
                { icon: FaRocket, title: "Performance Optimization", description: "Boost your website's speed and efficiency for better user experience and SEO rankings." },
                { icon: FaLock, title: "Security Audits", description: "Comprehensive security assessments to identify and mitigate potential vulnerabilities in your applications." }
              ].map((service, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm hover-elevate">
                    <div className="card-body text-center">
                      <service.icon size={48} className="text-primary mb-3" />
                      <h3 className="card-title h4">{service.title}</h3>
                      <p className="card-text">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Why Choose Me?</h2>
            <div className="row g-4">
              {[
                { icon: FaCode, title: "Technical Expertise", description: "Proficient in a wide range of technologies, ensuring the best tools are used for your project." },
                { icon: FaRocket, title: "Efficient Delivery", description: "Committed to delivering high-quality work within agreed timelines and budgets." },
                { icon: FaMobile, title: "Responsive Design", description: "Creating seamless experiences across all devices and screen sizes." },
                { icon: FaUserTie, title: "Professional Approach", description: "Clear communication, regular updates, and a focus on meeting your business objectives." }
              ].map((reason, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-primary text-white p-3 rounded-circle me-3">
                          <reason.icon size={24} />
                        </div>
                        <h3 className="h5 mb-0">{reason.title}</h3>
                      </div>
                      <p>{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact-form" className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">Get In Touch</h2>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card border-0 shadow">
                  <div className="card-body p-5">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="project-type" className="form-label">Project Type</label>
                        <select className="form-select" id="project-type" required>
                          <option value="">Select a project type</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-app">Mobile App</option>
                          <option value="security-audit">Security Audit</option>
                          <option value="performance-optimization">Performance Optimization</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">Project Details</label>
                        <textarea className="form-control" id="message" rows={5} required></textarea>
                      </div>
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0">&copy; {new Date().getFullYear()} Richard Bentil. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a href="mailto:richard@example.com" className="text-white me-3" aria-label="Email">
                <FaEnvelope size={20} />
              </a>
              <a href="https://linkedin.com/in/richardbentil" target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/richardbentil" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}