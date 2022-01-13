import React,{useState,useEffect} from "react"; 
import Imagecontainer from "./Imagecomponent/Imagecontainer";
import axios from "axios";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import ClipLoader from "react-spinners/ClipLoader";
import "./App.css";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function App() {
  const [ Infos , setInfos] = useState([]);
  const [errors,setErrors] = useState();
  const [isLoading,setIsloading] = useState(false)

   useEffect(()=> {
     setIsloading(true);
        axios
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=cgFx60Cd2ijjyPngdFKcKGO3tjDYKaYgwuNvkMzQ`)
        .then((response) =>{
          const infos = response.data.photos;
          setInfos(infos)
          setIsloading(false);
            })
         
        },[]);

return isLoading ?( <h4>Loading...</h4>):
(
    <div className="App">
         <h1 className ="app__logo">Spacestargram</h1>
          {Infos.map((info,key)=>{
            return (
           <div key={info.id}>
               <img className = "app__image"src ={info.img_src} alt = {info.title}></img>
                 <p className = "app__fullname">{info.camera.full_name} - {info.rover.name}</p>
                 <div className = "app__favorite">
                 <p className = "app__earthdate">{info.earth_date}</p>
                 <Checkbox 
                   {...label} 
                    icon={<FavoriteBorder />} 
                    checkedIcon={<Favorite />} 
                    sx={{
                      color: pink[800],
                    '&.Mui-checked': {
                    color: pink[600],
                     },
                }}
                 />
                 </div>

            </div>)
         })}
          </div>
 );
 
}

export default App;
