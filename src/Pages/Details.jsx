import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Details = () => {
  const [movie,setMovie]=useState({});
  const location=useLocation();
  const id =location.state?.data;
  // console.log(id);
  useEffect(()=>{
    try{
      // throw "Data not found"
      const promise=fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      promise.then(res=>res.json())
      .then(data=>setMovie(data.data.movie))
    }catch(e){
      console.log(e);
    }
  },[])
  return (
    <div className='detail-box'>
      {/* <div className='detail-custom-box'> */}
      <p>{movie?.title}</p>
      <img src={movie.large_cover_image}/>
      <p style={{marginTop:"10px"}}>Year:{movie.year}</p>
      {
        console.log(movie.genres)
      }
      <p>Genres:{(movie.genres)}</p>
      <p style={{marginTop:"10px"}}>Description</p>
      <p style={{marginTop:"20px"}}>{movie.description_intro}</p>
      {/* <p>Hello</p> */}
      {/* </div> */}
    </div>
  )
}

export default Details