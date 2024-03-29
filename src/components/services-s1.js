import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class ServicesS1 extends Component{
    render(){
        return(    
            <Container fluid className="services-s1 bg-dark d-flex minh-50vh align-items-center py-5">
                <Row className="mx-0 w-100 mt-5">
                    <Col xs={12} md={{span:5,offset:1}} className="minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center text-md-start pt-5">
                            <h2 className="dispaly-6 fw-bold text-white-50">
                                Dolor sit amet         
                            </h2>
                            <p className="lead text-white">
                                Sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ServicesS1;
