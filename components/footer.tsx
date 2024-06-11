import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="links">
          <Link href="/hire-me">Hire me</Link>
          <Link href="/projects">Projects</Link>
        </div>
        <div className="social-icons">
          <Link target="_blank" href="facebook.com/richardbentil">
            <i className="icon ion-social-facebook"></i>
          </Link>
          <Link target="_blank" href="instagram.com/richardbentil">
            <i className="icon ion-social-instagram-outline"></i>
          </Link>
          <Link target="_blank" href="twitter.com/richardbentil">
            <i className="icon ion-social-twitter"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
