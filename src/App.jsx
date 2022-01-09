import React,{useState,useEffect} from "react"; 
import Imagecontainer from "./Imagecomponent/Imagecontainer";
import axios from "axios";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function App() {
  const [ Infos , setInfos] = useState([]);
    useEffect(()=> {
        axios
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=cgFx60Cd2ijjyPngdFKcKGO3tjDYKaYgwuNvkMzQ`)
        .then((response) =>{
          const infos = response.data.photos;
          console.log(infos)
          setInfos(infos)
            })
        },[])
  return (
    <div className="App">
      <h1>Spacestargram</h1>
         {Infos.map((info)=>{
           return(
             <div key = {info.key}>
                 <img src ={info.img_src} alt = {info.title}></img>
                 <div>  
                   <p>{info.camera.full_name}</p>
                   <p>{info.rover.name}</p>
                   <p>{info.earth_date}</p>
                   
                 </div>
               </div>
           )
       })}
          </div>
  );
}

export default App;
