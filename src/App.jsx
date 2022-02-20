import React,{useState,useEffect} from "react"; 
import Imagecontainer from "./Imagecomponent/Imagecontainer";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import "./App.css";
const API_KEY = process.env.REACT_APP_API_KEY;
function App() {
  const [ Infos , setInfos] = useState([]);
  const [errors,setErrors] = useState();
  const [isLoading,setIsloading] = useState(false)

   useEffect(()=> {
        setIsloading(true)
        axios
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`)
        .then((response) =>{
          console.log(response)
          const infos = response.data.photos;
          setInfos(infos);
          setIsloading(false)
            })
         
        },[API_KEY]);
        function createContainer(Info){
         return(
          <Imagecontainer
             img = {Info.img_src}
             title={Info.camera.full_name}
             name = {Info.rover.name}
             date = {Info.earth_date}
          />
         )
        
        }
return isLoading ?(<h3>Loading.....</h3>):(
    <div className="App">
        <h1 className ="app__logo">Spacestargram</h1>
        <p className = "app__subtopic">Brought to you from the NASA's image api</p>
         {Infos.map(createContainer)}
      
     </div>
 )
}
 
export default App;
