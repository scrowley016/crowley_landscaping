import React from 'react'
import { NavDropdown, Image, Card, CardDeck } from 'react-bootstrap'

const Services=()=>{

        return(
                <div  id="service">
                    <div class ="introS">
                        <h4>
                      
                        </h4>
                        <Image src="./pictures/grass.png" className="line"/>
                        <h1>At Crowley Landscaping, we provide the following services for your yard:</h1>

                    </div>
                    <div>
                        <br></br>
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src="./pictures/lawnCut.png" />
                                <Card.Body>
                                <Card.Title>Lawn Cutting</Card.Title>
                                {/* <Card.Text>
                                Complete inspection and analysis of existing roofs and building envelopes, including a written report, drawings, photographs, and recommendations.
                                </Card.Text> */}
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="./pictures/install.png" />
                                <Card.Body>
                                <Card.Title>Lawn Installation</Card.Title>
                                {/* <Card.Text>
                                Day-to-day administration of on-going roof construction projects, in-progress and final inspections of new roof installations, and making certain the job is done right
                                </Card.Text> */}
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
        
                            <Card>
                                <Card.Img variant="top" src="./pictures/plow.png" />
                                <Card.Body>
                                <Card.Title>Snow Plowing</Card.Title>
                                {/* <Card.Text>
                                Infrared moisture testing of existing roofs.
                                </Card.Text> */}
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                            </CardDeck>
                            <br></br>
                            <CardDeck>
                            <Card>
                                <Card.Img variant="top" src="./pictures/gutter.png" />
                                <Card.Body>
                                <Card.Title>Gutter Clean Up</Card.Title>
                                {/* <Card.Text>
                                Making certain that the roofing materials specified meet the needs of both the building structure and the building owner.
                                </Card.Text> */}
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="./pictures/springClean.png"/>
                                <Card.Body>
                                <Card.Title>Spring and Fall Cleanup</Card.Title>
                                {/* <Card.Text>
                                Cost projections, repair vs. replace, etc.
                                </Card.Text> */}
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="./pictures/hard.png"/>
                                <Card.Body>
                                <Card.Title>Hardscaping</Card.Title>
                                {/* <Card.Text>
                                Overhead inspection of roofs and building envelope issues
                                </Card.Text> */}
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="./pictures/bed.png"/>
                                <Card.Body>
                                <Card.Title>Bed Installation and Maintenance</Card.Title>
                                {/* <Card.Text>
                                Overhead inspection of roofs and building envelope issues
                                </Card.Text> */}
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                            </CardDeck>
                        
                                
                            
       
      
                        </div>
 

    
 </div>          
)
}

export default Services