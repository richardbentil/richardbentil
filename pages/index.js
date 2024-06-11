import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Richard Bentil</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />{" "}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossOrigin="anonymous"></link>
        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossorigin="anonymous"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
      </Head>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            Richard Bentil
          </a>
          <button
            class="navbar-toggler d-lg-none border-0"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="my-5">
        <section className="py-5 bg-warning" id="about">
          <div className="jumbotron text-center">
            <div className="container">
              <div className="col-md-5 mx-auto">
                <img
                  src="avatar.jpg"
                  className="rounded-circle"
                  width="120"
                  alt="profile_photo"
                />
                <h5 className="my-3">Hi, I'm Richard</h5>
                <h1 className="my-3">I'm a full stack web developer</h1>
                <h5 className="fw-normal my-4">
                  I'm currently working as a freelancer and always looking for
                  great companies and individuals to work with.
                </h5>
                <p className="my-4">
                  <a
                    className="btn btn-dark btn-lg"
                    href="#contact"
                    role="button">
                    Connect with me
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5" id="experience">
          <div className="container">
            <h2 className="col-md-8">Experience</h2>
            <div className="row my-3">
              <div className="col-md-6 mb-3 pe-md-5">
                <div className="d-flex justify-content-between">
                  <h4>UX Engineer</h4>
                  <p>Mar 2021 - June 21</p>
                </div>
                <div className="mb-5">
                  <p>
                    This position required me to work on several projects that
                    needed to transform UX Designs into functional web pages.
                    Some of the projects ranged from simple to complex ones
                    which needed to yield much user retention on the various
                    sites. I worked with a colleague on four projects. One for
                    the Government of Ghana, One for the New Patriotic Party,
                    and two others for the companies in house projects.
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <h4>React developer</h4>
                  <p>Dec 2020 - Feb 2021</p>
                </div>
                <div>
                  <p>
                    I worked on a community project the company was building for
                    the city Takoradi. My main work was to help with the
                    application development using react. I also worked on
                    optimizing and reducing the bundle size of the app to be
                    served fast on a users browser.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mb-3 ps-md-5">
                <div className="mb-4 mb-md-5">
                  <h6>HTML</h6>
                  <div class="progress">
                    <div
                      class="progress-bar bg-dark"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100">
                      85%
                    </div>
                  </div>
                </div>
                <div className="mb-4 mb-md-5">
                  <h6>CSS</h6>
                  <div class="progress">
                    <div
                      class="progress-bar bg-dark"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100">
                      85%
                    </div>
                  </div>
                </div>

                <div className="mb-4 mb-md-5">
                  <h6>Javascript</h6>
                  <div class="progress">
                    <div
                      class="progress-bar bg-dark"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100">
                      75%
                    </div>
                  </div>
                </div>
                <div className="mb-4 mb-md-5">
                  <h6>NODEJS</h6>
                  <div class="progress">
                    <div
                      class="progress-bar bg-dark"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100">
                      75%
                    </div>
                  </div>
                </div>

                <div className="mb-4 mb-md-5">
                  <h6>React</h6>
                  <div class="progress">
                    <div
                      class="progress-bar bg-dark"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100">
                      85%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 bg-warning bg-opacity-25" id="projects">
          <div className="container">
            <h2 className="col-md-10 mx-auto">Projects</h2>
            <div className="my-3 col-md-10 mx-auto">
              <h4>MyGHQr</h4>
              <p>
                <Link href="https://myghqr.com">
                  <a className="">
                    <u>View project</u>
                  </a>
                </Link>
              </p>
              <p>
                I was part of the team that developed Ghana’s interbank payment
                system, Myghqr, that allows Ghanaian’s transfer money to any
                other person’s bank account using a generated QR code. I
                transformed the UX designs of the app into functional web pages.
              </p>
            </div>
            <div className="my-3 col-md-10 mx-auto">
              <h4>DMB2024</h4>
              <p>
                <Link href="https://dmb2024.com">
                  <a className="">
                    <u>View project</u>
                  </a>
                </Link>
              </p>
              <p>
                A web application for the sitting government (NPP) to help
                gather data for the next election. I transformed the UX designs
                of the app into functional web pages by transforming them into
                react components.
              </p>
            </div>
            <div className="my-3 col-md-10 mx-auto">
              <h4>Palo Foods</h4>
              <p className="d-flex justify-content-start">
                <Link href="https://palofoods.com/">
                  <a className="">
                    <u>View project</u>
                  </a>
                </Link>
                <Link href="https://github.com/Palo-Foods/website">
                  <a className="ms-3">
                    <u>Github</u>
                  </a>
                </Link>
              </p>
              <p>
                A food delivery company offering delivery services for
                businesses and their customers. Developed and built the front
                and backend using React, Redux, Typescript, Nextjs, JavaScript,
                HTML, CSS(SCSS), REST APIs, Google Maps API, Firebase, MongoDB,
                Redis, Paystack Payment Gateway
              </p>
            </div>
            <div className="my-3 col-md-10 mx-auto">
              <h4>Palo Fleet</h4>
              <p className="d-flex justify-content-start">
                <Link href="https://fleet.palofoods.com/">
                  <a className="">
                    <u>View project</u>
                  </a>
                </Link>
                <Link href="https://github.com/Palo-Foods/fleets">
                  <a className="ms-3">
                    <u>Github</u>
                  </a>
                </Link>
              </p>
              <p>
                A fleet management software for courier and fleet management
                companies offering them a service to schedule delivery of items
                for the riders and also monitor their location using google
                maps. Developed and built the front and backend using React,
                Redux, Typescript, Nextjs, JavaScript, HTML, CSS(SCSS), REST
                APIs, Google Maps API, Firebase, MongoDB, Redis.
              </p>
            </div>
            <div className="my-3 col-md-10 mx-auto">
              <h4>Hospital Consultation App</h4>
              <p className="d-flex justify-content-start">
                <Link href="https://consultationapp.vercel.app/">
                  <a className="">
                    <u>View project</u>
                  </a>
                </Link>
                <Link href="https://github.com/richardbentil/consultationapp">
                  <a className="ms-3">
                    <u>Github</u>
                  </a>
                </Link>
              </p>
              <p>
                A web application for the sitting government (NPP) to help
                gather data for the next election. I transformed the UX designs
                of the app into functional web pages by transforming them into
                react components.
              </p>
            </div>
          </div>
        </section>
        <section className="pt-5 pb-0 mb-3" id="contact">
          <div className="container">
            <h2 className="">Contact</h2>
            <div className="row">
              <div className="col-md-8 mb-4">
                <div className="row">
                  <div class="form-group col-md-6 mb-4">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      aria-describedby="helpId"
                      placeholder="Name"
                    />
                  </div>
                  <div class="form-group col-md-6 mb-4">
                    <input
                      type="text"
                      class="form-control"
                      name="email"
                      id="email"
                      aria-describedby="helpId"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group col-md-12 mb-4">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      aria-describedby="helpId"
                      placeholder="Subject"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <textarea class="form-control" name="" id="" rows="5">
                      Message
                    </textarea>
                  </div>
                  <div class="form-group text-end text-md-start mb-5">
                    <button type="submit" class="btn btn-dark px-5">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="mb-4">
                  <p className="mb-0">
                    <span class="material-icons">location_on</span>
                  </p>
                  <p>Accra, Ghana</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0">
                    <span class="material-icons">phone</span>
                  </p>
                  <p>+233 508608718</p>
                </div>
                <div className="mb-3">
                  <p className="mb-0">
                    <span class="material-icons">email</span>
                  </p>
                  <p>richardebo.bentil@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <section className="py-5 text-center bg-dark text-white" id="message">
          <h4>Want an outstanding project?</h4>
          <a href="#contact">Just send me a message</a>
        </section>
      </footer>
    </>
  );
}