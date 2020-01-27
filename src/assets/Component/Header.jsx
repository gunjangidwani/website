import React, {Component} from 'react'
import {Nav, Navbar, Container, Row, Col, Button, Form, FormControl, Image} from "react-bootstrap";
import logo from "../Images/logo.png";
import asset1 from "../Images/asset1.png"
import googlePlay from "../Images/googlePlay.png"
import apple from "../Images/appStore.png";

class Header extends Component {
  constructor(props) {
  super(props)

  this.state = {}
  }

  routing() {
    this.props.history.push('/faq')
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <div id="header">
              <div className="row">
                  <div className="col-md-4 pl-5 justify-content-center">
                    <Row className="justify-content-center">
                      <img src={logo}  className="logo m-5" alt=""/>
                    </Row>
                    <Row>
                      <h1> Best Way to Explore </h1>
                      <h3>all nearby mom and dad shops</h3>
                    </Row>
                    <Row>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quas unde cum ipsam amet? Earum laudantium atque fuga accusantium possimus assumenda incidunt consectetur doloribus, perspiciatis ea rerum, quod iste cumque.
                    </Row>
                    <Row className="justify-content-center">
                      <Button variant="light" className="p-3">
                        INSTALL NOW
                      </Button>
                    </Row>
                    <Row className="justify-content-around p-4" >
                    <Image src={googlePlay} rounded />
                    <Image src={apple} rounded />
                    </Row>
                    <Row  className="align-items-center">
                      <span>
                        +91
                      </span>
                      <Form inline>
                        <FormControl type="number" placeholder="Mobile Number" className="mr-sm-2" />
                        <Button className="ml-2" variant="primary" > Get app Link</Button>
                      </Form>
                    </Row>
                  </div>
                  <Row className="col-md-8 asset1 d-flex align-items-baseline justify-content-end">
                    <Navbar collapseOnSelect expand="lg" className="m-2 justify-content-between" style={{position: 'relative'}}   fixed="top" >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="text-black"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                      <Nav className="justify-content-end text-white"  activeKey="/home">
                        <Nav.Item >
                          <Nav.Link className="pr-5 text-white" >HOME</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="pr-5 text-white" href="/faq" eventKey="link-1">FOR RETAILERS</Nav.Link>
                        </Nav.Item>
                         <Nav.Item>
                          <Nav.Link className="pr-5 text-white" eventKey="link-2">OKKJI FAST</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="pr-5 text-white" eventKey="link-2">FAQ</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      </Navbar.Collapse>
                    </Navbar>
                 
                  </Row>
              </div>
          </div>
</header>
      </React.Fragment>
    )
  }
}

export default Header