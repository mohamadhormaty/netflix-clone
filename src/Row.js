import React , {useState , useEffect} from 'react';
//import axios
import instance from './axios';
//import style
import './Row.css';
//import youtube
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


function Row({title , fetchURL , largRow}) {

    const [movies , setMovies] = useState([]);
    const [trailerUrl , setTrailerUrl] = useState('');

    const base_url = "https://image.tmdb.org/t/p/original/";

     useEffect(() => {
        const fetchData = async() => {
            const request = await instance.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL])

    const opts = {
        width : "100%",
        height : "400px",
        playerVars : {
            //https://developers.google.com/youtube/player_parameters
            autoplay : 1,
        }
    }

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || '')
            .then((url) => {
                //https://www.youtube.com/watch?v=...
                const urlParams = new URLSearchParams(new URL(url).search)
                console.log(urlParams)
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error))
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-movies">
                {
                    movies.map(movie => (
                        <img className={ largRow ? "movie-larg" : "movie" } onClick={() => handleClick(movie)} src={`${base_url}${movie.poster_path}`} alt={movie.name} key={movie.id} />
                    ))
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
