import { Form, Button } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer";
import NavBar from "../Navbar/NavBar";
import Topbar from "../Navbar/Topbar";
import "./phpstyles.css";
import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import android1 from "../../images/laravel.jpg";
import android from "../../images/laravel.jpg";
import android2 from "../../images/laravel 1.png";
import MetaTags from 'react-meta-tags';
function Laravel() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div style={{ overflowX: "hidden", overflowY: "auto" }}>
      <Topbar />
      <NavBar />

      <Container fluid style={{ padding: "0" }}>
      <MetaTags>
            <title>UNSI | Laravel</title>
            <meta name="Laravel SERVICE" content="Some description." />
            <meta property="og:title" content="MyApp" />  
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
        <Row
          data-aos="fade-right"
          className="main"
          style={{
            height: "50vh",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#1f3888",
            margin: "0",
          }}
        >
          <Col style={{ color: "white", textAlign: "left", padding: "70px" }}>
            <h1>HIRE A LARAVEL DEVELOPER</h1>
            <p>
              Hire Top-Tier Laravel Developers to Build Robust, Cost-Efficient,
              and Resourceful Web Applications with Full-Stack Expertise.
            </p>
          </Col>
        </Row>

        <Row
          className="data-section"
          data-aos="fade-right"
          style={{ margin: "0", paddingTop: "125px" }}
        >
          <Col style={{ paddingTop: "125px", padding: "20px" , display:'flex', justifyContent:'center', alignItems:'center' }}>
            <img
              src={android1}
              alt="PHP Logo"
              style={{ width: "80%", height: "auto" }}
            />
          </Col>
          <Col style={{ paddingTop: "125px", padding: "20px" }}>
            <h1 style={{ textAlign: "center", fontSize: "1.5rem" }}>
              WHAT MAKES US SHINE
            </h1>
            <p>
              At UNSI Interactive, our skilled Laravel developers provide you
              with the technical proficiency, custom solutions, and support
              required to meet your business goals efficiently. Our team offers
              a full spectrum of Laravel development services to ensure
              scalable, high-performing web applications.
            </p>
            <table className="outlined-table">
              <thead>
                <tr>
                  <th>Custom Laravel Web Development</th>
                  
                  <th>Laravel API Development</th>
                  <th>Migration & <br/>Maintenance</th>
                </tr>
              </thead>
              <tbody> 
                <tr>
                  <td>
                    We deliver tailor-made solutions to help you achieve your
                    web app goals with precision and efficiency.
                  </td>
                 
                  <td>
                    We specialize in building scalable APIs that connect systems
                    and platforms, streamlining your operations.
                  </td>
                  <td>
                    Keep your applications up to date with our migration
                    services and updates to ensure long-term
                    functionality and performance.
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>

        <Row data-aos="fade-left" style={{ margin: "0", padding: "20px" }}>
          <Col xs={12} md={8} lg={6} style={{ margin: "0", padding: "20px" }}>
            <h1
              style={{
                textAlign: "left",
                fontSize: "2rem",
                fontWeight: "bolder",
              }}
            >
              WHY CHOOSE LARAVEL DEVELOPMENT SERVICES?
            </h1>
            <p>
              At UNSI, we prioritize simplicity, performance, scalability, and
              security in every project, delivering robust web applications
              using Laravel, one of the most trusted PHP frameworks.
            </p>
            <table className="outlined-table">
              <thead>
                <tr>
                  <th>MVC Architecture </th>
                  <th style={{width:'160px'}}>Advanced Security</th>
                  <th>Highly Scalable</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Laravel’s Model-View-Controller architecture helps
                    streamline development, enhancing efficiency and
                    maintainability.
                  </td>
                  <td>
                    Built-in security features like CSRF protection, password
                    hashing, and encryption ensure your applications stay
                    secure.
                  </td>
                  <td>
                    Laravel’s ability to scale with your business ensures your
                    web application can grow without limitations.
                  </td>
                  
                </tr>
              </tbody>
            </table>

           
          </Col>
          <Col style={{ margin: "55px", padding: "20px" ,display:'flex', justifyContent:'center', alignItems:'center' }}>
            <img
              src={android}
              alt="PHP Logo"
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
        </Row>

        <div className="container-fluid" style={{ padding: "0" }}>
          <Row
            className="justify-content-center text-center my-5"
            style={{ margin: "0" }}
          >
            <Col xs={12} md={8} lg={6}>
              <h1 className="display-4 font-weight-bold">
                CHOOSE A HIRING PLAN THAT SUITS YOU!
              </h1>
              <p>
                We have Tailored PHP Solutions to match your unique needs.
                Whether it's a full project team, dedicated PHP developers, or
                ongoing support, UNSI lets you decide what's best for your
                success.
              </p>
            </Col>
          </Row>

          <Row className='' data-aos='fade-right' style={{ margin: '0', paddingTop: '125px' }}>
          <Col xs={12} md={8} lg={6} style={{ paddingTop: '125px', padding: '20px' , display:'flex', justifyContent:'center' , alignItems:'center' }}>
            <img src={android2} alt='PHP Logo' style={{ width: '80%', height: '400px' }} />
          </Col>
          <Col xs={12} md={8} lg={6} style={{ paddingTop: '25px', padding: '20px' }}>
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

          <div
            className="w-100"
            style={{ backgroundColor: "#241E6F", margin: "0" }}
          >
            <Row
              data-aos="fade-right"
              className="align-items-center text-white py-5 mx-0"
              style={{ margin: "0" }}
            >
              <Col xs={12} lg={7} className="mb-4 mb-lg-0">
                <h2 className="h1 font-weight-bold">
                  Start Your Project with Us
                </h2>
                <p>
                  Whatever your goal or project size, we will handle it with
                  industry standards. We hope you will be 100% satisfied.
                  "Globally actualize economically sound alignments before
                  tactical systems. Rapidly actualize technically sound
                  processes. Holistically pursue team building catalysts for
                  change."
                </p>
              </Col>
              <Col xs={12} lg={5} className="p-4 bg-white rounded shadow">
                <h3  className="mb-4 text-center text-dark">
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
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Project details"
                      />
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
  );
}

export default Laravel;
