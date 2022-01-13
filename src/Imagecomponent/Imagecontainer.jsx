import React ,{useEffect,useState} from 'react';
import axios from "axios";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import ClipLoader from "react-spinners/ClipLoader";
import "./Imagecontainer.css"
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function Imagecontainer(props) {
    return (
        <div className = "imagecontainer">
            <img className="imagecontainer__image" src = {props.img}></img>
            <div className = "name">
              <p className="imagecontainer__name">{props.name} {"-"} {props.title}</p>
            </div>
            
            <p className="imagecontainer__date">{props.date}</p>
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
    )
}

export default Imagecontainer;
