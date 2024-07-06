import React from 'react';
import {
  Nav,
  Navbar,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useLocation } from "react-router-dom";
import { Home } from '@mui/icons-material';
import resumeData from '../../utils/resumeData';
import './Header.css';

const Header = () => {
  const location = useLocation();
   
  const pathName = location.pathname;

  return (
    <Navbar expand="lg" sticky='top' className='header'>
      <Container>
        {/* Home link */}
        <Nav.Link as={NavLink} to="/resume" className='header_navlink'>
          <Navbar.Brand className='header_home'>
            <Home />
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className='header_left'>
            {/* Resume Link */}
            <Nav.Link
              as={NavLink}
              to="/resume"
              className={pathName === '/resume' ? 'header_link_active' : 'header_link'}
            >
              Resume
            </Nav.Link>

            {/* Portfolio Link */}
            <Nav.Link
              as={NavLink}
              to="/portfolio"
              className={pathName === '/portfolio' ? 'header_link_active' : 'header_link'}
            >
              Portfolio
            </Nav.Link>
          </Nav>

          <div className='header_right'>
            {Object.keys(resumeData.social).map(key => (
              <a href={resumeData.social[key].link} target='_blank' rel='noopener noreferrer' key={key}>
                {resumeData.social[key].icon}
              </a>
            ))}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;




