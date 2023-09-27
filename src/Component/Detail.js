import React, { useState,useEffect } from 'react';

import axios from "axios";
import { useLocation } from 'react-router-dom';
import { Form, Button, Navbar, nav, Container, Carousel, Table, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [key,setKey] =useState([]);
    const [deal,setDeal] =useState([]);
    const [id,setId] =useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [college,setCollege] =useState([]);
    const[show,setShow] =useState(false);
    const [sugst,setSugst] =useState([]);

  useEffect(()=>{
  
    const id = location.state;
  
    axios.get(`http://16.171.29.86:3306/detailsall/${id}`).then(
        res => setDeal(res.data));
        axios.get("http://16.171.29.86:3306/listsugstion").then(res=>setSugst(res.data));
         },[]);

         const sortedData = sugst.sort((a, b) => parseInt(b.numbar) - parseInt(a.numbar));
         console.log(sortedData)

         function handel(e){
          setShow(!show);
            setKey(e.target.value)
          }
          console.log(key)

        
          const Searchn = async (e)=>{
  
            var data=  {"coursc":key}
          
        axios.post("http://16.171.29.86:3306/trandingupdate",data).then(
              res=>  
              console.log(res.data)) 
      
           let result = await fetch(`http://16.171.29.86:3306/searching/${key}`);
           result = await result.json()
           setCollege(result)
      
      
       navigate('/Lall', { state: result })
           
          
        }
console.log(deal)
  
  return (
    <div >
 <nav class="navbar navbar-expand-lg navbar-dark bg-success" >
  <a class="navbar-brand" href="#"><img class="jkl" src='images/klj.jpg'></img></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <a class="nav-link" href="#">MBA</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">BCA</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">B.Tech/M.Tech</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">TOP 5 indian College</a>
          <a class="dropdown-item" href="#">Top IIT </a>
       
        </div>
      </li>
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handel}  />
      <Button  style={{backgroundColor:"#FF735C"}} onClick={Searchn}>Search</Button>
    </form>
  </div>
</nav>
{show && <>
      <div className='ccc' style={{position:"relative"}}>
      <div className='c1'>
      <h1 id='h1'><b>Most Trending Course</b></h1>
      <br/>
      <table class="table table-hover">
  <thead>
    <tr></tr>
    <tr>
      <th scope="col"></th>
      <th scope="col">Courses</th>
      <th scope="col"></th>
      <th scope="col">Colleges</th>
    </tr>
  </thead>
  <tbody>
  {sortedData.map((item, index) => (
     
       
    <tr key={index}>
      <td scope="row"></td>
      <td>{item.coursc}</td>
   <td></td>
      <td className='td'>college</td>
    </tr>
   ))}
  </tbody>
</table>
      </div></div>
      </>}
<br></br>
<div class="card">
       
  {deal.map((item, index) => (
    

 
  <div class="card-body" key={index}>
  <td>University Name :    {item.clgname}</td>
  <td>Streams Avilable:     {item.stream}</td>
  
  <td>City:     {item.city}</td>
  </div>
  
    
    ))}
</div>
    </div>
  )
}

export default Home
