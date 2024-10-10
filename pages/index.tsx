import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoMdCode, IoMdPhonePortrait, IoMdTrendingUp, IoMdPeople } from 'react-icons/io';

export default function Home() {
  return (
    <div className="bg-light">
      <Head>
        <title>Richard Bentil - React Developer | Driving Business Growth Through Technology</title>
        <meta name="description" content="Richard Bentil - A React Developer with a track record of delivering impactful solutions that drive business growth and enhance user experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
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
                <Link href="#impact" className="nav-link">Impact</Link>
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
                <Image src="/img/avatars/avatar.jpeg" alt="Richard Bentil" className="rounded-circle img-fluid shadow" width={200} height={200} style={{objectFit: 'cover'}} />
              </div>
              <div className="col-md-8">
                <h1 className="display-4 fw-bold mb-3">Driving Business Growth Through Innovative React Solutions</h1>
                <p className="lead mb-4">
                  As a seasoned Developer, I specialize in crafting high-performance web applications that not only meet technical requirements but also drive tangible business outcomes. With a proven track record of increasing user engagement, optimizing performance, and streamlining operations, I bring a unique blend of technical expertise and business acumen to every project.
                </p>
                <Link href="/hire-me" className="btn btn-primary btn-lg me-3">{`Let's`} Collaborate</Link>
                <div className="d-inline-block">
                  <a href="https://github.com/richardbentil" className="text-dark me-3"><FaGithub size={24} /></a>
                  <a href="https://linkedin.com/in/richardbentil" className="text-dark me-3"><FaLinkedin size={24} /></a>
                  <a href="https://twitter.com/richardbentil" className="text-dark"><FaTwitter size={24} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="py-5 bg-white">
          <div className="container">
            <h2 className="text-center mb-5">Driving Measurable Impact</h2>
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <IoMdTrendingUp size={48} className="text-primary mb-3" />
                    <h3 className="card-title h4">20% Faster Development</h3>
                    <p className="card-text">Led a team that reduced project timeline by 20% through efficient coding practices and mentorship.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <IoMdPeople size={48} className="text-primary mb-3" />
                    <h3 className="card-title h4">10% Increase in User Retention</h3>
                    <p className="card-text">Enhanced UI/UX of a web application, resulting in a 10% boost in user retention.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <IoMdCode size={48} className="text-primary mb-3" />
                    <h3 className="card-title h4">25% Faster Load Times</h3>
                    <p className="card-text">Implemented performance optimization strategies, achieving a 25% improvement in page load times.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <IoMdPhonePortrait size={48} className="text-primary mb-3" />
                    <h3 className="card-title h4">15% Increase in Engagement</h3>
                    <p className="card-text">Developed a community social app using React and Next.js, leading to a 15% increase in user engagement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">Impactful Projects</h2>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <img src="/img/nature/digo.png" className="card-img-top" alt="Digopay" />
                  <div className="card-body">
                    <h5 className="card-title">Digopay: Secure E-commerce Platform</h5>
                    <p className="card-text">Developed a secure escrow platform that increased trust in online transactions, reducing fraud and boosting e-commerce adoption.</p>
                    <a href="/case-studies#Digopay: Secure E-commerce Platform" className="btn btn-outline-primary">Explore Impact</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <img src="/img/nature/orbit.png" className="card-img-top" alt="Orbit International Logistics" />
                  <div className="card-body">
                    <h5 className="card-title">Orbit: Streamlined Logistics</h5>
                    <p className="card-text">Created a web app that improved operational efficiency by 30% and enhanced user experience for a major logistics company.</p>
                    <a href="/case-studies#Orbit: Streamlined Logistics" className="btn btn-outline-primary">View Case Study</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <img src="/img/nature/bia.png" className="card-img-top" alt="Bridge in Agric" />
                  <div className="card-body">
                    <h5 className="card-title">Bridge in Agric: Empowering Farmers</h5>
                    <p className="card-text">Developed a platform that increased agricultural productivity by 25% by providing affordable capital and technical support to farmers.</p>
                    <a href="/case-studies#Bridge in Agric: Empowering Farmers" className="btn btn-outline-primary">See Results</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-5 bg-white">
          <div className="container">
            <h2 className="text-center mb-5">Technical Expertise</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title h4 mb-4">Front-end Development</h3>
                    <ul className="list-unstyled">
                      <li className="mb-2">✓ React & Redux</li>
                      <li className="mb-2">✓ Next.js</li>
                      <li className="mb-2">✓ TypeScript</li>
                      <li className="mb-2">✓ Responsive Design</li>
                      <li>✓ Performance Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title h4 mb-4">Back-end & DevOps</h3>
                    <ul className="list-unstyled">
                      <li className="mb-2">✓ Node.js</li>
                      <li className="mb-2">✓ RESTful APIs</li>
                      <li className="mb-2">✓ WebSockets</li>
                      <li className="mb-2">✓ Git & GitHub</li>
                      <li>✓ Vercel Deployment</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title h4 mb-4">Soft Skills</h3>
                    <ul className="list-unstyled">
                      <li className="mb-2">✓ Team Leadership</li>
                      <li className="mb-2">✓ Agile Methodologies</li>
                      <li className="mb-2">✓ Problem Solving</li>
                      <li className="mb-2">✓ Effective Communication</li>
                      <li>✓ Continuous Learning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-5 bg-primary text-white">
          <div className="container text-center">
            <h2 className="mb-4">Ready to Drive Your Business Forward?</h2>
            <p className="lead mb-4">{`Let's`} collaborate on creating impactful solutions that boost your bottom line and user satisfaction.</p>
            <a href="mailto:richardebo.bentil@gmail.com" className="btn btn-light btn-lg">Get in Touch</a>
          </div>
        </section>
      </main>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Richard Bentil. Transforming businesses through innovative solutions.</p>
        </div>
      </footer>
    </div>
  );
}