import React,{useEffect,useState} from 'react';
import Youtube from 'react-youtube'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../constants/Constants'
import axios from '../../Axios';
function RowPost(props) {
    const [movies, setmovies] = useState([]);
    const [urlId,setUrlId] = useState('')
    useEffect(() => {
      axios.get(props.url).then((response)=>{
        console.log(response.data);
        setmovies(response.data.results)
      })
    }, []);

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    const handleMovie = async (id)=>{
        console.log(id);
       await axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        
          console.log("response.data");
          console.log(response.data.results[0]);

          if(response.data.results.length!==0){

            setUrlId(response.data.results[0])
           
          }else{
            console.log('empty');
          }
        })
    }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj,k)=>
            <img key={k} onClick={()=>{handleMovie(obj.id)}} className={props.isSmall ? 'smallPoster' : 'poster' } src={`${imageUrl+obj.poster_path}`} alt="poster" />
        )}
       
      </div>
    { urlId &&  <Youtube opts={opts} videoId={urlId.key}/> }
    </div>
  );
}

export default RowPost;
