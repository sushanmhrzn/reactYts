import React,{useEffect, useState} from 'react'
import '../css/app.css';
import {Link} from 'react-router-dom';

const HomePage = () => {
  const [movies,setMovies]=useState([]);
  // let moviesList=[];
  // const [date,setDate]=useState(new Date());
// //  setCount=100;
//   return (
//    <>
//       <div>Clicked  {count}</div>
      
//       <button onClick={()=>setCount(++count)}>+</button>
//       <button onClick={()=>setCount(--count)}>+</button>
//   </>
  // )
  const runOnlyOnce=useEffect(()=>{
    try{
      const promise=fetch("https://yts.mx/api/v2/list_movies.json");
      promise.then(res => res.json())
      .then(data => setMovies(data.data.movies));
    }catch(e){
      console.log(e);
    }
  },[])
    // useEffect(()=>{
    //   var timer=setInterval(()=>{
    //     setDate(new Date());
    //   },1000);
    //    return function cleanup(){
    //     clearInterval(timer)
    //    }
    // });
    // return (<h1>Here the example of rendering: {new Date().getFullYear}</h1>)
    return(
     <div className='main-box'>
        <div className='custom-box'>
          {/* <div className='content-box'>
          </div>
          <div className='content-box'>
          </div>
          <div className='content-box'>
          </div>
          <div className='content-box'>
          </div>
          <div className='content-box'>
          </div>
          <div className='content-box'>
          </div> */}
          {/* <Set movies={movies}/> */}
        
            {movies.map((item)=>(
              <div className='content-box'>
              <img key={item} src={item.large_cover_image} alt={item.title}/>
              <p >{item.title}</p>
              <Link to='details'  state={{data:item.id}} className='btn'>Details</Link>
              {/* <Link to='/details' className='btn'><button className='btn' onClick=''>Details</button></Link> */}
              </div>
            ))}

        </div>
     </div>
     
    )

}
// function Set({movies}){
//   let moviesList=[];
//   moviesList=movies.map((movies)=>{
//     <div className='content-box'>Hello</div>
//   });
//   return moviesList;
// }
// function changed(setCount){
//   console.log(setCount+=1);
// };

export default HomePage