import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import img1 from "../images/POS/POSMAIN.jpeg";
import img2 from "../images/POS/ledger.png";
import img3 from "../images/POS/Barcode-Scanning-in-the-Warehouse-scaled.jpeg";
import NavBar from "../components/Navbar/NavBar";
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";
import MetaTags from "react-meta-tags";
function POS() {
  const labs = [
    {
      id: 1,
      name: "Item Profile",
    },
    {
      id: 2,
      name: "Customer Profile",
    },
    {
      id: 3,
      name: "Supplier Profile",
    },
    {
      id: 4,
      name: "Purchase Voucher",
    },
    {
      id: 5,
      name: "Purchase Return",
    },
    {
      id: 6,
      name: "Sales Return",
    },
    {
      id: "7",
      name: "Credit/Cash Sales",
    },
    {
      id: 8,
      name: "Outstanding Invoices",
    },
    {
      id: 9,
      name: "Invoice Aging",
    },
    {
      id: 10,
      name: "Customer Payments",
    },
    {
      id: 11,
      name: "Supplier Payments",
    },
    {
      id: 12,
      name: "Expense Voucher",
    },
  ];

  return (
    <div>
      <NavBar />
      <Container fluid style={{ padding: "0", margin: "0", maxWidth: "100%" }}>
      <MetaTags>
          <title>UNSI | POS (Cloud)</title>
          <meta name="HMS SERVICE" content="Some description." />
          <meta property="og:title" content="MyApp" />
          <meta property="og:image" content="path/to/image.jpg" />
        </MetaTags>
        <Row
          className="data-section"
          data-aos="fade-right"
          style={{ margin: "0", paddingTop: "70px" }}
        >
          <Col
            xs={12}
            md={8}
            lg={5}
            style={{ paddingTop: "15px", padding: "20px" }}
          >
            <h1
              className="text-blue-900"
              style={{
                textAlign: "left",
                fontSize: "3.5rem",
                fontWeight: "bold",
                marginTop: "32px",
              }}
            >
              BEST POS SYSTEM MANAGEMENT CLOUD BASED
            </h1>
          </Col>
          <Col
            xs={12}
            md={8}
            lg={7}
            style={{
              paddingTop: "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              
            }}
          >
            <img
              src={img1}
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
                padding: "30px",
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
                  style={{
                    fontSize: "20",
                    fontWeight: "bold",
                    padding: 2,
                    textAlign: "center",
                  }}
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
            style={{ padding: "25px", textAlign: "left" }}
          >
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
              POS Management System
            </h1>
            <p style={{ fontSize: "1rem", lineHeight: "1.5rem" }}>
              Our state-of-the-art POS Pharmacy Management System is built to
              optimize the daily operations of pharmacies, ensuring a smooth,
              efficient workflow. Equipped with advanced features for sales
              tracking, inventory management, prescription processing, and
              billing, our system simplifies the management of your pharmacy.
              Tailored specifically for retail pharmacies, it enhances customer
              service by providing accurate, real-time data, minimizing errors,
              and speeding up transactions. With an intuitive interface and
              seamless integration with healthcare systems, our solution
              guarantees better control, compliance, and security, helping you
              manage your pharmacy with ease and confidence.
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
              src={img2}
              alt="PHP Logo"
              style={{ width: "80%", height: "auto" }}
            />
          </Col>
        </Row>

        <Row
          data-aos="fade-left"
          style={{ margin: "20px", padding: "10px", paddingTop: "70px" }}
        >
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
              Key Features of Our POS Management System
            </h1>
            <p style={{ fontSize: "1rem", lineHeight: "1.5rem" }}>
              Sales Tracking and Reporting Real-Time Sales Monitoring: Track
              transactions and sales performance instantly. Detailed Sales
              Reports: Generate comprehensive reports on sales trends,
              top-selling products, and sales by employee. Inventory Management
              Real-Time Inventory Updates: Monitor stock levels and receive
              alerts for low inventory. Automated Reordering: Set up automatic
              reorder points to prevent stockouts and overstock situations.
              Customer Management Customer Profiles: Maintain detailed profiles
              with purchase history and preferences. Loyalty Programs: Implement
              and manage customer loyalty programs to enhance customer
              retention.
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
              Streamline Your Retail Operations with Ease
            </h1>
            <p style={{ fontSize: "1rem", lineHeight: "1.5rem" }}>
              Optimizing your retail operations has never been simpler with the
              right POS system at your fingertips. By leveraging advanced
              point-of-sale technology, automating manual processes, and
              integrating key operational workflows, you can significantly
              enhance efficiency, reduce errors, and accelerate transaction
              times. Whether it’s managing sales, tracking inventory, or
              analyzing customer data, streamlined POS processes not only cut
              costs and save time but also enable your business to deliver a
              superior customer experience. Transform your retail operations
              into a seamless, high-performance environment, ready to meet the
              demands of today’s dynamic market
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
              src={img1}
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

export default POS;
