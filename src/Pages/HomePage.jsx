import React,{useEffect, useState} from 'react'
import '../css/app.css';
import {Link, useFetcher} from 'react-router-dom';
import Navbar from '../component/Navbar';

const HomePage =() => {
  const [movies,setMovies]=useState([]);
  const [filteredMovies,setFilteredMovies]=useState([]);
  const [value,setValue]=useState('');

  console.log(value);
  //Run when variable named value is changed
  // useEffect(()=>{
  //     // if(value===""){
  //       if(value===''){
  //         getAndSetApi();
  //       }else{
  //         setFilterMovies();
  //       }
  // },[value])

  useEffect(()=>{
   getAndSetApi();
  },[]);

  useEffect(()=>{
    console.warn('filtered movies here',value);
    setFilterMovies();
  },[value])
  
  function setFilterMovies(){
    console.log('movies list here',movies)
    const results=movies.filter(movie =>{
      return movie.title.includes(value);
    });
    console.log('results here',results)
    setFilteredMovies(results);
  }

  //Function is called when we change something in the input tag
  function handleChange(e){
    setValue(e.target.value);
 }


 //Used for fetching the api
  async function getAndSetApi(){
      await fetch("https://yts.mx/api/v2/list_movies.json")
      .then(res => res.json())
      .then(data =>{ 
        setMovies(data.data.movies) 
        setFilteredMovies(data.data.movies)
      })
      .catch(error=>console.log(error));
      // console.log("From getsetApi function")
    }

    return(
     <div className='main-box'>
        <div className='custom-box'>
          <div className='header'>
            <div className='movie-type'>Movies</div><input type='text' placeholder='Search...' onChange={handleChange}/>
            </div>
            {filteredMovies.map(({title,large_cover_image,id})=>( //Using the object destructuring in map function
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