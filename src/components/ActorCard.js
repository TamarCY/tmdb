import React from 'react';
import Card from 'react-bootstrap/Card'
import Actor from '../models/Actor';

 

class ActorCard extends React.Component{
    constructor(props) {
        super(props);
      
    } 
    render(){
   
        

        return ( 
           <div>
           
           <Card bg={'dark'} style={{ width: '18rem' }} >
               
            <Card.Img variant="top" src={this.props.actor.imageURL} alt="shira hass img"/> 
            
            <Card.Body>
                <div><a href={this.props.actor.imdbLink} target="blank"><Card.Title>{this.props.actor.fname} {this.props.actor.lname}</Card.Title></a></div> 
                <Card.Text>{this.props.actor.calcAge()}
                </Card.Text>
            </Card.Body>           
           </Card>

           </div>
       )
    }
}

export default ActorCard;