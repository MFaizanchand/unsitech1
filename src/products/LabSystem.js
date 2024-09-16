import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from 'react';
import { Button } from "react-bootstrap";
import labimg from "../images/lab/labimage.jpeg";
import labimg2 from "../images/lab/labimg2.jpeg";
import labimg5 from "../images/lab/labimg5.webp";
import labimg4 from "../images/lab/labimg4.jpeg";
import NavBar from '../components/Navbar/NavBar';
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";
import MetaTags from "react-meta-tags";
function LabSystem() {
  const labs =[
    {
      id: 1, 
      name: 'Manage Patient Profile'
    },
    {
      id: 2, 
      name: 'Manage Doctor Profile'
    },
    {
      id: 3, 
      name: 'Manage Doctor Commision'
    },
    {
      id: 4, 
      name: 'Manage Culture'
    },
    {
      id: 5, 
      name: 'Manage Tests'
    },
    {
      id: 6, 
      name: 'Manage Lab Invnetory'
    },
    {
      id: '7', 
      name: 'Paitent Appointment'
    },
    {
      id: 8, 
      name: 'Appointment History'
    },
    {
      id: 9, 
      name: 'Patient Medical Record'
    },
    {
      id: 10, 
      name: 'Manage Payments'
    },
    {
      id: 11, 
      name: 'Multi User Role'
    },
  ]
  return (
    <div>
    <NavBar />
    <Container fluid style={{ padding: '0' , margin:'0' , maxWidth:'100%'  }}>
    <MetaTags>
          <title>UNSI | Lab management system</title>
          <meta name="LSM SERVICE" content="Some description." />
          <meta property="og:title" content="MyApp" />
          <meta property="og:image" content="path/to/image.jpg" />
        </MetaTags>
      <Row className="data-section" data-aos="fade-right" style={{ margin: "0", paddingTop: "70px"  }}>
        <Col xs={12} md={8} lg={6} style={{ paddingTop: "25px", padding: "20px" }}>
          <h1 className="text-blue-900" style={{ textAlign: "left", fontSize: "3.4rem", fontWeight: "bold", marginTop: '32px' }}>
            BEST LAB SYSTEM MANAGEMENT
          </h1>
        </Col>
        <Col xs={12} md={8} lg={6} style={{ paddingTop: "25px", padding: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={labimg4} alt="Hospital Management" style={{ maxWidth: '100%', height: 'auto' }} />
        </Col>
      </Row>

    
        

        
      <Row style={{ margin: "0", paddingTop: "50px", minHeight: "100vh" }} className="data-section">
          <Col xs={12}>
          <h2 style={{ textAlign: 'center', color: 'white', fontSize: '1.8rem' }}>Main Key Features</h2>
          </Col>
         
            {labs.map((lab, index) => (
              <Col xs={6} sm={4} md={3} key={lab.id} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
               <div style={{ backgroundColor: '#0D47A1', color:'#fff', height: '60px', width: '300px', borderRadius: '12px', alignItems:'center', display:'flex', justifyContent:'center', padding:'5px' }}>
                  <span style={{fontSize:'20', fontWeight:'bold', padding:2 , textAlign:'center'}}>{lab.name}</span>
                </div>
              </Col>
            ))}
            <Col xs={12} sm={12} md={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button variant="success" style={{width:200, height:60, fontSize:18,fontWeight:'bold'}}>Book a Demo</Button>
            </Col>
          </Row>
        
     

      <Row data-aos='fade-left' style={{ padding: '10px', paddingTop: '80px' }}>
        <Col xs={12} md={8} lg={6} style={{ padding: '15px', textAlign: 'left' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bolder' }}>
            LAB MANAGEMENT SYSTEM
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: '1.5rem' }}>
          A Lab Management System (LMS) is an advanced software solution designed to streamline and automate a wide range of laboratory operations. It enables efficient data management allowing laboratories to securely store, organize, and access important data. Sample tracking features ensure that every specimen is accounted for throughout its lifecycle, from collection to testing and disposal. The system also enhances inventory control, helping labs monitor supplies, reagents, and equipment, reducing the risk of stockouts or overordering. Additionally, an LMS supports workflow automation , ensuring that routine processes—such as reporting, scheduling, and quality control—are carried out with accuracy and minimal human intervention, improving overall productivity and reducing the potential for errors. 
By centralizing these critical tasks, an LMS provides a comprehensive solution for labs, enabling better resource management,  and more efficient operations.             </p>
        </Col>
        <Col xs={12} md={4} lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
          <img src={labimg5} alt='PHP Logo' style={{ width: '70%', height: 'auto' }} />
        </Col>
      </Row>

      <Row data-aos='fade-left' style={{ margin: '20px', padding: '10px' }}>
        <Col xs={12} md={6} lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
          <img src={labimg2} alt='PHP Logo' style={{ width: '90%', height: 'auto' }} />
        </Col>
        <Col xs={12} md={6} lg={6} style={{ padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bolder' }}>
          Key Features of Our Lab Management System
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: '1.5rem' }}>
          Sample Management
Sample Tracking: Monitor the location, status, and history of all samples.
Barcode Integration: Use barcodes or QR codes to label and track samples.
Chain of Custody: Maintain a record of all individuals who handle or transfer samples.

Data Entry and Validation: Input data manually or import from instruments, ensuring data integrity.
Database Integration: Connect to external databases for data import/export.
Inventory Management
Reagent and Consumable Tracking: Monitor the usage, stock levels, and expiry dates of chemicals, reagents, and other lab consumables.
Automated Inventory Alerts         </p>
        </Col>
      </Row>

      <Row data-aos="fade-left" style={{ margin: "0", padding: "10px", position: "relative" }}>
        <Col xs={12} md={6} lg={6} style={{ padding: "15px", display: "flex", flexDirection: "column", justifyContent: "flex-start", textAlign: "left", backgroundColor: "beige", position: "relative" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
          Streamline Your Laboratory Operations with Ease          </h1>
          <p style={{ fontSize: "1rem", lineHeight: "1.5rem" }}>
          Streamlining your laboratory operations has never been easier with the right tools and strategies in place. By adopting modern technologies, automating repetitive tasks, and optimizing workflows, you can enhance accuracy, reduce errors, and improve overall efficiency. Whether it's managing inventory, tracking samples, or ensuring compliance, streamlined processes not only save time and costs but also empower your team to focus on critical research and innovation. Transform your lab into a well-oiled machine, ready to meet the demands of today's fast-paced scientific landscape.          </p>
        </Col>
        <Col xs={12} md={6} lg={6} style={{ padding: "0", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", position: "relative" }}>
          <img src={labimg} alt="PHP Logo" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
        </Col>
      </Row>

      <Footer />
    </Container>
  </div>
  )
}

export default LabSystem
