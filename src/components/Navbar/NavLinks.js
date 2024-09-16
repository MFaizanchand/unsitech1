
import { Menu, Drawer } from "antd";
import { Link } from "react-router-dom";


import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";

import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faTachographDigital } from "@fortawesome/free-solid-svg-icons";
import { faSignature } from "@fortawesome/free-solid-svg-icons";
import { faHospital } from "@fortawesome/free-solid-svg-icons";
import { faFlaskVial } from "@fortawesome/free-solid-svg-icons";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { faPrescriptionBottleMedical } from "@fortawesome/free-solid-svg-icons/faPrescriptionBottleMedical";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faFlutter } from "@fortawesome/free-brands-svg-icons";
const NavLinks = ({ onClose }) => {
  return (
    <div className="navlink" style={{ overflow: "hidden" }}>
      {/* Drawer Component */}
       <Drawer
        style={{ padding: "0", margin: "0" }}
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={onClose !== undefined} // Controls visibility based on `onClose` prop
        bodyStyle={{ padding: 0 }}
      >
        <Menu mode="inline">
          <Menu.Item key="About">
            <Link to="/">About</Link>
          </Menu.Item>
          <Menu.SubMenu title="Services" key="Services">
            <MegaMenu />
          </Menu.SubMenu>
          <Menu.SubMenu
            style={{ backgroundColor: "white"  }}
            title="Products"
            key="Products" 
          >
            <MegaMenuProducts />
          </Menu.SubMenu>
          {/* <Menu.Item key='Portfolio'>
                        Portfolio
                    </Menu.Item> */}
          <Menu.Item key="Contact Us">
            <Link to="/contact">Contact Us</Link>
          </Menu.Item>

          <Menu.Item
            key="Demo our products"
          >
            <Link to="/get-demo">Demo our products</Link>
          </Menu.Item>
        </Menu>
      </Drawer>

      {/* Horizontal Menu for Desktop */}
      <Menu
        style={{ overflow: "visible", color: "white" }}
        className=" navlink custom-menu px-4 font-bold text-blue-900 "
        mode="horizontal"
      >
        <Menu.Item style={{}} key="About">
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
        </Menu.Item>
        <Menu.SubMenu title="Services" key="Services">
          <MegaMenu />
        </Menu.SubMenu>
        <Menu.SubMenu title="Products" key="Products">
          Products
          <MegaMenuProducts />
        </Menu.SubMenu>
        {/* <Menu.Item style={{}} key='Portfolio'>
                    Portfolio
                </Menu.Item> */}
        <Menu.Item key="Contact Us">
          <Link style={{ textDecoration: "none" }} to="/contact">
            Contact Us
          </Link>
        </Menu.Item>

        <Menu.Item
          className="text-white bg-blue-900 "
          style={{ borderRadius: 17 }}
          key="Demo our products"
        >
          <Link to="/get-demo">Demo our products</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

function MegaMenu() {
    const menuColumnStyle = {
        minWidth: '155px', // Set a fixed width for each menu column
        boxShadow: "none",
        border: "none",
        textDecoration: 'none',
    };

    const headingStyle = {
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#3c579c',
        minHeight: '40px', // Set equal height for all headings
        display: 'flex',
        alignItems: 'center'
    };
    const menuData = [
        {
            category: 'Web Development',
            key: 'web',
            items: [
                { label: 'PHP', key: 'PHP', link: '/Php' , icon:<FontAwesomeIcon icon={faPhp} />},
                { label: 'Word Press', key: 'WordPress', link: '/wordpress' , icon:<FontAwesomeIcon icon={faWordpress} /> },
                { label: 'Python', key: 'Python', link: '/python', icon:<FontAwesomeIcon icon={faPython} /> },
                { label: 'React JS', key: 'React', link: '/react' , icon:<FontAwesomeIcon icon={faReact} /> },
            ]
        },
        {
            category: 'App Development',
            key: 'mobile',
            items: [
                { label: 'Android', key: 'Android', link: '/Android' , icon:<FontAwesomeIcon icon={faAndroid} />  },
                { label: 'IOS', key: 'IOS', link: '/ios' , icon:<FontAwesomeIcon icon={faApple} />},
                { label: 'Flutter', key: 'Flutter', link: '/flutter' , icon:<FontAwesomeIcon icon={faFlutter} />},
            ]
        },
        {
            category: 'Content marketing',
            key: 'content',
            items: [
                { label: 'Digital Marketing', key: 'DigitalMarketing', link: '/digitalmarketing' , icon:<FontAwesomeIcon icon={faTachographDigital} /> },
                { label: 'Content Writing', key: 'ContentWriting', link: '/contentwriting' , icon:<FontAwesomeIcon icon={faSignature} /> },
            ]
        },
        
    ];
    const groupedMenuData = [];
    for (let i = 0; i < menuData.length; i += 3) {
        groupedMenuData.push(menuData.slice(i, i + 3));
    }
  return (
    <div style={{display:'flex', padding:10, position: 'fixed', backgroundColor:'#fff' }}>
        <Row gutter={[16, 16]}> {/* Gutter adds space between columns */}
                {menuData.map((menuGroup) => (
                    <Col sm={4}  gap={0} key={menuGroup.key}> {/* 8 spans per column, fits 3 columns in a 24-grid system */}
                        <Menu
                            style={menuColumnStyle}
                            mode='vertical'
                        width={200}
                            items={[
                                {
                                    label: (
                                        <span style={headingStyle}>
                                            {menuGroup.category}
                                        </span>
                                    ),
                                    key: menuGroup.key,
                                    type: 'group'
                                },
                                ...menuGroup.items.map(item => ({
                                    label: (
                                        <div className="menu-item-content" >
                                            
                                        <Link style={{ textDecoration: 'none' }} to={item.link} >
                                        <span style={{marginRight:3}} > {item.icon}</span>  {item.label} 
                                        </Link>
                                        </div>
                                    ),
                                    key: item.key,
                                    
                                    
                                }))
                            ]}
                        />
                    </Col>
                ))}
            </Row>
</div>
  );
}

function MegaMenuProducts() {
  const menuColumnStyle = {
      minWidth: '250px', // Set a fixed width for each menu column
      boxShadow: "none",
      border: "none",
      textDecoration: 'none',
  };

  const headingStyle = {
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#3c579c',
      minHeight: '40px', // Set equal height for all headings
      display: 'flex',
      alignItems: 'center'
  };
  const menuDataProducts = [
      {
          category: 'Management Systems',
          key: 'products',
          items: [
              { label: 'Hospital Management System', key: 'hosp', link: '/hospital' , icon:<FontAwesomeIcon icon={faHospital} />},
              { label: 'Lab Management System', key: 'lab', link: '/lab' , icon:<FontAwesomeIcon icon={faFlaskVial} />},
              { label: 'Medical Billing System', key: 'medical', link: '/medical', icon:<FontAwesomeIcon icon={faNotesMedical} /> },
              { label: 'POS SYSTEM (Cloud BASED)', key: 'pos', link: '/pos' , icon:<FontAwesomeIcon icon={faPrescriptionBottleMedical} /> },
              { label: 'POS SYSTEM (Desktop BASED)' , key: 'pos', link: '/posdes' , icon:<FontAwesomeIcon icon={faPrescriptionBottleMedical} /> },
          ]
      },
     
      
      
  ];

return (
  <div style={{display:'flex', padding:10, position: 'fixed', backgroundColor:'#fff' }}>
      <Row gutter={[16, 16]}> {/* Gutter adds space between columns */}
              {menuDataProducts.map((menuGroup) => (
                  <Col sm={4}  gap={0} key={menuGroup.key}> {/* 8 spans per column, fits 3 columns in a 24-grid system */}
                      <Menu
                          style={menuColumnStyle}
                          mode='vertical'
                      width={200}
                          items={[
                              {
                                  label: (
                                      <span style={headingStyle}>
                                          {menuGroup.category}
                                      </span>
                                  ),
                                  key: menuGroup.key,
                                  type: 'group'
                              },
                              ...menuGroup.items.map(item => ({
                                  label: (
                                      <div className="menu-item-content" >
                                          
                                      <Link style={{ textDecoration: 'none' }} to={item.link} >
                                     <span style={{marginRight:6}} > {item.icon}</span>  {item.label} 
                                      </Link>
                                      </div>
                                  ),
                                  key: item.key,
                                  
                                  
                              }))
                          ]}
                      />
                  </Col>
              ))}
          </Row>
</div>
);
}


export default NavLinks;
