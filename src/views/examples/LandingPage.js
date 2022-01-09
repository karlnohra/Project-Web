import React from "react";
import  { useState } from 'react';
import Calendar from 'react-calendar';







// reactstrap components
import {
  Button,
  
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import NumericInput from 'react-numeric-input';
import { Link } from "react-router-dom";







function LandingPage() {
 
    

  
   
  
 
  const [isCalendarTrue, setIsCalendarTrue] = React.useState(false);

  const [value, onChange] = useState(new Date());

  


  
  
   
 

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <h2><b> Opening Hours For Reservation</b></h2>
              </Row>
            <Row>
              <Col >
              <p style={{color :'darkblue'}}><mark>-Monday till Friday: 8am-8pm</mark></p>
              <p style={{color:"darkblue"}}><mark>-Weekends: 8am-5pm</mark></p>
              </Col>
            </Row>
            <Row>
            
              
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Current Available Rooms</h2>
                {/* <h5 className="description">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice extent in the Pacific and a late drop in ice extent
                  in the Barents Sea.
                </h5> */}
              </Col>
            </Row>
           
             <Row>
              <Col sm="6">
              <h5><b>Two double beds with balcony</b> </h5>
              </Col>
              
              <Col sm="6">
               <h5><b>Two small beds with balcony</b></h5>
              </Col>
             </Row>
            <Row>
              <Col sm="6">

               <img
                  alt="..."
                  className="rounded"
                  src={require("assets/img/low-price-images1.jpg").default}
                  height="150"
                  width="300"

                  
                ></img>
              </Col>
              <Col sm="6">
              <img
                  alt="..."
                  className="rounded"
                  src={require("assets/img/low-price-images2.jpg").default}
                  height="150"
                  width="300"

                  
                ></img>
                
              </Col>


            </Row>
              
            <Row>
              <Col sm="6">
                <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="md"
                    >
                    Check-In-Date:
                  </Button>
             
                
                 {/* <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="lg"
                    >
                    Check Availability
                  </Button> */}

                  <h6>{value.toString()}</h6>

                  {isCalendarTrue && 
                    <Calendar
                      onChange={onChange}
                      value={value}
                    />


                  }
              </Col>
              
              
               <Col sm="6">
                  <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="md"
                    >
                    Check-In-Date:
                  </Button>
             
                
                   {/* <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="lg"
                    >
                    Check Availability
                   </Button> */}

                  <h6>{value.toString()}</h6>

                   {isCalendarTrue && 
                     <Calendar
                     onChange={onChange}
                     value={value}
                      />


                    }

                </Col>
               </Row>
              <Row>
                <Col sm="6">
                   <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="md"
                    >
                    Check-Out-Date:
                   </Button>
             
                
                   {/* <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="lg"
                    >
                    Check Availability
                    </Button> */}

                   <h6>{value.toString()}</h6>

                     {isCalendarTrue && 
                      <Calendar
                      onChange={onChange}
                      value={value}
                       />


                     }
               </Col>
                <Col sm="6">
                  <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="md"
                    >
                    Check-Out-Date:
                  </Button>
             
                
                 {/* <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="lg"
                    >
                    Check Availability
                   </Button> */}

                    <h6>{value.toString()}</h6>

                     {isCalendarTrue && 
                      <Calendar
                       onChange={onChange}
                       value={value}
                       />


                      }

                </Col>
               </Row>
               
                
                <Row>
                 <Col sm="3">
                  <h5><b>Number of Rooms:</b></h5>
               

                 </Col> 
                  
                 <Col sm="3">
                  <NumericInput min={0} max={4} value={0} />
              
                 </Col>
                 <Col sm="3">
                  <h5><b>Number of Rooms:</b></h5>

                 </Col>
                 <Col sm="3">
                  <NumericInput min={0} max={4} value={0} />
              
                 </Col>
                 </Row>
                 <Row>
                   <Col sm="3">
                   <h5><b>Price: </b></h5>
                   </Col>
                   <Col sm="3">
                   <h5>150$/night  </h5>
                   </Col>
                   <Col sm="3">
                   <h5><b>Price: </b></h5>

                   </Col>
                   <Col sm="3">
                   <h5>120$/night  </h5>

                   </Col>
                   
                   
                 </Row>
                 
                 <Row>
                   <Col sm="6">
                      <p class="text-left" >-----------------------------------------------------------</p>
                    </Col>
                    <Col sm="6">
                    <p class="text-left">-----------------------------------------------------------</p>

                    </Col>
                 </Row>
                 <Row>
                   <h1> </h1>
                 </Row>
                 <Row>
                 <Col sm="6">
                   <h5><b>Four small beds with balcony</b> </h5>
                 </Col>
              
                 <Col sm="6">
                  <h5><b>Two double beds with a  small bed and  view </b></h5>
                  </Col>

                 </Row>
                 <Row>
              <Col sm="6">

               <img
                  alt="..."
                  className="rounded"
                  src={require("assets/img/low-price-images3.jpg").default}
                  height="150"
                  width="300"

                  
                ></img>
              </Col>
              <Col sm="6">
              <img
                  alt="..."
                  className="rounded"
                  src={require("assets/img/high-price-images1.jpg").default}
                  height="150"
                  width="300"

                  
                ></img>
                
              </Col>
              </Row>
              <Row>
              <Col sm="6">
                <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="md"
                    >
                    Check-In-Date:
                  </Button>
             
                
                 {/* <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="lg"
                    >
                    Check Availability
                  </Button> */}

                  <h6>{value.toString()}</h6>

                  {isCalendarTrue && 
                    <Calendar
                      onChange={onChange}
                      value={value}
                    />


                  }
              </Col>
              
              
               <Col sm="6">
                  <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="md"
                    >
                    Check-In-Date:
                  </Button>
             
                
                   {/* <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="lg"
                    >
                    Check Availability
                   </Button> */}

                  <h6>{value.toString()}</h6>

                   {isCalendarTrue && 
                     <Calendar
                     onChange={onChange}
                     value={value}
                      />


                    }

                </Col>
               </Row>
               <Row>
                <Col sm="6">
                   <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="md"
                    >
                    Check-Out-Date:
                   </Button>
             
                
                   {/* <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="lg"
                    >
                    Check Availability
                    </Button> */}

                   <h6>{value.toString()}</h6>

                     {isCalendarTrue && 
                      <Calendar
                      onChange={onChange}
                      value={value}
                       />


                     }
               </Col>
                <Col sm="6">
                  <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="md"
                    >
                    Check-Out-Date:
                  </Button>
             
                
                 {/* <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="lg"
                    >
                    Check Availability
                   </Button> */}

                    <h6>{value.toString()}</h6>

                     {isCalendarTrue && 
                      <Calendar
                       onChange={onChange}
                       value={value}
                       />


                      }

                </Col>
               </Row>
               <Row>
                 <Col sm="3">
                  <h5><b>Number of Rooms:</b></h5>
               

                 </Col> 
                  
                 <Col sm="3">
                  <NumericInput min={0} max={4} value={0} />
              
                 </Col>
                 <Col sm="3">
                  <h5><b>Number of Rooms:</b></h5>

                 </Col>
                 <Col sm="3">
                  <NumericInput min={0} max={4} value={0} />
              
                 </Col>
                 </Row>
                 <Row>
                   <Col sm="3">
                   <h5><b>Price: </b></h5>
                   </Col>
                   <Col sm="3">
                   <h5>170$/night  </h5>
                   </Col>
                   <Col sm="3">
                   <h5><b>Price: </b></h5>

                   </Col>
                   <Col sm="3">
                   <h5>400$/night  </h5>

                   </Col>
                   
                   
                 </Row>
                  <Row>
                   <Col sm="6">
                      <p class="text-left" >-----------------------------------------------------------</p>
                    </Col>
                    <Col sm="6">
                    <p class="text-left">-----------------------------------------------------------</p>

                    </Col>
                  </Row>
                  <Row>
                    <h1>  </h1>
                  </Row>
                <Row>
                  <Col sm="6">
                    <h5><b>One  big bed with a big balcony</b> </h5>
                  </Col>
              
                  <Col sm="6">
                    <h5><b>Two small beds with balcony</b></h5>
                  </Col>
                </Row>
                <Row>
              <Col sm="6">

               <img
                  alt="..."
                  className="rounded"
                  src={require("assets/img/high-price-images2.jpg").default}
                  height="150"
                  width="300"

                  
                ></img>
              </Col>
              <Col sm="6">
              <img
                  alt="..."
                  className="rounded"
                  src={require("assets/img/high-price-images3.jpg").default}
                  height="150"
                  width="300"

                  
                ></img>
                
              </Col>


            </Row>
            <Row>
              <Col sm="6">
                <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="md"
                    >
                    Check-In-Date:
                  </Button>
             
                
                 {/* <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="lg"
                    >
                    Check Availability
                  </Button> */}

                  <h6>{value.toString()}</h6>

                  {isCalendarTrue && 
                    <Calendar
                      onChange={onChange}
                      value={value}
                    />


                  }
              </Col>
              
              
               <Col sm="6">
                  <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="md"
                    >
                    Check-In-Date:
                  </Button>
             
                
                   {/* <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="lg"
                    >
                    Check Availability
                   </Button> */}

                  <h6>{value.toString()}</h6>

                   {isCalendarTrue && 
                     <Calendar
                     onChange={onChange}
                     value={value}
                      />


                    }

                </Col>
               </Row>
               <Row>
                <Col sm="6">
                   <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="md"
                    >
                    Check-Out-Date:
                   </Button>
             
                
                   {/* <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="lg"
                    >
                    Check Availability
                    </Button> */}

                   <h6>{value.toString()}</h6>

                     {isCalendarTrue && 
                      <Calendar
                      onChange={onChange}
                      value={value}
                       />


                     }
               </Col>
                <Col sm="6">
                  <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="md"
                    >
                    Check-Out-Date:
                  </Button>
             
                
                 {/* <Button
                    type="button" 
                    class="btn btn-info"
                    onClick={() => setIsCalendarTrue(!isCalendarTrue)}
                    size="lg"
                    >
                    Check Availability
                   </Button> */}

                    <h6>{value.toString()}</h6>

                     {isCalendarTrue && 
                      <Calendar
                       onChange={onChange}
                       value={value}
                       />


                      }

                </Col>
               </Row>
               
                
                <Row>
                 <Col sm="3">
                  <h5><b>Number of Rooms:</b></h5>
               

                 </Col> 
                  
                 <Col sm="3">
                  <NumericInput min={0} max={4} value={0} />
              
                 </Col>
                 <Col sm="3">
                  <h5><b>Number of Rooms:</b></h5>

                 </Col>
                 <Col sm="3">
                  <NumericInput min={0} max={4} value={0} />
              
                 </Col>
                 </Row>
                 <Row>
                   <Col sm="3">
                   <h5><b>Price: </b></h5>
                   </Col>
                   <Col sm="3">
                   <h5>300$/night  </h5>
                   </Col>
                   <Col sm="3">
                   <h5><b>Price: </b></h5>

                   </Col>
                   <Col sm="3">
                   <h5>250$/night  </h5>

                   </Col>
                </Row>

                <Row>
                  <h1>  </h1>

                </Row>

                <Row>
                  <h1>  </h1>
                </Row>
                
                <Row>
                <Col sm="4">
                  <h1>   </h1>
                </Col>
                  <Col sm="4">
                <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      // onClick={(e) => e.preventDefault()}
                      to="/index" 
                      tag={Link}
                      size="sm"
                    >
                      Submit
                    </Button>
                    </Col>
                
                </Row>
              

            {/* <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/login.jpg").default + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Over the span of the satellite record, Arctic sea ice has
                      been declining significantly, while sea ice in the
                      Antarctichas increased very slightly" <br></br>
                      <br></br>
                      <small>-NOAA</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg").default + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1.jpg").default + ")",
                    }}
                  ></div>
                  <h3>
                    So what does the new record for the lowest level of winter
                    ice actually mean
                  </h3>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </p>
                  <p>
                    For a start, it does not automatically follow that a record
                    amount of ice will melt this summer. More important for
                    determining the size of the annual thaw is the state of the
                    weather as the midnight sun approaches and temperatures
                    rise. But over the more than 30 years of satellite records,
                    scientists have observed a clear pattern of decline,
                    decade-by-decade.
                  </p>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Here is our team</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/avatar.jpg").default}
                    ></img>
                    <h4 className="title">Romina Hadid</h4>
                    <p className="category text-info">Model</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/ryan.jpg").default}
                    ></img>
                    <h4 className="title">Ryan Tompson</h4>
                    <p className="category text-info">Designer</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/eva.jpg").default}
                    ></img>
                    <h4 className="title">Eva Jenner</h4>
                    <p className="category text-info">Fashion</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to work with us?</h2>
            <p className="description">Your project is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row> */}
          </Container>
        </div>
       
      </div>
    </>
  );
}

export default LandingPage;
