import React, { Component } from 'react';
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
class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services : [
                { icon : <CampaignIcon style={{ marginLeft: 8, marginTop: 8, color: '#FF8A80', width: 28, height: 28}} />, title : "Hosting promotion", desc : "Promotion of socio-professional integration, analyze and deal with the issues of hosting and asylum for Ukrainian refugees." },
                { icon : <SchoolIcon style={{ marginLeft: 8, marginTop: 8, color: '#FF8A80', width: 28, height: 28}} />, title : "Educational Guidance", desc : "Support of the interactive process through the organization of various educational online and offline courses." },
                { icon : <AccountBalanceIcon style={{ marginLeft: 8, marginTop: 8, color: '#FF8A80', width: 28, height: 28}}/>, title : "Multicultural Integration", desc : "Movement of multicultural values among adults and children." },
                { icon : <TipsAndUpdatesIcon style={{ marginLeft: 8, marginTop: 8, color: '#FF8A80', width: 28, height: 28}}/>, title : "Digital Intelligence", desc : "Distribution of digital tools and skills among the population." },
                { icon : <PsychologyIcon style={{ marginLeft: 8, marginTop: 8, color: '#FF8A80', width: 28, height: 28}}/>, title : "Psychological support", desc : "Analyzing and providing solutions to issues relating to mental and physical health through support and accompaniment." },
                { icon : <PaletteIcon style={{ marginLeft: 8, marginTop: 8, color: '#FF8A80', width: 28, height: 28}}/>, title : "Art Diverse", desc : "Development of Culture and Art through any form of collaborations." },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="services">
                    <Container>
                        <SectionTitle
                            title1="Our "
                            title2="Aims: "
                            desc="Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero pulvinar hendrerit id lorem."
                        />

                        <Row>
                            <ServiceBox services={this.state.services} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Service;
