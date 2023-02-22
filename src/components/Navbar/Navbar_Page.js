import React, { useState } from 'react';
import {
    Navbar,
    Nav,
    NavbarBrand,
    NavItem,
    NavLink,
    Container,
    Collapse,
} from 'reactstrap';
import ScrollspyNav from './scrollSpy';
//Import Images
import logolight from '../../assets/images/Amodius.svg';
import logodark from '../../assets/images/AmodiusDark.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

const NavbarPage = (props) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggle = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
    let targetId = props.navItems.map((item) => item.idnm);

    return (
      <React.Fragment>
          <Navbar
            expand="lg"
            fixed="top"
            className={'navbar-custom sticky sticky-dark ' + props.navClass}
          >
              <Container>
                  <NavbarBrand className="logo" href="/">
                      {props.imglight === true ? (
                        <img src={logolight} alt="" height="25" />
                      ) : (
                        <img src={logodark} alt="" height="25" />
                      )}
                  </NavbarBrand>
                  <IconButton onClick={toggle} style={{ color: props.imglight ? '#FFFFFF' : '#D50000' }} aria-label="delete" size="large">
                      <MenuIcon fontSize="inherit" />
                  </IconButton>
                  <Collapse id="navbarCollapse" isOpen={isOpenMenu} navbar>
                      <ScrollspyNav
                        scrollTargetIds={targetId}
                        scrollDuration="800"
                        headerBackground="true"
                        activeNavClass="active"
                        className="navbar-collapse"
                      >
                          <Nav navbar className="ml-auto navbar-center" id="mySidenav">
                              {props.navItems.map((item, key) => (
                                <NavItem
                                  key={key}
                                  className={item.navheading === 'Home' ? 'active' : ''}
                                >
                                    <NavLink href={'#' + item.idnm}>{item.navheading}</NavLink>
                                </NavItem>
                              ))}
                          </Nav>
                          <div className="call-no">
                              <NavLink
                                href="#"
                                className={
                                    props.isLight === true ? 'text-white' : 'text-warning'
                                }
                              >
                                  <i className="mdi mdi-phone mr-1"></i> +00 1234 5678 90
                              </NavLink>
                          </div>
                      </ScrollspyNav>
                  </Collapse>
              </Container>
          </Navbar>
      </React.Fragment>
    );
};

export default NavbarPage;
