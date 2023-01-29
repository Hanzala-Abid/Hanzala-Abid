import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';



const Footer = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <div className="container-fluid bg-black">
     <div className='container p-0'>
        <div className="row justify-content-center">
          <div className='col-lg-11 border border-dark'>
          <div className='row'>
          <div className='col-lg-6 py-5 ps-5'>
                <h1 className='text-light'>Contact Us</h1>
                <p className='text-muted'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
              </div>
              <div className='col-lg-5 cont-btn'>
             <button  onClick={handleShow} className='btn btn-gold pad-btn'>Contact Us</button>
              </div>
              
          </div>
          </div>
          <div className='col-lg-11 '>
          <div className='d-center py-5'>
          <img src='Group 11.png'/>
          </div>
          <div>
            <ul className='icon pb-5'>
              <li><i class="fa-brands fa-twitter"></i></li>
              <li><i class="fa-brands fa-linkedin"></i></li>
              <li><i class="fa-brands fa-instagram"></i></li>
            </ul>
          </div>
          <div>
          <ul className='footer-text'>
              <li>For VCs</li>
              <li>For Founders</li>
              <li>For Partners</li>
            </ul>
          </div>
          <div className='border-top border-dark'>
            <div className='text-muted py-4 d-center'>© 2022 Bochain Lab. All rights reserved</div>
          </div>
          
          </div>
        </div>
        </div>
     </div>

     <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
          
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>
    </>
  )
}

export default Footer