import React from 'react'
import { NavDropdown, Image, Card, CardDeck } from 'react-bootstrap'

const Services=()=>{

        return(
                <div  id="service">
                    <div class ="introS">
                        <h4>
                      
                        </h4>
                       
                        <h1>At Crowley Landscaping, we provide the following services for your yard:</h1>
                        <Image src="./pictures/grass.png" className="line"/>
                    </div>
                    <div>
                        <br></br>
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src="./pictures/lawnCut.png" />
                                <Card.Body>
                                <Card.Title>Lawn Cutting</Card.Title>
                                <Card.Text>
                                Residenial or commercial, flexable mowing options for any type of lawn
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="./pictures/install.png" />
                                <Card.Body>
                                <Card.Title>Lawn Installation</Card.Title>
                                <Card.Text>
                                Whether its a small patch, or the whole yard, we make growing grass easy
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
        
                            <Card>
                                <Card.Img variant="top" src="./pictures/plow.png" />
                                <Card.Body>
                                <Card.Title>Snow Plowing</Card.Title>
                                <Card.Text>
                                Living in WNY, you know you should be prepared for anythign that mother nature throws at you. Let us handle the driveway and sidewalk, getting you back on the road faster and easier 
                                </Card.Text>
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
                                <Card.Text>
                                Nobody likes cleaning the gutters, except us! Give us call!
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="./pictures/springClean.png"/>
                                <Card.Body>
                                <Card.Title>Spring and Fall Cleanup</Card.Title>
                                <Card.Text>
                                We help your yard look its best going into and out of winter. Leave the leaves to us!
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="./pictures/hard.png"/>
                                <Card.Body>
                                <Card.Title>Hardscaping</Card.Title>
                                <Card.Text>
                                We have experiance with retaining walls, simple walkways, splash pads and much more! 
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="./pictures/bed.png"/>
                                <Card.Body>
                                <Card.Title>Bed Installation and Maintenance</Card.Title>
                                <Card.Text>
                               Come with your designs, or let us design for you! Also provide matince of existing beds.
                                </Card.Text>
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