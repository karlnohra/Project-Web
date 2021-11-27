import React from "react";

// reactstrap components
import {  Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    window.innerWidth=992
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset /2;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/hotel-booking2.jpg").default + ")",
              
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            

            
            <h1 className="title"style={{position: 'absolute', top: '-160px',right: '200px'}} >Book Your Stay.</h1>
            <div className="text-center">
              {/* <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
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
                <i className="fab fa-google-plus"></i>
              </Button> */}
              
            </div>
            
           
          </Container>
          
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
