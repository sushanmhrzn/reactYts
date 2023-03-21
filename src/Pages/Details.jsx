import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Details = () => {
  const [movie,setMovie]=useState({});
  const {id}=useParams();
  console.log(id);
  // let genres=movie.genres;
  // console.log(genres.join(","));
  // const location=useLocation();
  // const id =location.state?.data;
  // console.log(id);
//  console.log(movie.genres.join(",")) 
 useEffect(()=>{
    getApi();
  },[])

async function getApi(){
  try{
    // throw "Data not found"
    const promise=fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    promise.then(res=>res.json())
    .then(data=>setMovie(data.data.movie))
  }catch(e){
    console.log(e);
  }
}

  return (
    <div className='detail-box' key={movie.id}>
      {
      
      }
      {/* <div className='detail-custom-box'> */}
      <p>{movie?.title}</p>
      <img src={movie.large_cover_image}/>
      <p style={{marginTop:"10px"}}>Year:{movie.year}</p>
      
      <p>Genres:{(movie.genres)}</p>
      <p style={{marginTop:"10px"}}>Description</p>
      <p style={{marginTop:"20px"}}>{movie.description_full}</p>
      {/* <p>Hello</p> */}
      {/* </div> */}
    </div>
  )
}

export default Details