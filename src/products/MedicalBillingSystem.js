import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

import img3 from "../images/medicalbilling/martha-dominguez-de-gouveia-nMyM7fxpokE-unsplash.jpg";
import img4 from "../images/medicalbilling/national-cancer-institute-NFvdKIhxYlU-unsplash.jpg";
import img5 from "../images/medicalbilling/billing dashboard.png";
import img6 from "../images/medicalbilling/medical-enrollment-form-document-medicare-concept.jpg"
import NavBar from "../components/Navbar/NavBar";
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";
import MetaTags from "react-meta-tags";
function MedicalBillingSystem() {
  const labs = [
    {
      id: 1,
      name: "Manage Items",
    },
    {
      id: 2,
      name: "Manage Customers",
    },
    {
      id: 3,
      name: "Manage Suppliers",
    },
    {
      id: 4,
      name: "Manage Manufactures",
    },
    {
      id: 5,
      name: "Manage Doctors",
    },
    {
      id: 6,
      name: "Manage Patient",
    },
    {
      id: "7",
      name: "Manage Item Batches",
    },
    {
      id: 8,
      name: "Manage Expiry Item",
    },
    {
      id: 9,
      name: "Manage Purchases",
    },
    {
      id: 10,
      name: "Manage Purchase Return",
    },
    {
      id: 11,
      name: "Manage Sales",
    },
    {
      id: 11,
      name: "Manage Sales Return",
    },
  ];
  return (
    <div>
      <NavBar />
      <Container fluid style={{ padding: "0", margin: "0", maxWidth: "100%" }}>
      <MetaTags>
          <title>UNSI | Medical Billing System</title>
          <meta name="HMS SERVICE" content="Some description." />
          <meta property="og:title" content="MyApp" />
          <meta property="og:image" content="path/to/image.jpg" />
        </MetaTags>
        <Row
          className="data-section"
          data-aos="fade-right"
          style={{ margin: "0", paddingTop: "40px" }}
        >
          <Col
            xs={12}
            md={8}
            lg={6}
            style={{ paddingTop: "25px", padding: "20px" }}
          >
            <h1
              className="text-blue-900"
              style={{
                textAlign: "left",
                fontSize: "3.4rem",
                fontWeight: "bold",
                marginTop: "32px",
              }}
            >
              BEST MEDICAL BILLING SYSTEM MANAGEMENT
            </h1>
          </Col>
          <Col
            xs={12}
            md={8}
            lg={6}
            style={{
              paddingTop: "25px",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={img5}
              alt="Hospital Management"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
        </Row>

        <Row
          style={{ margin: "0", paddingTop: "50px", minHeight: "100vh" }}
          className="data-section"
        >
          <Col xs={12}>
            <h2
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "1.8rem",
              }}
            >
              Main Key Features
            </h2>
          </Col>

          {labs.map((lab, index) => (
            <Col
              xs={6}
              sm={4}
              md={3}
              key={lab.id}
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#0D47A1",
                  color: "#fff",
                  height: "60px",
                  width: "300px",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
                  padding: "5px",
                }}
              >
                <span
                  style={{ fontSize: "20", fontWeight: "bold", padding: 2 , textAlign:'center' }}
                >
                  {lab.name}
                </span>
              </div>
            </Col>
          ))}
          <Col
            xs={12}
            sm={12}
            md={12}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              variant="success"
              style={{
                width: 200,
                height: 60,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Book a Demo
            </Button>
          </Col>
        </Row>

        <Row
          data-aos="fade-left"
          style={{ padding: "10px", paddingTop: "80px" }}
        >
          <Col
            xs={12}
            md={8}
            lg={6}
            style={{ padding: "15px", textAlign: "left" }}
          >
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
              BILLING MANAGEMENT SYSTEM
            </h1>
            <p style={{ fontSize: "1rem", lineHeight: "1.5rem" }}>
              Our advanced Billing Management System is built to simplify and
              automate the financial processes of any organization. With
              powerful features for invoicing, payment tracking, expense
              management, and reporting, this system ensures smooth and accurate
              financial operations. Tailored for businesses of all sizes, it
              provides real-time visibility into transactions, enhances
              accountability, and reduces manual errors. Combining
              state-of-the-art technology with an intuitive interface, our
              Billing Management System offers a secure, efficient solution to
              optimize your billing workflows and ensure financial accuracy.{" "}
            </p>
          </Col>
          <Col
            xs={12}
            md={4}
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <img
              src={img6}
              alt="PHP Logo"
              style={{ width: "80%", height: "auto" }}
            />
          </Col>
        </Row>

        <Row data-aos="fade-left" style={{ margin: "20px", padding: "10px" }}>
          <Col
            xs={12}
            md={6}
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <img
              src={img3}
              alt="PHP Logo"
              style={{ width: "90%", height: "auto" }}
            />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={6}
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
              Key Features of Our Billing Management System{" "}
            </h1>
            <p style={{ fontSize: "1rem", lineHeight: "1.5rem" }}>
              Invoice Generation and Processing Automated Invoice Creation:
              Generate accurate invoices based on predefined templates and
              billing rules. Recurring Billing Set up automatic recurring
              invoices for subscription-based services. Multi-Currency Support
              Real-Time Payment Updates: Track payments and outstanding balances
              instantly. Expense Categorization: Organize and track business
              expenses for financial clarity. Automated Tax Calculations: Apply
              relevant taxes based on location and service type. Tax Compliance:
              Ensure compliance with local tax regulations. Financial Reports:
              Generate real-time financial statements. Customer Insights:
              Analyze billing data to identify trends and improve customer
              engagement. Seamless Integration: Sync billing data with popular
              accounting software for streamlined financial management. Secure
              Transactions: Ensure all billing information and payment data are
              encrypted and stored securely.
            </p>
          </Col>
        </Row>

        <Row
          data-aos="fade-left"
          style={{ margin: "0", padding: "10px", position: "relative" }}
        >
          <Col
            xs={12}
            md={6}
            lg={6}
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              textAlign: "left",
              backgroundColor: "beige",
              position: "relative",
            }}
          >
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
              Streamline Your Medical Billing Operations with Ease
            </h1>
            <p style={{ fontSize: "1rem", lineHeight: "1.5rem" }}>
              Streamline Your Medical Billing Operations with Ease Optimizing
              your medical billing operations has never been simpler with the
              right tools and strategies at your fingertips. By leveraging
              advanced billing software, automating manual processes, and
              integrating key financial workflows, you can significantly enhance
              accuracy, reduce claim rejections, and accelerate payment cycles.
              Whether it's managing invoices, tracking payments, or ensuring
              regulatory compliance, streamlined billing processes not only cut
              costs and save time but also enable healthcare providers to focus
              on delivering quality patient care. Transform your billing
              department into a seamless operation, ready to meet the demands of
              today's fast-paced healthcare environment.
            </p>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={6}
            style={{
              padding: "0",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              position: "relative",
            }}
          >
            <img
              src={img4}
              alt="PHP Logo"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Col>
        </Row>

        <Footer />
      </Container>
    </div>
  );
}

export default MedicalBillingSystem;
