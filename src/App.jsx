import React,{useState,useEffect} from "react"; 
import Imagecontainer from "./Imagecomponent/Imagecontainer";
import axios from "axios";

function App() {
  const [Image,setImage] =  useState("") ;
  const [title,setTitle ] = useState("");
  const [date,setDate ] = useState("");
  const [description,setDescription ] = useState("");
  const [copyright,setCopyright ] = useState("");

    useEffect(()=> {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then((response) =>{
          const info = response.data;
          const copy = info.copywright;
          const dat = info.date;
          const topic = info.title;
          const make = info.hdurl;
          const describe = info.explanation
          setDescription(describe)
          setImage(make)
          setTitle(topic)
          setDescription(describe)
          setDate(dat)
          setCopyright(copy)
            })
        }, [])
  return (
    <div className="App">
      <h1>Spacestargram</h1>
      <img src ={Image}></img>
      <p>{title}</p>
      <p>{date}</p>
      <p>{description}</p>
      <p>{copyright}</p>
    </div>
  );
}

export default App;
