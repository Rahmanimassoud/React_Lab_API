
import { useEffect, useState } from 'react'
import './App.css'
import Forms from './components/Forms/Forms'
import MoviesDisplay from './components/MovieDisplay/MoviesDisplay'
// import axios from 'axios';

function App() {
  
  const apiKey = "98e3fb1f";

  // state to hold movie data
  const [movieData, setMovieData] = useState([]);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
  
      const data = await response.json();
      setMovieData(data);
    } catch(e) {
      console.error(e);
    }
    }

    useEffect(()=> {
      getMovie("Clueless")
    }, []);

    // useEffect(()=>{
    //   axios(`  http://www.omdbapi.com/?i=tt3896198&apikey=8e9f8fdf`).then((res) => {
    //     console.log(res);
    //     let array = res.data.Actors;
    //     setMovieData(array);
    //   })
    // }, [])

  return (
    <div className='App'>
      <Forms moviesearch={getMovie}/>
      <MoviesDisplay movie={movieData}/>
    </div>
  )
}

export default App
