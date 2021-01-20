import React from 'react';
import Actor from '../models/Actor';
import ActorCard from './ActorCard';
import CardDeck from 'react-bootstrap/Card';
import FormFile from 'react-bootstrap/FormFile'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ActorsView extends React.Component{
    constructor(props) {
        super(props);
        this.readText = this.readText.bind(this);
        this.hasLetters = this.hasLetters.bind(this);
        this.cardsToJSX = this.cardsToJSX.bind(this);

        
      
        this.state ={
            enteredText:"",
            cardsArr:[<ActorCard actor={this.props.actors[0]}/>,
                    <ActorCard actor={this.props.actors[1]}/>]
        };
        }
    
        
    
    hasLetters (object){
        if((object.fname.toLowerCase().includes(this.state.enteredText))||
         (object.lname.toLowerCase().includes(this.state.enteredText)))
         {  
            return true
        }
        else return false
        }
         
    cardsToJSX(arr){
        const jsxArr = arr.map((val)=><ActorCard actor={val}/>)
        return jsxArr

    }

  
    readText (event){
        const tempFilteredArr = this.props.actors.filter(this.hasLetters)
        console.log(tempFilteredArr)


        const filteredArr =  this.cardsToJSX(tempFilteredArr);

        
       
        this.setState({
            cardsArr: filteredArr
        })
        
        this.setState({
            enteredText: event.target.value.toLowerCase()
        })

    }
       

 
    render(){
       return ( 
           <div>
                 <h1>ActorDB</h1>
                 <div>
                        <label>
                            Filter
                        <input type="text" onChange={this.readText} value={this.state.enteredText}/>
                        </label>
                        
                 </div>

                <CardDeck style={{display:"flex"}}>
                    {this.state.cardsArr}
                </CardDeck>
                

           </div>
         
       )
   
    }
    }


export default ActorsView;