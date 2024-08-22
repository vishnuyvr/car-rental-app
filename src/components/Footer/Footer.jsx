import React from 'react'

import { Container,Row,Col, ListGroup, ListGroupItem } 
from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: '/about',
    display: 'About'
  },

  {
    path: '#',
    display: 'Privacy Policy'
  },

  {
    path: '/cars',
    display: 'Car Listing'
  },

  {
    path: '/contact',
    display: 'Contact'
  },
]
const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' md='4' sm='12'>
          <div className="logo footer__logo">
                <h1><Link to='/home' className="d-flex 
                align-items-center gap-3">
                  <i class="ri-car-line"></i>
                  <span>Rent Car <br /> Service</span>
                  </Link></h1>
              </div>
              <p className="footer__logo-content">
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Ab repellat qui itaque 
                voluptas reprehenderit consequatur dolorem 
                amet cumque distinctio veritatis est 
                consequuntur earum optio ratione eos deleniti, 
                fuga iure nulla!
              </p>
          </Col>

          <Col lg='2' md='2' sm='6'>
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {
                  quickLinks.map((item,index)=>(
                    <ListGroupItem key={index} 
                     className='p-0 mt-3 quick__link' >
                      <Link>{item.display}</Link>
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-2">Head Office</h5>
              <p className="office__info">Address: 800N State College Blvd,
              Fullerton, CA 92831</p>
              <p className="office__info">Timings: Monday - Friday
              <br />{'     '}9am - 8pm</p>
              <p className="office__info">Phone: +1 (657)248-1234</p>
              <p className="office__info">Email: vishnu@gmail.com</p>
            </div>
          </Col>

          <Col lg='3' md='3'>
            <div className="newsletter-1 mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p>Subscribe to our
               newsletter</p>
               <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span><i class="ri-send-plane-line"></i></span>
               </div>
            </div>
          </Col>

          <Col lg='12'>
            <div className='footer__bottom'>
              <p className='d-flex justify-content-center align-items-center pt-4'>
                <i class="ri-copyright-line"></i>Copyright { }
                 {year}, Developed by Vishnu. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer