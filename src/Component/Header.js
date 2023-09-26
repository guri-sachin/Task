
import React, { useState,useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

const Header = () => {

  const [college,setCollege] =useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [key,setKey] =useState([]);
   

  // useEffect(() => {

  //   getproduct();
  
  // }, []);
  
  // const getproduct = async() =>{
   
  //   let result = await fetch("http://localhost:4200/allproducts");
  //  result = await result.json()
  //  console.log(result)
  //   setCollege(result)
    
  // }
  
  const Searchn = async (e)=>{
    

   
    let key = e.target.value;
   
    if(key){
    let result = await fetch(`http://localhost:4200/searching/${key}`);
    result = await result.json()
    console.log(result)
    if(result){
      setCollege(result)
     
    
    }
    }
    // else{
    //   getproduct();
    
    // }
    
    }
    
  function Shear(e){
    if(e.keyCode==13 || e.target.value ==13){
      navigate("/Lall",{ state: college })
          }
  
  
  }
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
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={Searchn}  onKeyDown={Shear}/>
      <button class="btn btn-outline-white my-2 my-sm-0"  style={{backgroundColor:"#FF735C"}} type="submit" value={"13"}  onClick={Shear}>Search</button>
    </form>
  </div>
</nav>

{/* <input type="text" class="searchTerm" placeholder="Your door to happiness opens with a search" style={{height:"40px"}} onChange={Searchn}
                 onKeyDown={Shear}/>
                 <button type="submit" class="searchButton" style={{marginTop:"6px"}} value={"13"}  onClick={Shear}></button> */}
    </div>
  )
}

export default Header
