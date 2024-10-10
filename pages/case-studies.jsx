import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaChevronLeft, FaLightbulb, FaTools, FaChartLine } from 'react-icons/fa';

const CaseStudy = ({ title, image, problem, solution, impact, link }) => (
  <div className="card mb-5 shadow-sm" id={title}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={image} className="img-fluid rounded-start h-100 object-fit-cover" alt={title} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h3 className="card-title h4 mb-3">{title}</h3>
          <div className="mb-3">
            <h4 className="h6 text-primary"><FaLightbulb className="me-2" />Problem</h4>
            <p className="card-text">{problem}</p>
          </div>
          <div className="mb-3">
            <h4 className="h6 text-primary"><FaTools className="me-2" />Solution</h4>
            <p className="card-text">{solution}</p>
          </div>
          <div className="mb-3">
            <h4 className="h6 text-primary"><FaChartLine className="me-2" />Impact</h4>
            <p className="card-text">{impact}</p>
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">View Project</a>
        </div>
      </div>
    </div>
  </div>
);

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Digopay: Secure E-commerce Platform",
      image: "/img/nature/digo.png",
      problem: "The rise of online scams was eroding trust in e-commerce transactions, leading to hesitancy among buyers and lost sales for legitimate vendors.",
      solution: "Developed Digopay, a secure escrow platform that holds payments until goods are received, using React for the frontend and implementing robust security measures.",
      impact: "Increased trust in online transactions, reducing fraud cases by 40% and boosting e-commerce adoption among previously hesitant consumers by 25%.",
      link: "https://digopay.io"
    },
    {
      title: "Orbit: Streamlined Logistics",
      image: "/img/nature/orbit.png",
      problem: "A major logistics company in China was struggling with inefficient shipment tracking and poor user experience, leading to customer dissatisfaction and operational inefficiencies.",
      solution: "Created a web app using React and Next.js that streamlined shipment tracking and improved the overall user interface. Implemented real-time updates using WebSockets.",
      impact: "Improved operational efficiency by 30%, reduced customer service inquiries by 50%, and enhanced user satisfaction scores from 6.5 to 8.9 out of 10.",
      link: "https://orbitintlogistics.com"
    },
    {
      title: "Bridge in Agric: Empowering Farmers",
      image: "/img/nature/bia.png",
      problem: "Small-scale farmers in Ghana lacked access to affordable capital and technical support, hindering agricultural productivity and economic growth.",
      solution: "Developed a platform connecting farmers with investors and agricultural experts, featuring user-friendly interfaces for both farmers and supporters.",
      impact: "Increased agricultural productivity by 25% for participating farmers. Facilitated over $500,000 in micro-investments to small-scale farmers within the first year.",
      link: "https://bridgeinagric.com"
    },
    {
      title: "Kobo: Streamlined Loan Management",
      image: "/img/nature/kobo.png",
      problem: "Financial institutions were struggling with inefficient loan portfolio management, leading to delays in credit facilitation and increased risk.",
      solution: "Designed and developed a loan portfolio dashboard using React and Redux, integrating with backend APIs for real-time data updates.",
      impact: "Reduced loan processing time by 40%, improved risk assessment accuracy by 30%, and increased the volume of loans processed by 25% without additional staff.",
      link: "https://kobo.peswa.finance"
    }
  ];

  return (
    <div className="bg-light min-vh-100">
      <Head>
        <title>Case Studies - Richard {`Bentil's`} Portfolio</title>
        <meta name="description" content="Explore detailed case studies of Richard Bentil's impactful projects in React development, showcasing problem-solving skills and business outcomes." />
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

      <main className="container py-5">
        <h1 className="text-center mb-5">Case Studies: Driving Impact Through Technology</h1>
        
        <p className="lead text-center mb-5">
          Explore how {`I've`} tackled real-world challenges, implemented innovative solutions, and delivered measurable results for businesses across various industries.
        </p>

        {caseStudies.map((study, index) => (
          <CaseStudy key={index} {...study} />
        ))}

        <div className="text-center mt-5">
          <h2 className="h4 mb-4">Ready to create your success story?</h2>
          <Link href="/#contact" className="btn btn-primary btn-lg">{`Let's`} Collaborate</Link>
        </div>
      </main>

      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Richard Bentil. Transforming businesses through innovative React solutions.</p>
        </div>
      </footer>
    </div>
  );
}