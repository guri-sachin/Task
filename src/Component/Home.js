import React, { useState,useEffect } from 'react';
import Header from './Header';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Navbar, nav, Container, Carousel, Table, Card, Row, Col } from 'react-bootstrap';

const Home = () => {


    const [college,setCollege] =useState([]);
    const [details,setDetails] =useState([]);
    const [key,setKey] =useState([]);
    const navigate = useNavigate();
  
    useEffect(()=>{
      axios.get("http://16.171.29.86:3306/clgall").then(res=>setCollege(res.data));
  },[]);

  function handel(e){
    setKey(e.target.value)
  }
  console.log(key)

     const Searchn = async (e)=>{
  
     
     let result = await fetch(`http://16.171.29.86:3306/searching/${key}`);
     result = await result.json()
     setCollege(result)
 console.log(result)
 navigate('/Lall', { state: result })
     
    }

   
    async function Show(e){
  let id = e.target.id
      

  navigate('/Detail', { state: id })
    }

  // const Searchn = async (e)=>{
    

   
  //   let key = e.target.value;
   
  //   if(key){
  //   let result = await fetch(`http://localhost:4200/searching/${key}`);
  //   result = await result.json()
  //   console.log(result)
  //   if(result){
  //     setCollege(result)
     
    
  //   }
  //   }
    // else{
    //   getproduct();
    
    // }
    
    
    
  // function Shear(e){
  //   if(e.keyCode==13 || e.target.value ==13){
  //     // navigate("/Lall",{ state: college })
  //         }
  
  
  // }
  console.log(college)
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
      <Button style={{backgroundColor:"#FF735C"}} onClick={Searchn}>Search</Button>
    </form>
  </div>
</nav>
  <div className="container-fluid">
      <div className="row">
        <div className="col-12" >
          <img src="images/6334076.jpg" className="img-fluid hh" alt="Responsive Image" />
        </div>
      </div>
    </div>
    <div class="row" >

<div class="col heading">
    {" "}
    <h1>
        <b id="labout">List of all University</b>

    </h1>
    </div>
    </div>
<br></br>
<br></br>

    <div className='container'>
        <div className='row'>
        {college.map((item, index) => (
     
       

          <div className='col-md-6'  key={index}>
            <div class="card">

              <div class="card-body">
                <h5 class="card-title">
                  <a href="#" style={{ textDecoration: "none" }}>

                    <a href="#">
                      <img src="https://static.vecteezy.com/system/resources/thumbnails/005/170/934/small/shield-college-university-logo-free-vector.jpg" alt="product name" className='card-media' />
                    </a>   {item.clgname}

                  </a>
                  <p className='loc1'> <i class="fa fa-map-marker" aria-hidden="true"></i>{item.city}</p>
                </h5>

                <div class="card-footer">

                </div>
                <div class="containers">
                  <div class="column" >
                    <p>Course Offered</p>
                    <h6><a href=''>{item.cs} Course |RANK {item.rank}</a></h6>
                    <p>Total Tuition Fees</p>
                    <p>₹{item.fees} </p>
                  </div>

                  <div class="column" >
                    <p>Exams Accepted</p>
                    <p>{item.exam} </p>
                    <p>Average Package</p>
                    <p>₹{item.package} </p>
                  </div>

                  <div class="column"  id='col1'>
                    <button type="button" class="btn btn-outline-success"><i class="fa fa-shield"></i> Dumy</button><br /><br />
                    <button type="button" id={item.id} class="btn btn-success" onClick={Show} > <i class="fa fa-address-card-o"></i> Details</button>
                  </div>
                </div>

              </div>
            </div>
            <br></br>
          </div>

      
          ))}
      
        </div>
      </div>
   


  
    </div>
  )
}

export default Home
