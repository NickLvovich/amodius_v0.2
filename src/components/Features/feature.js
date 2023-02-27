import React, { useState } from 'react';
import { Container } from "reactstrap";

// Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";

// Import Images
import feature1 from "../../assets/images/features/img-1.png";
import feature2 from "../../assets/images/features/img-2.png";
import feature3 from "../../assets/images/features/img-3.png";

const Features = () => {
    const [features, setFeatures] = useState([
        {
            id: 1,
            img: feature1,
            icon: "mdi  mdi-laptop-mac",
            title: "Ainur Kassenova",
            desc:
              "president - is responsible for general management of the association including grant seeking process, overseeing budgets, staff, and executives and evaluating the success of the activities. Ainur has considerable experience in the management of non-profit organizations, public relations and journalism. ",
            link: "/",
        },
        {
            id: 2,
            img: feature2,
            icon: "mdi  mdi-account-group",
            title: "Violetta Tsybenko",
            desc:
              "co-president - is responsible for the development and maintenance of association targets and partnership opportunities. Notably, performing strategy formulation and vision, executing planning derivation, incubating new products and innovations due to the technologies and IT intelligence, interacting between units designing organizational strategy.",
            link: "/",
        },
        {
            id: 3,
            img: feature3,
            icon: "mdi  mdi-chart-bell-curve",
            title: "Rano Aboutkhodjaeva",
            desc:
              "treasurer - oversees all financial transactions including budget planning, financial reporting, record-keeping, and managing incoming and outgoing funds.\n" +
              "Rano has more than ten years experience in accountancy and budget planning in commercial and social fields.",
            link: "/",
        },
        {
            id: 4,
            img: feature3,
            icon: "mdi  mdi-chart-bell-curve",
            title: "Darina Apajeva",
            desc:
              "our legal adviser - provides association with guidance in matters relating to law and developing strategies to match and beat the competition and providing the quality of service that our target audience requires. Darina is an Erasmus Mundus alumni, studying Law at Université Libre de Bruxelles.",
            link: "/",
        },
    ]);

    return (
      <>
          <section className="section" id="team">
              <Container>
                  <SectionTitle
                    title1="Our "
                    title2="Team"
                    // desc="Association for Integration, Culture and the Sustainable Development Amodius."
                  />

                  <FeatureBox features={features} />
              </Container>
          </section>
      </>
    );
}

export default Features;
