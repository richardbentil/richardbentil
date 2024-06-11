import Layout from "@/components/layout";
import Head from "next/head";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Find all my projects here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="page projects-page">
        <section className="portfolio-block projects-cards">
            <div className="container">
                <div className="heading">
                    <h2>Recent Work</h2>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="/img/nature/digo.png" alt="Card Image" /></a>
                            <div className="card-body">
                                <h6><a href="#">Digopay</a></h6>
                                <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="/img/nature/bia.png" alt="Card Image" /></a>
                            <div className="card-body">
                                <h6><a href="#">Bridge in agriculture</a></h6>
                                <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="/img/nature/kobo.png" alt="Card Image" /></a>
                            <div className="card-body">
                                <h6><a href="#">Kobo</a></h6>
                                <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="/img/nature/myghqr.png" alt="Card Image" /></a>
                            <div className="card-body">
                                <h6><a href="#">MyghQR</a></h6>
                                <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="#"><img className="card-img-top scale-on-hover" src="/img/nature/dmb2024.png" alt="Card Image" /></a>
                            <div className="card-body">
                                <h6><a href="#">Dmb2024</a></h6>
                                <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </Layout>
  );
}
