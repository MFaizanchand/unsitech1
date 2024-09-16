import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PHP from "../../images/php 1.png";
import PHP2 from "../../images/php 2.png";
import PHP3 from "../../images/php 3.png";
import "./phpstyles.css";
import { Form, Button } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer";
import NavBar from "../Navbar/NavBar";
import Topbar from "../Navbar/Topbar";
import MetaTags from "react-meta-tags";
function Php() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div style={{ overflowX: "hidden", overflowY: "auto" }}>
      <Topbar />
      <NavBar />

      <Container fluid style={{ padding: "0" }}>
        <MetaTags>
          <title>UNSI | PHP</title>
          <meta name="PHP SERVICE" content="Some description." />
          <meta property="og:title" content="MyApp" />
          <meta property="og:image" content="path/to/image.jpg" />
        </MetaTags>
        <Row
          data-aos="fade-right"
          className="main"
          style={{
            height: "60vh",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#1f3888",
            margin: "0",
          }}
        >
          <Col style={{ color: "white", textAlign: "left", padding: "70px" }}>
            <h1>HIRE A PHP DEVELOPER</h1>
            <p>
              Get the full spectrum of PHP Development Lifecycle, from Codebase
              Assessment and maintenance to crafting innovation platforms from
              scratch.
            </p>
          </Col>
        </Row>

        <Row
          className="data-section"
          data-aos="fade-right"
          style={{ margin: "0", paddingTop: "125px" }}
        >
          <Col
            xs={12}
            md={8}
            lg={6}
            style={{
              paddingTop: "125px",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={PHP}
              alt="PHP Logo"
              style={{ width: "80%", height: "auto" }}
            />
          </Col>
          <Col style={{ margin: "55px", paddingTop: "25px", padding: "20px" }}>
            <h1 style={{ textAlign: "center", fontSize: "1.5rem" }}>
              Our suite of php development services
            </h1>
            <p>
              Searching for a powerful web app that provides a lightning-fast
              user experience? PHP is designed to do exactly that! Explore the
              growing range of bespoke PHP web development services at UNSI that
              aspire to enable every business with a custom-built website.
            </p>
            <table className="outlined-table">
              <thead>
                <tr>
                  <th>Custom Web Development</th>
                  <th>CRM Services Solutions</th>
                  <th>Enterprise Web Portals</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ width: "200px" }}>
                  <td>
                    Harness PHP's Open-Source Capabilities and Extensive
                    Libraries to Craft Unique and friendly Web Apps.
                  </td>
                  <td>
                    Get high-end CRM solutions to manage your Customer Data,
                    Sales Pipeline & Selling Efforts.{" "}
                  </td>
                  <td>
                    Build Web Portals, Desktop Apps, and Custom Applications
                    using PHP's server-side scripting.
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>

        <Row data-aos="fade-left" style={{ margin: "20px", padding: "10px" }}>
          <Col xs={12} md={8} lg={6} style={{ padding: "15px" }}>
            <h1
              style={{
                textAlign: "left",
                fontSize: "1.5rem", // Smaller font size for small screens
                fontWeight: "bolder",
              }}
            >
              Dynamic PHP Applications For Business Transformation
            </h1>
            <p style={{ fontSize: "1rem", lineHeight: "1.5rem" }}>
              Experience the Power of PHP Web Development with UNSI. We create
              websites with the latest industry standards in record time,
              supported by our round-the-clock customer service for all your
              technical needs.
            </p>

            <table
              className="outlined-table"
              style={{ width: "100%", fontSize: "0.9rem" }}
            >
              <thead>
                <tr>
                  <th>Innovative Approach</th>
                  <th>Custom Service Solutions</th>
                  <th>Client-Centric Solutions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Our PHP developers use an agile approach for smooth project
                    execution and excellent website delivery.
                  </td>
                  <td>
                    Custom PHP Solutions for Responsive, Mobile Web Apps Meeting
                    Specific Needs.
                  </td>
                  <td>
                    Tailored PHP Engagement Models Meeting Diverse Business
                    Needs and Customer Demands.
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col
            xs={12}
            md={8}
            lg={6}
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={PHP2}
              alt="PHP Logo"
              style={{ width: "90%", height: "auto" }}
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
          <Row
            className=""
            data-aos="fade-right"
            style={{ margin: "0", paddingTop: "125px" }}
          >
            <Col
              xs={12}
              md={8}
              lg={6}
              style={{
                paddingTop: "125px",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={PHP3}
                alt="PHP Logo"
                style={{ width: "80%", height: "auto" }}
              />
            </Col>
            <Col
              xs={12}
              md={8}
              lg={6}
              style={{ paddingTop: "25px", padding: "20px" }}
            >
              <h6 className="text-primary">Step 1</h6>
              <h2 className="h3">Share Your Requirements</h2>
              <p>
                Drop us a message and we will schedule a call to learn more
                about your needs.{" "}
              </p>

              <h6 className="text-primary">Step 2</h6>
              <h2 className="h3">Find Your Expert</h2>
              <p>
                We can help you manage your project with the perfect Php
                consultant.{" "}
              </p>

              <h6 className="text-primary">Step 3</h6>
              <h2 className="h3">Schedule an interview</h2>
              <p>
                Understand any technical requirements with our Php developers
                and get a clear picture.
              </p>
              <h6 className="text-primary">Step 3</h6>
              <h2 className="h3">Begin your project</h2>
              <p>
                Boost your Php development project with a risk-free analysis.
              </p>
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
                <h3 style={{ color: "black" }} className="mb-4 text-center">
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

export default Php;
