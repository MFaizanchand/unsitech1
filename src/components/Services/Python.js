import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PHP from '../../images/python 1.png'
import PHP2 from '../../images/python 2.png'
import PHP3 from '../../images/python 3.png'
import './phpstyles.css';
import { Form, Button } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Footer';
import NavBar from '../Navbar/NavBar';
import Topbar from '../Navbar/Topbar'
import MetaTags from "react-meta-tags";
function Python() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div style={{ overflowX: 'hidden', overflowY: 'auto' }}>
      <Topbar />
      <NavBar />

      <Container fluid style={{ padding: '0' }}>
      <MetaTags>
          <title>UNSI | Python</title>
          <meta name="Python SERVICE" content="Some description." />
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
            <h1>HIRE A PYTHON DEVELOPER</h1>
            <p>
              Hire Python Developers Who Master Building Robust, Cost-efficient, & Resourceful Web and Mobile Applications.

            </p>
          </Col>
        </Row>

        <Row className='data-section' data-aos='fade-right' style={{ margin: '0', paddingTop: '125px' }}>
          <Col style={{ paddingTop: '125px', padding: '20px' , display:'flex', justifyContent:'center', alignItems:'center' }}>
            <img src={PHP} alt='PHP Logo' style={{ width: '80%', height: 'auto' }} />
          </Col>
          <Col style={{ paddingTop: '125px', padding: '20px' }}>
            <h1 style={{ textAlign: 'center', fontSize: '1.5rem' }}>THE SHINE THAT SETS US APART</h1>
            <p>
              Hiring a reliable Python developer from UNSI Interactive can provide you with the expertise, customized solutions, scalability, efficiency, and support you need to achieve your business goals and objectives.
            </p>
            <table className="outlined-table">
              <thead>
                <tr>
                  <th>Prototype-based Programming </th>
                  <th>Python Web App Development

                  </th>
                  <th>Backend<br/> Development </th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Our Expert Python Developers Craft Robust Web and Mobile Prototypes that have core functionality. </td>
                  <td>We offer comprehensive and reliable Python Web App Development by seasoned experts.


                  </td>
                  <td>We craft streamlined backends that harmonize with robust front-end applications to elevate user experience.</td>
                </tr>

              </tbody>
            </table>
          </Col>
        </Row>


        <Row data-aos='fade-left' style={{ margin: '0', padding: '20px' }}>
          <Col style={{ margin: '55px', padding: '20px' }}>
            <h1 style={{ textAlign: 'left', fontSize: '2rem', fontWeight: 'bolder' }}>
              WHY CHOOSE PYTHON DEVELOPMENT SERVICES?
            </h1>
            <p>
              At UNSI, we offer simplicity, cost-effectiveness, GUI support, scalability, and a vast library for efficient and versatile solutions.
            </p>

            <table className="outlined-table">
              <thead>
                <tr>
                  <th>GUI Support </th>
                  <th>Reduced complexity </th>
                  <th>Portable and scalable </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Python development employs various GUI to create desktop apps.</td>
                  <td>With its user-friendly coding conventions, Python develops complex apps.
                  </td>
                  <td>Python is adaptable and easily customizable with minor code modifications.</td>
                </tr>

              </tbody>
            </table>
          </Col>
          <Col style={{ margin: '55px', padding: '20px' , display:'flex', justifyContent:'center',alignItems:'center' }}>
            <img src={PHP3} alt='PHP Logo' style={{ width: '100%', height: 'auto' }} />
          </Col>
        </Row>

        <div className="container-fluid" style={{ padding: '0' }}>
          <Row className="justify-content-center text-center my-5" style={{ margin: '0' }}>
            <Col xs={12} md={8} lg={6}>
              <h1 className="display-4 font-weight-bold">CHOOSE A HIRING PLAN THAT SUITS YOU!</h1>
              <p>
                We have Tailored PYTHON Solutions to match your unique needs. Whether it's a full project team, dedicated PYTHON developers, or ongoing support, UNSI lets you decide what's best for your success.
              </p>
            </Col>
          </Row>

          <Row className='' data-aos='fade-right' style={{ margin: '0', paddingTop: '125px' }}>
          <Col style={{ paddingTop: '125px', padding: '20px' , display:'flex', justifyContent:'center' , alignItems:'center' }}>
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

export default Python
