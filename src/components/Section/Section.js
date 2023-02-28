import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
} from 'reactstrap';
import img from '../../assets/images/hero-5-img.png';
import {SECTION_ITEMS} from "../../helpers/constants";

const Section = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const onExiting = () => {
        setAnimating(true);
    }

    const onExited = () => {
        setAnimating(false);
    }

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === SECTION_ITEMS.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? SECTION_ITEMS.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }
    ;//create a slides variable and store all carousel items into it through a map array(map array will return Carousel Item, and it's corresponding <div> tags)
    const slides = SECTION_ITEMS.map((item) => {
        return (
          <CarouselItem
            className="align-items-center"
            key={item.id}
            onExiting={onExiting}
            onExited={onExited}
          >
              <div className="align-items-center">
                  <div className="carousel-caption w-75 mx-auto">
                      <Container>
                          <Row className="justify-content-center">
                              <Col lg={6}>
                                  <div className="text-center">
                                      <h1 className="text-white hero-4-title font-weight-light line-height-1_4 mb-4">{item.h1}</h1>
                                      <p className="text-white">{item.p}</p>
                                  </div>
                              </Col>
                          </Row>
                      </Container>
                  </div>
              </div>
          </CarouselItem>
        )
    })

    return (
        <React.Fragment>
            <section className="hero-5-bg position-relative bg-warning" id="home" style={{height: '100vh'}}>
                <div className="bd-example w-100">
                    <div>
                        <div>
                            <Carousel
                                activeIndex={activeIndex}
                                next={next}
                                previous={previous}
                            >
                                <CarouselIndicators items={SECTION_ITEMS} activeIndex={activeIndex} onClickHandler={goToIndex} className="align-items-center my-0" />
                                {/* Render Slides Variable(Which Contains Carousel Items) */}
                                {slides}
                                <CarouselControl direction="prev" onClickHandler = {previous} >
                                    <div className="slide-icon display-4">
                                        <i className="pe-7s-angle-left"></i>
                                    </div>
                                    <span className="sr-only">Previous</span>
                                </CarouselControl>
                                <CarouselControl direction="next" onClickHandler = {next}>
                                    <div className="slide-icon display-4">
                                        <i className="pe-7s-angle-right"></i>
                                    </div>
                                    <span className="sr-only">Next</span>
                                </CarouselControl>
                            </Carousel>
                        </div>

                    </div>
                </div>
                <div className="hero-bottom-img">
                    <img src={img} alt="" className="img-fluid mx-auto d-block"/>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Section;
