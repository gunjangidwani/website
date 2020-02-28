import React from 'react'
import {Container, Row, Col, Image} from "react-bootstrap";
import avatar from "../Images/avatar.png"
import quotes from "../Images/quotes.jpg"
import seven from "../Images/seven.png";
import vmart from "../Images/vmart.png";
import visahal from "../Images/visahal.png";
import download from "../Images/download.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


class Testimonial extends React.Component {
    render() {
        return (
            <Container className="mt-5" fluid={true}>
                <Row>
                    <Col>
                        <h4>Testimonial</h4>
                        <h6>
                            What Customer Say</h6>
                        <p>Endorement to our service that inpire enthusiasm and zeal</p>
                    </Col>
                    <Col>
                        <div className="d-flex">
                            <Image
                                src={avatar}
                                style={{
                                    width: '20%',
                                    height: '30%'
                                }}
                                roundedCircle="roundedCircle"/>
                            <div>
                                <h5>
                                    Jyoti Singh</h5>
                                <h6>Boring Road</h6>

                            </div>
                        </div>

                        <div>

                            <p
                                style={{
                                    fontSize: '10px'
                                }}>
                                <span><Image
                                    style={{
                    width: '10px',
                    transform: 'rotateX(180deg)',
                    paddingRight: '3px'
                }}
                                    src={quotes}/>
                                </span>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis fugiat id
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center pt-5">
                    <Col>
                        <h5 className="text-center">
                            Trusted by shop</h5>
                    </Col>
                    <Col md={12} xs={12}>
                        <Carousel
                            additionalTransfrom={0}
                            arrows="arrows"
                            autoPlaySpeed={3000}
                            centerMode={false}
                            className=""
                            containerClass="container"
                            dotListClass=""
                            draggable="draggable"
                            focusOnSelect={false}
                            infinite="infinite"
                            itemClass=""
                            keyBoardControl="keyBoardControl"
                            minimumTouchDrag={80}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={{
                                desktop: {
                                    breakpoint: {
                                        max: 3000,
                                        min: 1024
                                    },
                                    items: 1
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 464,
                                        min: 0
                                    },
                                    items: 1
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 1024,
                                        min: 464
                                    },
                                    items: 1
                                }
                            }}
                            showDots="showDots"
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable="swipeable">
                            <Image
                                src={seven}
                                style={{
                                    // display: 'block',
                                    height: '100%',
                                    margin: 'auto',
                                    width: 'auto'
                                }}/>
                            <Image
                                src={visahal}
                                style={{
                                    // display: 'block',
                                    height: '100%',
                                    margin: 'auto',
                                    width: 'auto'
                                }}/>
                            <Image
                                src={vmart}
                                style={{
                                    // display: 'block',
                                    height: '100%',
                                    margin: 'auto',
                                    width: 'auto'
                                }}/>
                            <Image
                                src={download}
                                style={{
                                    // display: 'block',
                                    height: '100%',
                                    margin: 'auto',
                                    width: 'auto'
                                }}/>
                        </Carousel>
                    </Col>
                </Row>
                <Row className="mt-5 text-uppercase" style={{backgroundColor: '#eae7e7',}}>
                    <Col md={3} >
                    <h5>MENU </h5>
                    <p className="m-0">about us </p>
                    <p className="m-0">join us a retailer</p>
                    <p className="m-0">blog</p>
                    <p className="m-0">team</p>
                    <p className="m-0">refer & earn</p>
                    </Col>
                    <Col md={3} >
                    <h5>Help </h5>
                    <p className="m-0">about us </p>
                    <p className="m-0">join us a retailer</p>
                    <p className="m-0">blog</p>
                    <p className="m-0">team</p>
                    <p className="m-0">refer & earn</p>
                    </Col>
                    <Col md={3} >
                    <h5>categorie </h5>
                    <p className="m-0">about us </p>
                    <p className="m-0">join us a retailer</p>
                    <p className="m-0">blog</p>
                    <p className="m-0">team</p>
                    <p className="m-0">refer & earn</p>
                    </Col>
                    <Col md={3} >
                    <h5>find us online </h5>
                    <p className="m-0">about us </p>
                    <p className="m-0">join us a retailer</p>
                    <p className="m-0">blog</p>
                    <p className="m-0">team</p>
                    <p className="m-0">refer & earn</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Testimonial