import React, { useState,useEffect } from 'react';
import Header from './Header';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { Form, Button, Navbar, nav, Container, Carousel, Table, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [key,setKey] =useState([]);
    const [college,setCollege] =useState([]);
    const [loc,setLoc] =useState([]);
    const [stmlp,setStreams] =useState([]);
    const location = useLocation();
    const navigate = useNavigate();
  
  useEffect(()=>{
     setCollege(location.state)
         },[]);

  useEffect(()=>{
          axios.get("http://16.171.29.86:3306/listloc").then(res=>setLoc(res.data));
          axios.get("http://16.171.29.86:3306/liststream").then(res=>setStreams(res.data));
      },[]);
      
function handel(e){
    setKey(e.target.value)
  }

  const Searchn = async (e)=>{
  let result = await fetch(`http://16.171.29.86:3306/searching/${key}`);
     result = await result.json()
     setCollege(result)}
    
function Show(e){
 var data=  {"color":e.target.value}
 axios.post("http://16.171.29.86:3306/locationls",data).then(
        res=>  
        setCollege(res.data)
  )}
  
  function Shop(e){
    var data=  {"color":e.target.value}
    axios.post("http://16.171.29.86:3306/streamlist",data).then(
           res=>  
           setCollege(res.data)
     )}

        
    async function Shol(e){
      let id = e.target.id
          
    
      navigate('/Detail', { state: id })
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
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handel}  />
      <Button style={{backgroundColor:"#FF735C"}}  onClick={Searchn}>Search</Button>
    </form>
  </div>
</nav>
<br></br>
<br></br>
  <div className='container'>
        <div className='row'>
        <div className='col-md-4'>
            <div class="containerss">
              <div id="accordion" >
                <div class="car">
                  <div class="car-header" id="headingOne">
                    <h5 class="mb-0">
                      <div
                        class="ss"
                        id="dropdowntabout"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        {" "}
                        <i
                          class="fa"
                          aria-hidden="true"
                          style={{ color: "darkgrey", fontSize: "20px" }}
                        ></i>{" "}
                        ▼ Category
                      </div>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                    aria-expanded="true"
                  >
                    <div class="card-body">

                      <div class="container">


                        <div className="checkbox-container">
                           {stmlp.map((item, index) => (
                          <div class="control-group" key={index}>

                          <label class="control control--checkbox" >{item.stm}
                              <input name="two" type="radio"  value={item.stm} onClick={Shop}/>
                              <div class="control__indicator"></div>
                            </label>
                           

                          </div>
                           ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="car">
                  <div class="car-header" id="headingTwo">
                    <h5 class="mb-0">
                      <div
                        class="ss"
                        id="dropdowntabout"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i
                          class="fa"
                          aria-hidden="true"
                          style={{ color: "darkgrey", fontSize: "20px" }}
                        ></i>{" "}
                        ▼ Location
                      </div>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse show"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <div class="container">
                      <div className="checkbox-container">
                      {loc.map((item, index) => (
                          <div class="control-group" key={index}>
                        
     
                            <label class="control control--checkbox">{item.city}
                              <input name="one" type="radio" value={item.city} onClick={Show} />
                              <div class="control__indicator"></div>
                            </label>
                          
                       

                        

                          </div>
                         
          ))}
      
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
         
     
       
          <div className='col-md-8'  >
            <div class="container" id='ab'>
              <div class="row">
              {college.map((item, index) => (
                <div class="col-sm-12" key={index}>
                  <div class="card" >

                    <div class="card-body">
                      <h5 class="card-title">
                        <a href="#" style={{ textDecoration: "none" }}>

                          <a href="#">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/170/934/small/shield-college-university-logo-free-vector.jpg" alt="product name" className='card-media' />
                          </a>    {item.clgname}  <div class="icon-wrapper"><i class="fa fa-bookmark-o  custom-icon"> <span class="fix-editor">&nbsp;</span></i></div>

                        </a>
                        <p className='loc'> <i class="fa fa-map-marker" aria-hidden="true"></i> {item.city}</p>
                      </h5>

                      <div class="card-footer">

                      </div>
                      <div class="containers">
                        <div class="column" >
                          <p>Course Offered</p>
                          <h6><a href=''>{item.cs} Course |  RANK {item.rank}</a></h6>
                          <p>Total Tuition Fees</p>
                          <p>₹{item.fees} </p>
                        </div>

                        <div class="column" >
                          <p>Exams Accepted</p>
                          <p>{item.exam} </p>
                          <p>Average Package</p>
                          <p>₹{item.package} </p>
                        </div>

                        <div class="column" >
                          <button type="button" class="btn btn-outline-success"><i class="fa fa-shield"></i> Dummy</button><br /><br />
                          <button type="button" id={item.id} class="btn btn-success" onClick={Shol} > <i class="fa fa-address-card-o"></i> Details</button>
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
        </div>
  
    </div>
    </div>
  )
}

export default Home
