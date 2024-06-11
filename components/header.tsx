import React from 'react'

function Header() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
    <div className="container"><a className="navbar-brand logo" href="#">Richard Bentil</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarNav"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link active" href="index.html">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="projects-with-sidebar.html">Projects</a></li>
                <li className="nav-item"><a className="nav-link" href="hire-me.html">Hire me</a></li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Header