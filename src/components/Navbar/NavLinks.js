import React from 'react';
import { Menu, Space } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

const NavLinks = () => {
    return (
        <div style={{ overflow: 'visible' }}> {/* Ensure the container allows overflow */}
            <Menu className="custom-menu px-4 font-bold text-blue-900 hover:text-blue-900" mode='horizontal'>
                <Menu.Item key='About'>
                <Link to="/Intro">About</Link> 
                </Menu.Item>
                <Menu.SubMenu style={{backgroundColor:'white'}} title="Services" key='Services'>
                    <MegaMenu />
                </Menu.SubMenu>
                <Menu.Item key='Portfolio'>
                    Portfolio
                </Menu.Item>
                <Menu.Item key='Contact Us'>
                    Contact Us
                </Menu.Item>
                <Menu.Item className='' style={{ backgroundColor: 'blue',  color:'white' , borderRadius:17 }} key='Demo our products'>
                    Demo our products
                </Menu.Item>
            </Menu>
        </div>
    );
};

function MegaMenu() {
    return (
        <div style={{ display: 'flex', minWidth: '300px', }}> {/* Ensure enough width for MegaMenu */}
            <Space style={{ }}  direction='horizontal' size={0}>
                <Menu style={{ width:110, boxShadow:"none" , border:"none" }}   mode='vertical'>
                    <Menu.Item key="PHP1">PHP</Menu.Item>
                    <Menu.Item key="PHP2">PYTHON</Menu.Item>
                    <Menu.Item key="PHP3">C++</Menu.Item>
                    <Menu.Item key="PHP4">JAVA</Menu.Item>
                    <Menu.Item key="PHP5">REACT</Menu.Item>
                    <Menu.Item key="PHP6">NODE</Menu.Item>
                </Menu>
                <Menu style={{ width: 110 , boxShadow:"none" , border:"none" }} className='nav' mode='vertical'>
                    <Menu.Item key="PHP7">GRAPHIC</Menu.Item>
                    <Menu.Item key="PHP8">MACHINE</Menu.Item>
                    <Menu.Item key="PHP9">CLOUD</Menu.Item>
                    <Menu.Item key="PHP10">LARAVEL</Menu.Item>
                    <Menu.Item key="PHP11">Others</Menu.Item>
                    <Menu.Item key="PHP12">PHP</Menu.Item>
                </Menu>
                <Menu style={{ width: 110 ,  boxShadow:"none" , border:"none" }} className='nav' mode='vertical'>
                    <Menu.Item key="PHP13">PHP</Menu.Item>
                    <Menu.Item key="PHP14">MY SQL</Menu.Item>
                    <Menu.Item key="PHP15">REACT</Menu.Item>
                    <Menu.Item key="PHP16">ANGULAR</Menu.Item>
                    <Menu.Item key="PHP17">NODE</Menu.Item>
                    <Menu.Item key="PHP18">EXPRESS</Menu.Item>
                </Menu>
               
            </Space>
        </div>
    );
}

export default NavLinks;
