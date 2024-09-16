import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PHP from '../../images/word press 1.png'
import PHP2 from '../../images/word press 2.png'
import PHP3 from '../../images/word press 3.png'
import './phpstyles.css';
import { Form, Button } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Footer';
import NavBar from '../Navbar/NavBar';
import MetaTags from "react-meta-tags";
function WordPress() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (


        <div style={{ overflowX: 'hidden', overflowY: 'auto' }}>
           
            <NavBar />

            <Container fluid style={{ padding: '0' }}>
            <MetaTags>
          <title>UNSI | WordPress
          </title>
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
                        <h1>HIRE A WORDPRESS DEVELOPER</h1>
                        <p>
                            Bespoke WordPress websites and platforms: online shops, CRMs, job boards, custom plugins and much more.

                        </p>
                    </Col>
                </Row>

                <Row className='data-section' data-aos='fade-right' style={{ margin: '0', paddingTop: '125px' , display:'flex' , justifyContent:'center',alignItems:'center' }}>
                    <Col style={{ paddingTop: '125px', padding: '20px' }}>
                        <img src={PHP} alt='PHP Logo' style={{ width: '75%', height: 'auto' , marginLeft:'70px' }} />
                    </Col>
                    <Col style={{ paddingTop: '125px', padding: '20px' }}>
                        <h1 style={{ textAlign: 'center', fontSize: '1.5rem' }}>OUR EXPERTISE IN WORDPRESS DEVELOPMENT</h1>
                        <p>
                            Scale-Up Your Business With Our Full Range of WordPress Development Services
                        </p>
                        <table className="outlined-table">
                            <thead>
                                <tr>
                                    <th>Custom WordPress & Plugin Development</th>
                                    <th>WooCommerce Site Development</th>
                                    <th>WordPress ECommerce Solution</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>We provide custom WordPress website design services & top-quality, feature-rich, and bug-free WordPress plugins for your business.</td>
                                    <td>We provide WooCommerce site development services according to your business requirements at the best prices</td>
                                    <td>We are well-recognized for providing the best-in-quality WordPress eCommerce solutions for your business needs.</td>
                                </tr>

                            </tbody>
                        </table>

                    </Col>
                </Row>

                <Row data-aos='fade-right' style={{ margin: '0', padding: '20px' }}>
                    
                    <Col xs={12} md={8} lg={6} style={{ margin: '0', padding: '20px' }}>
                        <h1 style={{ textAlign: 'left', fontSize: '1.5rem' }}>MORE THAN JUST DEVELOPMENT</h1>
                        <p>
                            Our feature rich  services are having consumer-centric, data-driven insights that go beyond impressions, visits, and clicks.
                        </p>
                        <table className="outlined-table">
                            <thead>
                                <tr>
                                    <th>WordPress Theme & Blog Site Development
                                    </th>
                                    <th>WordPress Migration Services</th>
                                    <th>WordPress API Integration Services</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Our skilled WordPress developers create stunning, user-friendly themes & develop an elegant & the most appealing blogging site.</td>
                                    <td>Our experienced WordPress developers have the expertise to safely migrate your website to the WordPress platform in no time.</td>
                                    <td>We also provide WordPress API integration services with our dedicated WordPress developers in the right way..</td>
                                </tr>
                            </tbody>
                        </table>
                       
                      
                    </Col>
                    <Col style={{ margin: '55px', padding: '20px' , display:'flex' , justifyContent:'center' , alignItems:'center' }}>
                        <img src={PHP3} alt='PHP Logo' style={{ width: '100%',  height: 'auto' }} />
                    </Col>
                </Row>

               
               

                <div className="container-fluid" style={{ padding: '0' }}>
                    <Row className="justify-content-center text-center my-5" style={{ margin: '0' }}>
                        <Col xs={12} md={8} lg={6}>
                            <h1 className="display-4 font-weight-bold">CHOOSE A HIRING PLAN THAT SUITS YOU!</h1>
                            <p>
                                We have Wordpress Solutions to match your unique needs. Whether it's a full project team, dedicated Wordpress developers, or ongoing support, UNSI lets you decide what's best for your success.
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
                                <h3 style={{color :"black"}} className="mb-4 text-center">
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

export default WordPress
