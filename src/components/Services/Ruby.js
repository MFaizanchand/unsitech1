import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PHP from '../../images/ruby 1.png'
import PHP2 from '../../images/ruby 2.png'
import PHP3 from '../../images/ruby 3.png'
import './phpstyles.css';
import { Form, Button } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Footer';
import NavBar from '../Navbar/NavBar';
import Topbar from '../Navbar/Topbar'


function Ruby() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
      }, []);
    
      return (
        <div style={{ overflowX: 'hidden', overflowY: 'auto' }}>
          <Topbar/>
          <NavBar/>
          
          <Container fluid style={{ padding: '0' }}>
            <Row
              data-aos='fade-right'
              className='main'
              style={{
                height: '50vh',
                alignItems: 'center',
                width: '100%',
                backgroundColor: '#1f3888',
                margin: '0',
              }}
            >
              <Col style={{ color: 'white', textAlign: 'left', padding: '70px' }}>
                <h1>Hire A Ruby on Rails Developer</h1>
                <p>
                Hire the Top Ruby on Rails Developers in 24 Hours, Guaranteed!
                </p>
              </Col>
            </Row>
    
            <Row className='data-section' data-aos='fade-right' style={{ margin: '0' , paddingTop:'115px'  }}>
              <Col xs={12} md={8} lg={6} style={{ paddingTop: '125px', padding: '20px' , display:'flex', justifyContent:'center', alignItems:'center' }}>
                <img src={PHP} alt='PHP Logo' style={{ width: '80%', height: 'auto' }} />
              </Col>
              <Col xs={12} md={8} lg={6} style={{ paddingTop: '125px', padding: '20px' }}>
                <h1 style={{ textAlign: 'center', fontSize: '1.5rem' }}>RUBY IN OUR SLEEP</h1>
                <p>
                Is off-the-shelf software not working for you? 

UNSI provides Ruby on Rails Development Services tailored to businesses' needs. Our RoR developers build scalable and secure custom apps with responsive design, high performance, and optimised code.

                </p>
                <table className="outlined-table">
                            <thead>
                                <tr>
                                    <th>Highly Scalable Ruby Solutions</th>
                                    <th>Advanced Backend Ruby Systems </th>
                                    <th>Ruby & Other Technologies</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Experience with architectural patterns for high-scale web apps, emphasizing performance and availability.</td>
                                    <td>Skilled in building performant APIs and complex Ruby applications with microservices architecture.
                                    </td>
                                    <td>Proficient in Ruby, Rails, RSpec, Capybara, Resque, Docker, Kubernetes, Terraform, and more.</td>
                                </tr>

                            </tbody>
                        </table>
              </Col>
            </Row>
    
           
    
            <Row data-aos='fade-left' style={{ margin: '0', padding: '20px' }}>
              <Col style={{ margin: '0', padding: '20px' }}>
                <h1 style={{ textAlign: 'left', fontSize: '2rem', fontWeight: 'bolder' }}>
                RUBY ON RAILS APPLICATION DEVELOPMENT SERVICES
                </h1>
                <p>
                As a multi-disciplinary team of developers, UX experts, and project managers, we create Ruby on Rails applications that are secure, scalable, and user-friendly.
                </p>
    
                <table className="outlined-table">
                            <thead>
                                <tr>
                                    <th>Dedicated Team </th>
                                    <th> IT Staff Augmentation</th>
                                    <th>Software Outsourcing </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Experienced, self-reliant teams delivering technology solutions and value.</td>
                                    <td>Augmenting your projects with skilled talent to elevate performance and achieve success
                                    </td>
                                    <td style={{width:'175px'}} >End-to-end custom software development; you provide the specs, and we deliver the complete solution.</td>
                                </tr>

                            </tbody>
                        </table>
              </Col>
              <Col style={{ margin: '55px', padding: '20px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <img src={PHP3} alt='PHP Logo' style={{ width: '100%', height: 'auto' }} />
              </Col>
            </Row>
    
            <div className="container-fluid" style={{ padding: '0' }}>
              <Row className="justify-content-center text-center my-5" style={{ margin: '0' }}>
                <Col xs={12} md={8} lg={6}>
                  <h1 className="display-4 font-weight-bold">CHOOSE A HIRING PLAN THAT SUITS YOU!</h1>
                  <p>
                    We have Tailored Ruby on Rails Solutions to match your unique needs. Whether it's a full project team, dedicated Ruby on Rails developers, or ongoing support, UNSI lets you decide what's best for your success.
                  </p>
                </Col>
              </Row>
    
              <Row className='' data-aos='fade-right' style={{ margin: '0', paddingTop: '125px' }}>
          <Col xs={12} md={8} lg={6} style={{ paddingTop: '125px', padding: '20px' , display:'flex', justifyContent:'center' , alignItems:'center' }}>
            <img src={PHP2} alt='PHP Logo' style={{ width: '90%', height: 'auto' }} />
          </Col>
          <Col style={{ paddingTop: '25px', padding: '20px' }}>
          <h6 className="text-primary">Step 1</h6>
              <h2 className="h3">Share Your Requirements</h2>
              <p>
              Drop us a message and we will schedule a call to learn more about your needs.              </p>

              <h6 className="text-primary">Step 2</h6>  
              <h2 className="h3">Find Your Expert</h2>
              <p>
              We can help you manage your project with the perfect Php consultant.              </p>

              <h6 className="text-primary">Step 3</h6>
              <h2 className="h3">Schedule an interview</h2>
              <p>
              Understand any technical requirements with our Php developers and get a clear picture.</p>
              <h6 className="text-primary">Step 3</h6>
              <h2 className="h3">Begin your project</h2>
              <p>
              Boost your Php development project with a risk-free analysis.</p>
            
          </Col>
        </Row>
    
              <div className='w-100' style={{ backgroundColor: '#241E6F', margin: '0' }}>
                <Row
                  data-aos="fade-right"
                  className="align-items-center text-white py-5 mx-0"
                  style={{ margin: '0' }}
                >
                  <Col xs={12} lg={7} className="mb-4 mb-lg-0">
                    <h2 className="h1 font-weight-bold">Start Your Project with Us</h2>
                    <p>
                      Whatever your goal or project size, we will handle it with industry standards. We hope you will be 100% satisfied. "Globally actualize economically sound alignments before tactical systems. Rapidly actualize technically sound processes. Holistically pursue team building catalysts for change."
                    </p>
                  </Col>
                  <Col xs={12} lg={5} className="p-4 bg-white rounded shadow">
                    <h3 style={{color:'black'}} className="mb-4 text-center">
                      Fill out the form and we will be in touch as soon as possible.
                    </h3>
                    <Form>
                      <Row>
                        <Col xs={12} md={6} className="mb-3">
                          <Form.Control type="text" placeholder="Name" />
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                          <Form.Control type="email" placeholder="Email" />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} md={6} className="mb-3">
                          <Form.Control type="text" placeholder="Company website" />
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                          <Form.Control type="email" placeholder="Work email" />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} className="mb-3">
                          <Form.Control type="text" placeholder="Budget" />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} className="mb-3">
                          <Form.Control as="textarea" rows={3} placeholder="Project details" />
                        </Col>
                      </Row>
                      <div className="d-flex justify-content-center">
                        <Button type="submit" className="btn btn-primary">
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </div>
            </div>
    
            <Footer />
          </Container>
        </div>
  )
}

export default Ruby
