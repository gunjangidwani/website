import React, { Component } from 'react'
import { Container, Row, Col, Image, ListGroup} from "react-bootstrap";
import content1 from "../Images/content1.png";
import content2 from "../Images/content2.png";
import tick from "../Images/tick.png"
import khata from "../Images/khata.png"

class Delivery extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Row className="align-items-center justify-content-center m-5 p-2"> 
                    <h4 className="text-muted"> Why Customer <span className="font-weight-bold"> {" "} loves </span> </h4>
                </Row>
                <Row className=" m-1 p-4">
                    <Col xs={12} md={6} >
                        <Image style={{width: '100%'}} src={content1} className="img-fluid"/>
                    </Col> 
                   <Col xs={12} md={6} className="pl-5">
                        <div>
                        <h4 className="headingColor"> <span className="font-weight-bold">Daily</span> Usable from nearby shops</h4>
                        <div className="pt-3" style={{fontSize: '10px'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugiat, atque deleniti cum eligendi reiciendis doloremque sequi sunt earum enim, nam excepturi magnam delectus dolor illum dolorum esse ab possimus!</div>
                        <ul className="pt-5 mt-3 pl-0">
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                        </ul>
                        </div>
                    </Col>

                </Row>
                <Row className=" m-1 p-4">
                   <Col xs={12} md={6} className="pl-5">
                        <div>
                        <h4 className="headingColor"> <span className="font-weight-bold">Daily</span> Usable from nearby shops</h4>
                        <div className="pt-3" style={{fontSize: '10px'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugiat, atque deleniti cum eligendi reiciendis doloremque sequi sunt earum enim, nam excepturi magnam delectus dolor illum dolorum esse ab possimus!</div>
                        <ul className="pt-5 mt-3 pl-0">
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                        </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={6} >
                        <Image style={{width: '100%'}} src={content2} className="img-fluid"/>
                    </Col> 
                </Row>
                <Row id="navbarNav" className="pt-4" style={{color: 'white'}}>
                    <Col sm={12} md={8} xs={12} className=" d-flex">
                        <div>
                        <h4  > khata Book</h4>
                   <div className="" style={{fontSize: '10px'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugiat, atque deleniti cum eligendi reiciendis doloremque sequi sunt earum enim, nam excepturi magnam delectus dolor illum dolorum esse ab possimus!</div>
                        <ul className="pt-3 mt-3 pl-0">
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                        </ul>
                        </div>
                        <Image style={{width: '60%', height: '80%'}} src={khata} />
                    </Col>
                    <Col sm={12 } md={4} xs={12}>
                    <h4> Credit Pay</h4>
                   <div className="" style={{fontSize: '10px'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugiat, atque deleniti cum eligendi reiciendis doloremque sequi sunt earum enim, nam excepturi magnam delectus dolor illum dolorum esse ab possimus!</div>
                        <ul className="pt-3 mt-3 pl-0">
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                            <li style={{listStyleType: 'none'}}>  <Image style={{height: '15px', width: '13px', marginRight: '7px'}} src={tick} alt=""/>  Eos fugiat, atque deleniti cum e </li>
                        </ul>
                    </Col>
                </Row>
                
            </Container >
            
        )
    }
}

export default Delivery