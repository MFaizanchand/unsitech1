import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from '../../images/Reactservicepageimg/react1.jpg'
import PHP2 from '../../images/ruby 2.png'
import PHP3 from '../../images/ruby 3.png'
import './phpstyles.css';
import { Form, Button } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Footer';
import NavBar from '../Navbar/NavBar';
import MetaTags from "react-meta-tags";

function ReactPage() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
      }, []);
    
      return (
        <div style={{ overflowX: 'hidden', overflowY: 'auto' }}>
          
          <NavBar/>
          
          <Container fluid style={{ padding: '0' }}>
          <MetaTags>
          <title>UNSI | React</title>
          <meta name="React SERVICE" content="Some description." />
          <meta property="og:title" content="MyApp" />
          <meta property="og:image" content="path/to/image.jpg" />
        </MetaTags>
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
                <h1>Hire A REACT JS Developer</h1>
                <p>
                UNSI tech delivers stable and scalable solutions with dynamic user interfaces
                </p>
              </Col>
            </Row>
    
            <Row className='data-section' data-aos='fade-right' style={{ margin: '0' , paddingTop:'115px'  }}>
              <Col xs={12} md={8} lg={6} style={{ paddingTop: '125px', padding: '20px' , display:'flex', justifyContent:'center', alignItems:'center' }}>
                <img src={img1} alt='PHP Logo' style={{ width: '100%', height: 'auto' }} />
              </Col>
              <Col xs={12} md={8} lg={6} style={{ paddingTop: '125px', padding: '20px' }}>
                <h1 style={{ textAlign: 'center', fontSize: '1.5rem' }}>Why React JS for Your Project?</h1>
                <p>UNSI tech delivers stable and scalable solutions with dynamic user interfaces that combine robust functionality and supreme visuals. Our development team ensures meeting deadlines and following your project requirements.

                </p>
                <table className="outlined-table">
                            <thead>
                                <tr>
                                    <th>Custom React Development
                                    </th>
                                    <th>Single Page Development
                                    </th>
                                    <th>Architecture Building

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Our team uses React development for custom user interfaces since it ensures flexibility, efficiency, and scalability. We tend to follow these steps – designing the architecture, creating and organizing components, handling data, and testing the app.</td>
                                    <td> At UNSI tech, we focus on SPD which allows for placing all the content and features of the app on a single page. Our React development company builds a dynamic and interactive web app using JavaScript to load content and handle user interactions.
                                    </td>
                                    <td>We help build a solid architecture for your React application. The right architecture allows maintaining and scaling the app easier. Our team tends to use various state management libraries such as Redux, MobX, and Context API.</td>
                                </tr>

                            </tbody>
                        </table>
              </Col>
            </Row>
    
           
    
            <Row data-aos='fade-left' style={{ margin: '0', padding: '20px' }}>
              <Col style={{ margin: '0', padding: '20px' }}>
                <h1 style={{ textAlign: 'left', fontSize: '2rem', fontWeight: 'bolder' }}>
                Services We Deliver on React JS
                </h1>
                <p>
                React JS has wide possibilities: discover what UNSI can do for you.

</p>
    
                <table className="outlined-table">
                            <thead>
                                <tr>
                                    <th>Front-end development </th>
                                    <th>Back-end development
                                    </th>
                                    <th>Full Software Development
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>At UNSI, we provide services to create interactive software solutions with the UI and business logic seamlessly baked together. Engage your customers and deliver robust user experiences.

</td>
                                    <td>Our team has a proven experience with a portfolio of successfully delivered projects. We consider our client's needs to ensure platform stability. We also help with back-end migration, providing data backups.
                                    </td>
                                    <td  >Handle all stages of software development with UNSI tech, from planning to support and maintenance. Our vast experience allows us to take on even the most complex and challenging software projects.

.</td>
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
                    We have Tailored React Solutions to match your unique needs. Whether it's a full project team, dedicated React JS developers, or ongoing support, UNSI lets you decide what's best for your success.
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

export default ReactPage
