import Head from "next/head";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoMdCode, IoMdPhonePortrait, IoMdLock } from 'react-icons/io';

export default function Home() {
  return (
    <div className="bg-light">
      <Head>
        <title>Richard Bentil - Full Stack Developer</title>
        <meta name="description" content="Richard Bentil's online portfolio - Full Stack Developer specializing in front-end development" />
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
                <Link href="#about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link href="#projects" className="nav-link">Projects</Link>
              </li>
              <li className="nav-item">
                <Link href="#skills" className="nav-link">Skills</Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section id="about" className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 text-center mb-4 mb-md-0">
                <img src="/img/avatars/avatar.jpeg" alt="Richard Bentil" className="rounded-circle img-fluid shadow" style={{width: '200px', height: '200px', objectFit: 'cover'}} />
              </div>
              <div className="col-md-8">
                <h1 className="display-4 fw-bold mb-3">Hello, {`I'm`} Richard Bentil</h1>
                <p className="lead mb-4">{`I'm`} a full-stack developer with a passion for creating pixel-perfect, minimal, and user-friendly interfaces. My expertise lies in front-end development, but {`I'm`} comfortable working across the entire stack.</p>
                <Link href="/hire-me" className="btn btn-primary btn-lg me-3">Hire Me</Link>
                <div className="d-inline-block">
                  <a href="https://github.com/richardbentil" target="_blank" rel="noopener noreferrer" className="text-dark me-3"><FaGithub size={24} /></a>
                  <a href="https://linkedin.com/in/richardbentil" target="_blank" rel="noopener noreferrer" className="text-dark me-3"><FaLinkedin size={24} /></a>
                  <a href="https://twitter.com/richardbentil" target="_blank" rel="noopener noreferrer" className="text-dark"><FaTwitter size={24} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-5 bg-white">
          <div className="container">
            <h2 className="text-center mb-5">Featured Projects</h2>
            <div className="row g-4">
            <div className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img src="/img/nature/orbit.png" className="card-img-top" alt="orbit" />
                  <div className="card-body">
                    <h5 className="card-title">Orbit international logistics</h5>
                    <p className="card-text">An Inventory mamangement and shipping system.</p>
                    <a href="https://orbitintlogistics.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">View Project</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img src="/img/nature/digo.png" className="card-img-top" alt="Digopay" />
                  <div className="card-body">
                    <h5 className="card-title">Digopay</h5>
                    <p className="card-text">A platform to assist online vendors in making secure sales, developed in response to the growing number of online scams.</p>
                    <a href="https://digopay.io" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">View Project</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img src="/img/nature/bia.png" className="card-img-top" alt="Bridge in Agric" />
                  <div className="card-body">
                    <h5 className="card-title">Bridge in Agric</h5>
                    <p className="card-text">An agricultural platform connecting farmers, suppliers, and buyers to streamline the agricultural supply chain.</p>
                    <a href="https://bridgeinagric.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">View Project</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img src="/img/nature/kobo.png" className="card-img-top" alt="Kobo" />
                  <div className="card-body">
                    <h5 className="card-title">Kobo</h5>
                    <p className="card-text">A financial management tool helping users track expenses, set budgets, and achieve their financial goals.</p>
                    <a href="https://kobo.peswa.finance" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">View Project</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img src="/img/nature/myghqr.png" className="card-img-top" alt="Kobo" />
                  <div className="card-body">
                    <h5 className="card-title">Mygh QR</h5>
                    <p className="card-text">GHQR is Ghana’s national Quick Response (QR) camera scan & pay service available on smartphone applications of all licensed commercial banks and financial technology providers</p>
                    <a href="https://myghqr.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">View Project</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">Special Skills</h2>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <IoMdCode size={48} className="text-primary mb-3" />
                    <h3 className="card-title h4">Web Development</h3>
                    <p className="card-text">Expertise in HTML, CSS, JavaScript, and modern frameworks like React and Next.js. Skilled in creating responsive and accessible web applications.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <IoMdPhonePortrait size={48} className="text-primary mb-3" />
                    <h3 className="card-title h4">Mobile Development</h3>
                    <p className="card-text">Proficient in developing cross-platform mobile applications using React Native and Flutter, ensuring a seamless user experience across devices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-5 bg-primary text-white">
          <div className="container text-center">
            <h2 className="mb-4">{`Let's`} Work Together</h2>
            <p className="lead mb-4">{`I'm`} always open to new opportunities and exciting projects.</p>
            <Link href="/hire-me" className="btn btn-light btn-lg">Get in Touch</Link>
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