// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import HomePage from './Pages/HomePage';
import Details from './Pages/Details';
import Login from './Pages/Login';
import {BrowserRouter as Router,createBrowserRouter,Outlet,Route, RouterProvider} from 'react-router-dom';
import Signup from './Pages/Signup';

function App() {
  return (
    <RouterProvider router={route}/>
  );
}
const Layout=()=>{
  // <>
  // <Navbar/>
  // <Outlet/>
  // <Footer/>
  // </>r
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const route=createBrowserRouter([
  {
    path :'/',
    element:<Layout />,
    children:[
      {
        path:'',
        element:<HomePage/>
      },
      {
        path:'details',
        element:<Details/>
      }
    ]
  },{
    path:'/login',
    element:<Login/>
  }
  ,{
    path:'/signup',
    element:<Signup/>
  }
])

export default App;
