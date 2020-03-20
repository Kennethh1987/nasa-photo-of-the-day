import React, { useState } from 'react';
import { Collapse, Button, CardBody, CardHeader, Card, CardFooter } from 'reactstrap';


const SpaceWorld = (props) => {
 
const [isOpen, setIsOpen] = useState(false);
      
const toggle = () => setIsOpen(!isOpen);
      
return (
 
              
   <div>   <img alt="nasa daily photo" src={props.url} />
  <Button color="information" onClick={toggle} style={{ marginBottom: '1rem' }}>Expand</Button>
    <Collapse isOpen={isOpen}>
     <Card>
         <CardHeader>Copyright: {props.copyright}</CardHeader>
      <CardBody>Title: {props.title}
        </CardBody>
        <CardFooter>Date: {props.date}</CardFooter>
     </Card>
     </Collapse>
          </div>
        );
      }


export default SpaceWorld;