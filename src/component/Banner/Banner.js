import React, { useEffect, useState } from 'react';

import {API_KEY,imageUrl} from '../../constants/Constants'
import axios from '../../Axios'
import './Banner.css'
import { FaPlay} from "react-icons/fa";
import {FaInfoCircle} from "react-icons/fa";



function Banner() {

    const [movie, setMovie] = useState();

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data);
            console.log(response.data.results[0]);

            // setMovie(response.data.results[11])
            setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
        })
    },[]);
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : null})`}} className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : null}</h1>
        <div className='banner_buttons'>
        <button className='button'>
            <FaPlay className='play-icon' /> Play
          </button>
          <button className='button'>
            <FaInfoCircle className='play-icon' /> More info
          </button>
        </div>
        <h1 className='description'>{movie ? movie.overview : null}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
