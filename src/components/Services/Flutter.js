import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Logo from '../images/Php.jpg';
// import img1 from '../images/Reactservicepageimg/react1.jpg'
import img1 from '../../images/Flutter/fluter.jpg'
import PHP2 from '../../images/Flutter/flutter1.png'
import PHP3 from '../../images/ruby 3.png'
import './phpstyles.css';
import { Form, Button } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from '../../components/Footer';
import NavBar from '../Navbar/NavLinks';


function Flutter() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
      }, []);
    
      return (
        <div style={{ overflowX: 'hidden', overflowY: 'auto' }}>
          
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
                <h1>Hire A Flutter Developer</h1>
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
                <h1 style={{ textAlign: 'center', fontSize: '1.5rem' }}>Flutter App
                Development Services</h1>
                <p>Ropstam builds cost-effective, efficient apps using Flutter – crafting modern solutions for global customers. Our perfectly customized apps using this mobile app SDK provide both iOS and Android support through one codebase, bringing your ideas to life.

                </p>
                <table className="outlined-table">
                            <thead>
                                <tr>
                                    <th>Cross-Platform Development
                                    </th>
                                    <th>Quick Development Process
                                    </th>
                                    <th>Feature-loaded Apps

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Flutter, being mobile app SDK, allows for efficient cross-platform development. Meaning you can have Flutter apps for both iOS & Android platforms from single codebase, saving time and resources</td>
                                    <td> Flutter’s hot reload feature enables developers to see changes made in code right away in app, which significantly speeds up development process. This makes Flutter apps favored by businesses
                                    </td>
                                    <td>Flutter’s rich set of widgets & ability to customize existing widgets allows for creation of feature-loaded apps. Meaning you can offer more value to users in form of apps that enhance user experience.
                                    </td>
                                </tr>

                            </tbody>
                        </table>
              </Col>
            </Row>
    
           
    
            <Row data-aos='fade-left' style={{ margin: '0', padding: '20px' }}>
              <Col style={{ margin: '0', padding: '20px' }}>
                <h1 style={{ textAlign: 'left', fontSize: '2rem', fontWeight: 'bolder' }}>
                Our Flutter Development Process
                </h1>
                <p>
                To ensure the delivery of top-notch Flutter applications, Ropstam adheres to a certain guideline to streamline the process of cross-platform app development. From planning to updates, each step demands equal native importance for the creation of cost-effective and efficient applications.

</p>
    
                <table className="outlined-table">
                            <thead>
                                <tr>
                                    <th>Collaboration and Planning</th>
                                    <th>UI/UX Design
                                    </th>
                                    <th>App Development
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Our Flutter developers collaborate with clients to understand their needs deeply and devise an optimal Flutter app development solution tailored to their product visio

</td>
                                    <td>Our designers creates visually appealing front end designs of interfaces for apps that are optimized for both digital platforms.
                                    </td>
                                    <td  >Leveraging Dart, our expert Flutter developers build robust, scalable, and bug-free apps with native look and feel across platforms.
</td>
                                </tr>

                            </tbody>
                        </table>
              </Col>
              <Col style={{ margin: '55px', padding: '20px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <img src={PHP2} alt='PHP Logo' style={{ width: '100%', height: 'auto' }} />
              </Col>
            </Row>
    
            <div className="container-fluid" style={{ padding: '0' }}>
              <Row className="justify-content-center text-center my-5" style={{ margin: '0' }}>
                <Col xs={12} md={8} lg={6}>
                  <h1 className="display-4 font-weight-bold">CHOOSE A HIRING PLAN THAT SUITS YOU!</h1>
                  <p>
                    We have Tailored Flutter Solutions to match your unique needs. Whether it's a full project team, dedicated Flutter developers, or ongoing support, UNSI lets you decide what's best for your success.
                  </p>
                </Col>
              </Row>
    
              <Row className='' data-aos='fade-right' style={{ margin: '0', paddingTop: '125px' }}>
          <Col xs={12} md={8} lg={6} style={{ paddingTop: '125px', padding: '20px' , display:'flex', justifyContent:'center' , alignItems:'center' }}>
            <img src={PHP3} alt='PHP Logo' style={{ width: '90%', height: 'auto' }} />
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

export default Flutter
