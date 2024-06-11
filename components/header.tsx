import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
    <div className="container"><Link className="navbar-brand logo" href="/">Richard Bentil</Link><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarNav"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link active" href="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" href="/projects">Projects</Link></li>
                <li className="nav-item"><Link className="nav-link" href="/hire-me">Hire me</Link></li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Header