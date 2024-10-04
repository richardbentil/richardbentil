import Head from "next/head";
import Link from "next/link";
import { FaCode, FaMobile, FaLock, FaRocket } from 'react-icons/fa';

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
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/#projects" className="nav-link">Projects</Link>
              </li>
              <li className="nav-item">
                <Link href="/#skills" className="nav-link">Skills</Link>
              </li>
              <li className="nav-item">
                <Link href="#contact-form" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section className="py-5 bg-primary text-white">
          <div className="container text-center">
            <h1 className="display-4 fw-bold mb-3">{`Let's`} Build Something Amazing Together</h1>
            <p className="lead mb-4">{`I'm`} available for freelance projects and full-time opportunities. Get in touch to discuss how I can help bring your ideas to life.</p>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">Services I Offer</h2>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <FaCode size={48} className="text-primary mb-3" />
                    <h3 className="card-title h4">Web Development</h3>
                    <p className="card-text">Custom websites and web applications built with modern technologies and best practices.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <FaMobile size={48} className="text-primary mb-3" />
                    <h3 className="card-title h4">Mobile Development</h3>
                    <p className="card-text">Cross-platform mobile apps that provide a seamless experience on both iOS and Android devices.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <FaRocket size={48} className="text-primary mb-3" />
                    <h3 className="card-title h4">Performance Optimization</h3>
                    <p className="card-text">Boost your {`website's`} speed and efficiency for better user experience and SEO rankings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Why Choose Me?</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white p-3 rounded-circle me-3">
                    <FaCode size={24} />
                  </div>
                  <h3 className="h5 mb-0">Technical Expertise</h3>
                </div>
                <p>Proficient in a wide range of technologies, ensuring the best tools are used for your project.</p>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white p-3 rounded-circle me-3">
                    <FaRocket size={24} />
                  </div>
                  <h3 className="h5 mb-0">Efficient Delivery</h3>
                </div>
                <p>Committed to delivering high-quality work within agreed timelines and budgets.</p>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white p-3 rounded-circle me-3">
                    <FaMobile size={24} />
                  </div>
                  <h3 className="h5 mb-0">Responsive Design</h3>
                </div>
                <p>Creating seamless experiences across all devices and screen sizes.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-form" className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">Get In Touch</h2>
            <div className="row justify-content-center">
              <div className="col-md-8">
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
        </section>
      </main>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Richard Bentil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}