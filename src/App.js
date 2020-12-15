import React from 'react';
//import request
import requests from './requests';
//import style 
import './App.css';
//import component
import Row from './Row';
import Baner from './Baner';
import Header from './Header';


function App() {
  
  return (
    <div className="App">
      <Header />
      <Baner />
      <Row title={'NETFLIX ORIGINALS'} fetchURL={requests.fetchNetflixOriginals} largRow={true} />
      <Row title={'Trending Now'} fetchURL={requests.fetchTrending} />
      <Row title={'Top Rated'} fetchURL={requests.fetchTopRated} />
      <Row title={'Action Movies'} fetchURL={requests.fetchActionMovies} />
      <Row title={'Comedy Movies'} fetchURL={requests.fetchComedyMovies} />
      <Row title={'Horror Movies'} fetchURL={requests.fetchHorrorMovies} />
      <Row title={'Romance Movies'} fetchURL={requests.fetchRomanceMovies} />
      <Row title={'Documentaries'} fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
