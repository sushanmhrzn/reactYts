import React,{useEffect, useState} from 'react'
import '../css/app.css';
import {Link} from 'react-router-dom';
import Navbar from '../component/Navbar';

const HomePage =() => {
  const [movies,setMovies]=useState([]);
  const [value,setValue]=useState('');

  //Run when variable named value is changed
  useEffect(()=>{
      if(value===""){
        getAndSetApi();
      }
      setFilterMovies();
  },[value])
  
  //called from useEffect() function which filters the movies according to the value set handleChange function
  function setFilterMovies(){
    const results=movies.filter(movie =>{
      return movie.title.includes(value);
    })
    setMovies(results);
  }

  //Function is called when we change something in the input tag
  function handleChange(e){
    setValue(e.target.value);
 }

 //Used for fetching the api
  async function getAndSetApi(){
    
      await fetch("https://yts.mx/api/v2/list_movies.json")
      .then(res => res.json())
      .then(data => setMovies(data.data.movies))
      .catch(error=>console.log(error));
  }

    return(
     <div className='main-box'>
        <div className='custom-box'>
          <div className='header'>
            <div className='movie-type'>Movies</div><input type='text' placeholder='Search...' onChange={handleChange}/>
            </div>
            {movies.map(({title,large_cover_image,id})=>( //Using the object destructuring in map function
              <div className='content-box' key={id}>
              <img  src={large_cover_image} alt={title}/>
              <p >{title}</p>
              <Link to={`details/${id}`}  className='btn'>Details</Link>
              {/* <Link to='/details' className='btn'><button className='btn' onClick=''>Details</button></Link> */}
              </div>
            ))}

        </div>
     </div>
     
    )

}

export default HomePage