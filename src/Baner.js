import React , {useState , useEffect} from 'react';
import instance from './axios';
//import request
import requests from './requests';
//import style 
import './Baner.css';

function Baner() {

    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        const fetchData = async () => {
            const request = await instance.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        }
        fetchData();
    }, [])

    console.log(movies)

    function truncate(str , n){
        return str?.length > n ? str.substr(0 , n-1) + "..." : str;
    }

    return (
        
        <header className="baner" 
        style={{
            backgroundImage : `url("${base_url}${movies?.backdrop_path}")`,
            backgroundSize : 'cover',
            backgroundPosition : 'center center'
        }}
        >
            <div className="baner-content">
                <h1>{movies?.title || movies?.name || movies?.original_name}</h1>
                <div className="baner-btns">
                    <button className="baner-btn">Play</button>
                    <button className="baner-btn">My List</button>
                </div>
               <p>{truncate(movies?.overview , 300)}</p>
            </div>
            <div className="shadow"></div>
        </header>
    )
}

export default Baner
