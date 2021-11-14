import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  // const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs" id="About-us">
      
        <Container>
          <Row >
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">About us</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        {/* <i className="now-ui-icons objects_umbrella-13"></i> */}
                        Our History
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        {/* <i className="now-ui-icons shopping_cart-simple"></i> */}
                        Services
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        {/* <i className="now-ui-icons shopping_shop"></i> */}
                        Location
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("4");
                        }}
                      >
                        {/* <i className="now-ui-icons ui-2_settings-90"></i> */}
                        Contact Us
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <p>
                      Laguna Beach  is a seaside resort city located in southern Orange County, California, in the United States.
                       It is known for its mild year-round climate, scenic coves, environmental preservation efforts, and artist communit.
                        {/* I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus. */}
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>Free-Parking</p>
                      <p>Pool</p>
                      <p>Free Breakfast</p>
                      <p>Free WiFi</p>
                      <p>Bar Lounge</p>
                      <p>Meeting Rooms</p>
                      <p>Fitness Center</p>
                      <p>Beach and Spa</p>
                      
                       
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p><a href="https://www.google.com/maps/d/viewer?ie=UTF8&t=m&oe=UTF8&msa=0&mid=1mN2x93bwqV-ElBHSv9_j7fHuUYk&ll=33.57055462802647%2C-117.778966&z=13">Click here to get our location</a></p>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                      <Col sm="4">
                      <p >Call us on:</p> 
                      </Col>
                      <Col sm="10">
                      <p>Karl nohra: 71 548 301</p>
                      <p>Samer Chahine: 03 836 246</p>
                      <p>Roudy Hneine: 76 319 631</p>
                      </Col>
                                    
                      
                                      
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            {/* <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Tabs with Background on Card</p>
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        Messages
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        Settings
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills2">
                      <p>
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus. I think that’s a
                        responsibility that I have, to push possibilities, to
                        show people, this is the level that things could be at.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills4">
                      <p>
                        "I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus. I think that’s a
                        responsibility that I have, to push possibilities, to
                        show people, this is the level that things could be at."
                      </p> */}
                    {/* </TabPane>
                  </TabContent>
                </CardBody>
              </Card> */}
            {/* </Col> */}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
