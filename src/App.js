import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import './theme.scss';
import {NAV_ITEMS} from "./helpers/constants";
const NavbarPage = React.lazy(() => import('./components/Navbar/Navbar_Page'));
const Section = React.lazy(() => import('./components/Section/Section'));
const Service = React.lazy(() => import('./components/Service/service'));
const About = React.lazy(() => import('./components/About/about'));
const Feature = React.lazy(() => import('./components/Features/feature'));
const Counter = React.lazy(() => import('./components/Counter/counter'));
const Clients = React.lazy(() => import('./components/Clients/Clients'));
const GetInTouch = React.lazy(() => import('./components/GetInTouch/GetInTouch'));
const Subscribe = React.lazy(() => import('./components/Subscribe/Subscribe'));
const Footer = React.lazy(() => import('./components/Footer/footer'));

const App = (props) => {
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

  useEffect(() => {
    window.addEventListener('scroll', scrollNavigation, true);
    return () => window.removeEventListener('scroll', scrollNavigation, true);
  }, [pos]);

  return (
    <>
      <Suspense>
        {/* Importing Navbar */}
        <NavbarPage navItems={NAV_ITEMS} navClass={navClass} imglight={imglight} isLight={true} />

        {/* Importing section */}
        <Section />

        {/* Importing service */}
        <Service />

        {/* Importing about us */}
        <About />

        {/* Importing feature */}
        <Feature />

        {/* Importing counter */}
        {/*<Counter />*/}

        {/* Importing get in touch */}
        <GetInTouch />

        {/* Importing clients */}
        {/*<Clients />*/}

        {/* Importing subscribe */}
        {/*<Subscribe/>*/}

        {/* Importing footer */}
        <Footer />
      </Suspense>
    </>
  );
};

export default withRouter(App);
