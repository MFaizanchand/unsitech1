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
import android1 from "../../images/digital 1.png";
import android from "../../images/digital 2.png";

import android2 from "../../images/digital 3.png";
function DigitalMarketing() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div style={{ overflowX: "hidden", overflowY: "auto" }}>
      <Topbar />
      <NavBar />

      <Container fluid style={{ padding: "0" }}>
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
            <h1>HIRE A DIGITAL MARKETER</h1>
            <p>
              Climb The Ladder Of Success Faster With Digital Marketing
              Services!
            </p>
          </Col>
        </Row>

        <Row
          className="data-section"
          data-aos="fade-right"
          style={{ margin: "0", paddingTop: "125px" }}
        >
          <Col xs={12} md={8} lg={6} style={{ paddingTop: "125px", padding: "20px" , display:'flex' , justifyContent:'center' , alignItems:'center' }}>
            <img
              src={android}
              alt="PHP Logo"
              style={{ width: "80%", height: "auto"  }}
            />
          </Col>
          <Col xs={12} md={8} lg={6} style={{ paddingTop: "125px", padding: "20px" }}>
            <h1 style={{ textAlign: "left", fontSize: "1.5rem" }}>
              Discover How UNSI Grow Your Client Base With Data-Driven &
              Targeted Strategies…
            </h1>
            <h6 style={{ textAlign: "left", fontSize: "1rem" }}>
              Marketing is Crucial, But Why Digital?
            </h6>
            <p>
              The online marketing industry is booming, with U.S. businesses
              spending over $110 billion on digital advertising. To stay ahead,
              you need more than outdated tactics. Boost your sales and
              strengthen your digital presence with Orbnix’s value-driven
              internet marketing services. 🚀
            </p>
            <h6 style={{ textAlign: "left" }}>Digital marketing helps you:</h6>
            <ul
              style={{
                textAlign: "left",
                listStyleType: "circle",
                paddingLeft: "20px",
              }}
            >
              <li>Save time, money and resources</li>
              <li>Build your brand reputation across online channels</li>
              <li>Acquire huge ROI</li>
              <li>Maximize various customer touchpoints</li>
              <li>Track your campaign results</li>
              <li>Drive profitable long-term growth</li>
            </ul>
          </Col>
        </Row>

        <Row data-aos="fade-left" style={{ margin: "0", padding: "20px" }}>
          <Col style={{ margin: "0", padding: "20px" }}>
            <h1
              style={{
                textAlign: "left",
                fontSize: "2rem",
                fontWeight: "bolder",
              }}
            >
              Why UNSI, For Your Digital Marketing Needs?
            </h1>
            <p>
              Take a quick look at our value-driven digital marketing services!
            </p>

            <table className="outlined-table">
              <thead>
                <tr>
                  <th>Search Engine Optimization (SEO) </th>
                  
                  <th>Content Marketing/ Blogs</th>
                  <th>Social Media Marketing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Be seen for everything existing and potential customers
                    searching for & optimize your website in a cost-effective
                    way.
                  </td>
                  
                  <td style={{width:'155px'}}>
                    Get amplified engagement & brand awareness with
                    improved website traffic with our promoted content.
                  </td>
                  <td>
                    Get effective solutions to make you successful in the age of
                    varied digital media.
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col style={{ margin: "55px", padding: "20px" , display:'flex', justifyContent:'center', alignItems:'center' }}>
            <img
              src={android1}
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
              We have solutions tailored to your unique needs. Whether it's a complete digital marketing strategy, dedicated experts for SEO, or ongoing campaign support, UNSI empowers you to choose the approach that best drives your success.
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
                <h2  className="h1 font-weight-bold">
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

export default DigitalMarketing;
