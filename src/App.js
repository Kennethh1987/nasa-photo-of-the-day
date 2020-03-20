import React, {useState,useEffect} from 'react';
import "./App.css";
import axios from 'axios';
import SpaceWorld from './components/SpaceWorld'
import styled from 'styled-components';


const makeitHOT = styled.div`
cusor:pointer;
display:flex;
width:10%



`;




const App = () => {
  const [nasaData, setNasaData] = useState([]);


  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        console.log(response.data)
        setNasaData(response.data)
      })
      .catch(error => [
        console.log(error => [console.log("Error, error!", error)])
      ])
  }, []);

  
  return ( 
<div className='makeitHot'> 
        
        <SpaceWorld url={nasaData.url}copyright={nasaData.copyright} date={nasaData.date} title={nasaData.title}/>


   </div> );
}

export default App;
