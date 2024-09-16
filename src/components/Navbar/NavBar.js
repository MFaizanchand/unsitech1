import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Logo from '../../images/Logobg.png'; // Adjust the import path as needed
import NavLinks from './NavLinks'; // Adjust the import path as needed
import './style.css';

const Navbar = () => {
    const [top, setTop] = useState(true);
    const [drawerVisible, setDrawerVisible] = useState(false);

    const handleClick = () => {
        setDrawerVisible(!drawerVisible);
    };

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };

        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <nav
            style={{ height: '120px' }}
            className={`w-full z-30 transition duration-300 ease-in-out ${!top ? 'shadow-lg' : ''}`}
        >
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
                    <img src={Logo} style={{ width: 100 }} alt="UNSI TECH" />
                </div>
                {/* Hamburger Button */}
                <Button
                    className="p-2 rounded-lg lg:hidden text-blue-900"
                    onClick={handleClick}
                >
                    <MenuOutlined style={{ fontSize: '24px', color: '#000' }} />
                </Button>
                {/* Horizontal Menu for Desktop */}
                <div className="hidden lg:flex">
                    <NavLinks />
                </div>
            </div>
            {/* Drawer Component */}
            {drawerVisible && (
                <div className="lg:hidden">
                    <NavLinks onClose={() => setDrawerVisible(false)} />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
