import React, { Component } from 'react'
import { Container, Row, Col, Image} from "react-bootstrap";
import content1 from "../Images/content1.png";
import content2 from "../Images/content2.png";

class Delivery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Container>
                <Row>
                   <Col>
                   <h3>Heading</h3>
                        list
                    </Col>
                    <Col>
                        <Image src={content1} rounded />
                    </Col> 
                </Row>
                <Row>
                    <Col>
                        <Image src={content2} rounded />
                    </Col> 
                   <Col>
                   <h3>Heading</h3>
                        list
                    </Col>
                </Row>
                <Row>
                    <Col>
                    1
                    </Col>
                    <Col>
                    2
                    </Col>
                    <Col>
                    3
                    </Col>
                </Row>
                
            </Container>
            
        )
    }
}

export default Delivery