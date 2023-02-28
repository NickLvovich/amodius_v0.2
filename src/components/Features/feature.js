import React from 'react';
import { Container } from "reactstrap";

// Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";
import {TEAM} from "../../helpers/constants";

const Features = () => {

    return (
      <>
          <section className="section" id="team">
              <Container>
                  <SectionTitle
                    title1="Our "
                    title2="Team"
                    // desc="Association for Integration, Culture and the Sustainable Development Amodius."
                  />

                  <FeatureBox features={TEAM} />
              </Container>
          </section>
      </>
    );
}

export default Features;
