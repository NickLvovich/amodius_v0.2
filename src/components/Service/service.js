import React from 'react';
import { Container, Row } from "reactstrap";
//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";
import SchoolIcon from '@mui/icons-material/School';
import CampaignIcon from '@mui/icons-material/Campaign';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PaletteIcon from '@mui/icons-material/Palette';

function Service() {
    const services = [
        { icon: <CampaignIcon style={{ marginLeft: 0, marginTop: 0, color: '#fff', width: 45, height: 45 }} />, title: "Hosting promotion", desc: "Promotion of socio-professional integration, analyze and deal with the issues of hosting and asylum for Ukrainian refugees." },
        { icon: <SchoolIcon style={{ marginLeft: 0, marginTop: 0, color: '#fff', width: 45, height: 45 }} />, title: "Educational Guidance", desc: "Support of the interactive process through the organization of various educational online and offline courses." },
        { icon: <AccountBalanceIcon style={{ marginLeft: 0, marginTop: 0, color: '#fff', width: 45, height: 45 }} />, title: "Multicultural Integration", desc: "Movement of multicultural values among adults and children." },
        { icon: <TipsAndUpdatesIcon style={{ marginLeft: 0, marginTop: 0, color: '#fff', width: 45, height: 45 }} />, title: "Digital Intelligence", desc: "Distribution of digital tools and skills among the population." },
        { icon: <PsychologyIcon style={{ marginLeft: 0, marginTop: 0, color: '#fff', width: 45, height: 45 }} />, title: "Psychological support", desc: "Analyzing and providing solutions to issues relating to mental and physical health through support and accompaniment." },
        { icon: <PaletteIcon style={{ marginLeft: 0, marginTop: 0, color: '#fff', width: 45, height: 45 }} />, title: "Art Diverse", desc: "Development of Culture and Art through any form of collaborations." },
    ];

    return (
      <React.Fragment>
          <section className="section" id="services">
              <Container>
                  <SectionTitle
                    title1="Our "
                    title2="Aims: "
                    desc="Maecenasss tempus tellus eget condimentum rhoncus sem quam semper libero pulvinar hendrerit id lorem."
                  />
                  <Row>
                      <ServiceBox services={services} />
                  </Row>
              </Container>
          </section>
      </React.Fragment>
    );
}

export default Service;
