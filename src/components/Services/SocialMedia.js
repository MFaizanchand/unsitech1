import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PHP from "../../images/social media 1.png";
import PHP2 from "../../images/social media 2.png";
import PHP3 from "../../images/social media 3.png";
import "./phpstyles.css";
import { Form, Button } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer";
import NavBar from "../Navbar/NavBar";
import Topbar from "../Navbar/Topbar";

function SocialMedia() {
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
            <h1>HIRE A SOCIAL MEDIA</h1>
            <p>
              Hire top-tier social media experts to build brand visibility,
              drive engagement, and grow your online presence with
              cost-effective, data-driven strategies.
            </p>
          </Col>
        </Row>

        <Row
          className="data-section"
          data-aos="fade-right"
          style={{ margin: "0", paddingTop: "125px" }}
        >
          <Col style={{ paddingTop: "125px", padding: "20px" }}>
            <img
              src={PHP}
              alt="PHP Logo"
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
          <Col style={{ paddingTop: "125px", padding: "20px" }}>
            <h1 style={{ textAlign: "center", fontSize: "1.5rem" }}>
              Our site of PHP
            </h1>
            <p></p>
          </Col>
        </Row>

        <Row data-aos="fade-right" style={{ margin: "0", padding: "20px" }}>
          <Col style={{ margin: "55px", padding: "20px" }}>
            <img
              src={PHP2}
              alt="PHP Logo"
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
          <Col style={{ margin: "55px", padding: "20px" }}>
            <h1 style={{ textAlign: "left", fontSize: "1.5rem" }}>
              Our site of PHP
            </h1>
            <p>
              Searching for a powerful web app that provides a lightning-fast
              user experience? PHP is designed to do exactly that! Explore the
              growing range of bespoke PHP web development services at UNSI that
              aspire to enable every business with a custom-built website.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "75px",
              }}
            >
              <div style={{ flex: "1", marginRight: "20px" }}>
                <h1 style={{ textAlign: "left", fontSize: "1rem" }}>
                  Custom Web Apps
                </h1>
                <p>
                  Harness PHP open-source capabilities and Extensive Libraries
                  to Craft unique web apps.
                </p>
              </div>

              <div style={{ flex: "1", marginLeft: "20px" }}>
                <h1 style={{ textAlign: "left", fontSize: "1rem" }}>
                  Custom Web Apps
                </h1>
                <p>
                  Harness PHP open-source capabilities and Extensive Libraries
                  to Craft unique web apps.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row data-aos="fade-left" style={{ margin: "0", padding: "20px" }}>
          <Col style={{ margin: "55px", padding: "20px" }}>
            <h1
              style={{
                textAlign: "left",
                fontSize: "2rem",
                fontWeight: "bolder",
              }}
            >
              Dynamic PHP Applications For Business Transformation
            </h1>
            <p>
              Experience the power of web application with UNSI. We create
              websites with the latest industry standards in record time,
              supported by our round-the-clock customer service for all
              technical needs.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "75px",
              }}
            >
              <div style={{ flex: "1", marginRight: "20px" }}>
                <h1 style={{ textAlign: "left", fontSize: "1rem" }}>
                  Custom Web Apps
                </h1>
                <p>
                  Harness PHP open-source capabilities and Extensive Libraries
                  to Craft unique web apps.
                </p>
              </div>

              <div style={{ flex: "1", marginLeft: "20px" }}>
                <h1 style={{ textAlign: "left", fontSize: "1rem" }}>
                  Custom Web Apps
                </h1>
                <p>
                  Harness PHP open-source capabilities and Extensive Libraries
                  to Craft unique web apps.
                </p>
              </div>
            </div>
          </Col>
          <Col style={{ margin: "55px", padding: "20px" }}>
            <img
              src={PHP3}
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

          <Row
            data-aos="fade-down"
            className="align-items-center"
            style={{ margin: "0", padding: "20px" }}
          >
            <Col xs={12} md={6} lg={4} className="mb-4 mb-md-0">
              <img src={PHP2} alt="PHP Logo" className="img-fluid" />
            </Col>
            <Col xs={12} md={6} lg={8}>
              <h6 className="text-primary">Step 1</h6>
              <h2 className="h3">Project</h2>
              <p>
                Progressively faster enterprise-wide systems whereas equity
                invested web-readiness harness installed base bandwidth.
              </p>

              <h6 className="text-primary">Step 2</h6>
              <h2 className="h3">Dedicated</h2>
              <p>
                Progressively faster enterprise-wide systems whereas equity
                invested web-readiness harness installed base bandwidth.
              </p>

              <h6 className="text-primary">Step 3</h6>
              <h2 className="h3">Delivery</h2>
              <p>
                Progressively faster enterprise-wide systems whereas equity
                invested web-readiness harness installed base bandwidth.
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
                <h3 className="mb-4 text-center">
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

export default SocialMedia;
