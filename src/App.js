import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import './theme.scss';
const NavbarPage = React.lazy(() => import('./components/Navbar/Navbar_Page'));
const Section = React.lazy(() => import('./Section'));
const Service = React.lazy(() => import('./components/Service/service'));
const About = React.lazy(() => import('./components/About/about'));
const Feature = React.lazy(() => import('./components/Features/feature'));
const Counter = React.lazy(() => import('./components/Counter/counter'));
const Clients = React.lazy(() => import('./components/Clients/Clients'));
const GetInTouch = React.lazy(() => import('./components/GetInTouch/GetInTouch'));
const Subscribe = React.lazy(() => import('./components/Subscribe/Subscribe'));
const Footer = React.lazy(() => import('./components/Footer/footer'));

const App = (props) => {
  const [navItems, setNavItems] = useState([
    { id: 1, idnm: 'home', navheading: 'Home' },
    { id: 2, idnm: 'services', navheading: 'Projects' },
    { id: 3, idnm: 'about', navheading: 'About' },
    { id: 4, idnm: 'getInTouch', navheading: 'Contacts' },
    { id: 5, idnm: 'clients', navheading: 'Clients' },
  ]);
  const [pos, setPos] = useState(document.documentElement.scrollTop );
  const [imglight, setImgLight] = useState(true);
  const [navClass, setNavClass] = useState('navbar-light');

  const scrollNavigation = () => {
    let scrollup = document.documentElement.scrollTop;

    if (scrollup > pos) {
      setNavClass('navbar-light nav-sticky');
      setImgLight(false);
    } else {
      setNavClass('navbar-light');
      setImgLight(true);
    }
  };

  const Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollNavigation, true);
    return () => window.removeEventListener('scroll', scrollNavigation, true);
  }, [pos]);

  return (
    <React.Fragment>
      <Suspense fallback={Loader()}>
        {/* Importing Navbar */}
        <NavbarPage navItems={navItems} navClass={navClass} imglight={imglight} isLight={true} />

        {/* Importing section */}
        <Section />

        {/* Importing service */}
        <Service />

        {/* Importing about us */}
        <About />

        {/* Importing feature */}
        <Feature />

        {/* Importing counter */}
        <Counter />

        {/* Importing get in touch */}
        <GetInTouch />

        {/* Importing clients */}
        <Clients />

        {/* Importing subscribe */}
        {/*<Subscribe/>*/}

        {/* Importing footer */}
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};

export default withRouter(App);
