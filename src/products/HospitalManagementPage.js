import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from 'react';
import android1 from "../images/doctor-nurses-special-equipment-removebg-preview.png";
import android2 from "../images/Hospital-Management-System.jpg";
import android5 from "../images/doc.jpg";
import android4 from "../images/docs.jpg";
import { Button } from "react-bootstrap";

import NavBar from '../components/Navbar/NavBar';
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";
import MetaTags from "react-meta-tags";
function HospitalManagementPage() {
  const labs = [
    {
      id: 1,
      name: "Appointment management",
    },
    {
      id: 2,
      name: "Inventory",
    },
    {
      id: 3,
      name: "Billing management",
    },
    {
      id: 4,
      name: "Lab management",
    },
    {
      id: 5,
      name: "Analytics tools",
    },
    {
      id: 6,
      name: "Patient registration",
    },
    {
      id: "7",
      name: "Pharmacy management",
    },
    {
      id: 8,
      name: "Staff Management",
    },
    {
      id: 9,
      name: "Prescription management",
    },
    {
      id: 10,
      name: "Data security",
    },
    {
      id: 11,
      name: "Improved services",
    },
    {
      id: 11,
      name: "Customer service",
    },
  ];
  return (
    <div>
      <NavBar />
      <Container fluid style={{ padding: '0' , margin:'0' , maxWidth:'100%' }}>
      <MetaTags>
          <title>UNSI | Hospital management system</title>
          <meta name="HMS SERVICE" content="Some description." />
          <meta property="og:title" content="MyApp" />
          <meta property="og:image" content="path/to/image.jpg" />
        </MetaTags>
        <Row className="data-section" data-aos="fade-right" style={{ margin: "0", paddingTop: "70px" }}>
          <Col xs={12} md={8} lg={6} style={{ paddingTop: "25px", padding: "20px" }}>
            <h1 className="text-blue-900" style={{ textAlign: "left", fontSize: "3.4rem", fontWeight: "bold", marginTop: '32px' }}>
              BEST HOSPITAL MANAGEMENT SYSTEM
            </h1>
          </Col>
          <Col xs={12} md={8} lg={6} style={{ paddingTop: "35px", padding: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={android1} alt="Hospital Management" style={{ maxWidth: '100%', height: '350px' }} />
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
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
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
        {/* <Row style={{ margin: "0", paddingTop: "50px", minHeight: "100vh" }} className="data-section">
  <Col xs={12}>
    <h2 style={{ textAlign: 'center', color: 'white', fontSize: '1.8rem' }}>MAIN KEY FEATURES</h2>
  </Col>

  {/* Row 1 */}
  {/* <Row style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
  <Col xs={6} sm={4} md={3} style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
  <div style={{ backgroundColor: '#0D47A1', height: '65px', width: '175px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h5 style={{ margin: '0', color: 'white', textAlign: 'center' }}>Appointment management</h5>
  </div>
</Col>
<Col xs={6} sm={4} md={3} style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
  <div style={{ backgroundColor: '#0D47A1', height: '65px', width: '175px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h5 style={{ margin: '0', color: 'white', textAlign: 'center' }}>Inventory</h5>
  </div>
</Col>
<Col xs={6} sm={4} md={3} style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
  <div style={{ backgroundColor: '#0D47A1', height: '65px', width: '175px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h5 style={{ margin: '0', color: 'white', textAlign: 'center' }}>Billing management</h5>
  </div>
</Col>
<Col xs={6} sm={4} md={3} style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
  <div style={{ backgroundColor: '#0D47A1', height: '65px', width: '175px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h5 style={{ margin: '0', color: 'white', textAlign: 'center' }}>Lab management</h5>
  </div>
</Col>
  </Row>

  {/* Row 2 */}
  {/* <Row style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
  <Col xs={6} sm={4} md={3} style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
  <div style={{ backgroundColor: '#0D47A1', height: '65px', width: '175px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h5 style={{ margin: '0', color: 'white', textAlign: 'center' }}>Analytics tools</h5>
  </div>
</Col>
<Col xs={6} sm={4} md={3} style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
  <div style={{ backgroundColor: '#0D47A1', height: '65px', width: '175px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' , padding:'5px' }}>
    <h5 style={{ margin: '0', color: 'white', textAlign: 'center' }}>Patient registration</h5>
  </div>
</Col>
<Col xs={6} sm={4} md={3} style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
  <div style={{ backgroundColor: '#0D47A1', height: '65px', width: '175px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h5 style={{ margin: '0', color: 'white', textAlign: 'center' }}>Pharmacy management</h5>
  </div>
</Col>
<Col xs={6} sm={4} md={3} style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
  <div style={{ backgroundColor: '#0D47A1', height: '65px', width: '175px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' , padding:'4px' }}>
    <h5 style={{ margin: '0', color: 'white', textAlign: 'center' }}>Staff Management</h5>
  </div>
</Col>
  </Row> */}

  {/* Row 3 */}
  {/* <Row style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
  <Col xs={6} sm={4} md={3} style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
  <div style={{ backgroundColor: '#0D47A1', height: '65px', width: '175px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h5 style={{ margin: '0', color: 'white', textAlign: 'center' }}>Prescription management</h5>
  </div>
</Col>
<Col xs={6} sm={4} md={3} style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
  <div style={{ backgroundColor: '#0D47A1', height: '65px', width: '175px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h5 style={{ margin: '0', color: 'white', textAlign: 'center' }}>Data security</h5>
  </div>
</Col>
<Col xs={6} sm={4} md={3} style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
  <div style={{ backgroundColor: '#0D47A1', height: '65px', width: '175px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h5 style={{ margin: '0', color: 'white', textAlign: 'center' }}>Improved services</h5>
  </div> */}
{/* </Col>
<Col xs={6} sm={4} md={3} style={{ display: 'flex', justifyContent: 'center', paddingBottom: '10px' }}>
  <div style={{ backgroundColor: '#0D47A1', height: '65px', width: '175px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h5 style={{ margin: '0', color: 'white', textAlign: 'center' }}>Customer service</h5>
  </div>
</Col>
<Button */}
              {/* variant="success"
              style={{
                width: 200,
                height: 60,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Book a Demo
            </Button>
  </Row> */}
{/* {/* </Row> */ }


        <Row data-aos='fade-left' style={{ padding: '10px', paddingTop: '0px' }}>
        <Col xs={12} md={8} lg={6} style={{ padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: '100vh' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bolder', marginBottom: '10px' }}>
      HOSPITAL MANAGEMENT SYSTEM
    </h1>
    <p style={{ fontSize: '1rem', lineHeight: '1.5rem' }}>
      Our comprehensive Hospital Management System (HMS) is designed to streamline the operations of modern healthcare facilities. With robust modules for appointment scheduling, patient records, billing, and inventory management, our HMS ensures seamless coordination between departments, improving efficiency and patient care. Tailored to meet the unique needs of hospitals, clinics, and other healthcare providers, this solution integrates cutting-edge technology with user-friendly interfaces to deliver unmatched performance and security.
    </p>
  </div>
</Col>


          <Col xs={12} md={4} lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
            <img src={android5} alt='PHP Logo' style={{ width: '100%', height: 'auto' }} />
          </Col>
        </Row>

        <Row data-aos='fade-left' style={{ margin: '20px', padding: '10px' }}>
          <Col xs={12} md={6} lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
            <img src={android4} alt='PHP Logo' style={{ width: '90%', height: 'auto' }} />
          </Col>
          <Col xs={12} md={6} lg={6} style={{ padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bolder' }}>
            Key Features of Our Hospital Management System
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: '1.5rem' }}>
            Our Hospital Management System offers a robust suite of features designed to optimize healthcare operations. From comprehensive patient records and appointment scheduling to seamless billing, inventory management, and staff coordination, our HMS integrates essential functions into a single platform. With advanced security, user-friendly interfaces, and powerful analytics, it ensures efficient management of hospital resources and improved patient care.            </p>
          </Col>
        </Row>

        <Row data-aos="fade-left" style={{ margin: "0", padding: "10px", position: "relative" }}>
          <Col xs={12} md={6} lg={6} style={{ padding: "15px", display: "flex", flexDirection: "column", justifyContent: "flex-start", textAlign: "left", backgroundColor: "beige", position: "relative" }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
            Streamline Your Hospital Operations with Ease
            </h1>
            <p style={{ fontSize: "1rem", lineHeight: "1.5rem" }}>
            Experience a new level of efficiency with our Hospital Management System, crafted to streamline every aspect of your healthcare facility. Our HMS simplifies complex processes such as patient management, clinical workflows, and financial operations, all while enhancing communication and collaboration. With real-time data, secure access, and customizable features, it empowers your team to deliver exceptional care and manage hospital resources effectively.            </p>
          </Col>
          <Col xs={12} md={6} lg={6} style={{ padding: "0", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", position: "relative" }}>
            <img src={android2} alt="PHP Logo" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
          </Col>
        </Row>

        <Footer />
      </Container>
    </div>
  );
}

export default HospitalManagementPage;
