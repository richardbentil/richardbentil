import Layout from "@/components/layout";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Richard Bentil</title>
        <meta name="description" content="Richard Bentil Oline portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="page lanidng-page">
        <section className="portfolio-block block-intro">
          <div className="container">
            <div
              className="avatar"
              style={{ backgroundImage: `url('/img/avatars/avatar.jpg')` }}
            ></div>
            <div className="about-me">
              <p>
                Hello! I am Richard Bentil. I work as a full-stack
                developer(front end heavy). I have passion for pixel perfect,
                minimal and easy to use interfaces.
              </p>
              <Link className="btn btn-outline-primary" role="button" href="/hire-me">
                Hire me
              </Link>
            </div>
          </div>
        </section>
        <section className="portfolio-block photography">
          <div className="container">
            <div className="row g-0">
              <div className="col-md-6 col-lg-4 item zoom-on-hover">
                <a href="https://digopay.io" target="_blank">
                  <img className="img-fluid image" src="/img/nature/digo.png" />
                </a>
              </div>
              <div className="col-md-6 col-lg-4 item zoom-on-hover">
                <a
                  href="https://bridgeinagric.com"
                  data-bs-target="bridgeinagric.com"
                  target="_blank"
                >
                  <img className="img-fluid image" src="/img/nature/bia.png" />
                </a>
              </div>
              <div className="col-md-6 col-lg-4 item zoom-on-hover">
                <a href="https://kobo.peswa.finance" target="_blank">
                  <img className="img-fluid image" src="/img/nature/kobo.png" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio-block call-to-action border-bottom">
          <div className="container">
            <div className="d-flex justify-content-center align-items-center content">
              <h3>Like what you see?</h3>
              <Link
                href="/hire-me"
                className="btn btn-outline-primary btn-lg"
                type="button"
              >
                Hire me
              </Link>
            </div>
          </div>
        </section>
        <section className="portfolio-block skills">
          <div className="container">
            <div className="heading">
              <h2>Special Skills</h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card special-skill-item border-0">
                  <div className="card-header bg-transparent border-0">
                    <i className="icon ion-ios-star-outline"></i>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Web Development</h3>
                    <p className="card-text">
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card special-skill-item border-0">
                  <div className="card-header bg-transparent border-0">
                    <i className="icon ion-ios-lightbulb-outline"></i>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Mobile development</h3>
                    <p className="card-text">
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card special-skill-item border-0">
                  <div className="card-header bg-transparent border-0">
                    <i className="icon ion-ios-gear-outline"></i>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Penetration testing</h3>
                    <p className="card-text">
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="portfolio-block website gradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-5 offset-lg-1 text">
              <h3>Startup Project</h3>
              <p>
                Digopay is a subsidiary of Digogh, and our primary service is to
                assist online vendors in making sales. We developed this product
                in response to the growing number of online scams
              </p>
            </div>
            <div className="col-md-12 col-lg-5">
              <div className="portfolio-laptop-mockup">
                <div className="screen">
                  <div
                    className="screen-content"
                    style={{ backgroundImage: `url("/img/nature/digo.png")` }}
                  ></div>
                </div>
                <div className="keyboard"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
