import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
      <div className="container-fluid bg-black">
        <div className="row">
          <div className='col-lg-11 col-12 m-auto p-0'>
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link to="/" className="navbar-brand py-0">
                <img src='Group 11.png' width='200px' />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="space collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-lg-0">
                  <li className="nav-item li-pad">
                    <Link className="nav-link ps-4 active text-muted" aria-current="page" to="/members">Members</Link>
                  </li>
                  <li className="nav-item li-pad">
                    <Link className="nav-link text-muted" aria-current="page" to="/mainevent">Events</Link>
                  </li>
                  <li className="nav-item li-pad">
                    <Link className="nav-link text-muted" aria-current="page" to="/vcdao">VCDAO</Link>
                  </li>
                  <li className="nav-item li-pad">
                    <Link className="nav-link text-muted" aria-current="page" to="/venturedao">VentureDAO</Link>
                  </li>
                  <li className="nav-item li-pad">
                    <Link className="nav-link text-muted" aria-current="page" to="/artdao">ArtDAO</Link>
                  </li>
                  <li className="nav-item li-pad">
                    <Link className="nav-link text-muted" aria-current="page" to="/servicedao">ServiceDAO</Link>
                  </li>
                </ul>
              <div className='right-align '>
              <div className=''>
                <input type='text' placeholder='Search' className='bg-black border border-light py-1'></input>
              </div>
              <div className=" navbar-nav collapse navbar-collapse item-b" id="navbarSupportedContent">
                <button className="btn text-gold ps-3" type="submit">Sign Up</button>
                <button className="btn btn-gold px-4" type="submit">Sign Up</button>
              </div>
              </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar