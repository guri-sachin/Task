     const express =require("express");
const path =require("path");
const app = express();
const mysql = require('mysql');
const bodyParser =require('body-parser');
const cors=require("cors");




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, '/public')));



//create connection
const conn =mysql.createConnection({
    // host:'localhost',
    // user:'root',
    // password: '',
    // database:'youngshop'
    host:'database-1.cfiyxi2mso2m.eu-north-1.rds.amazonaws.com',
    user:'admin',
    password:'NomadZindagi1234',
    database:'nomad',
     port:'3306'

});



//connect to database
conn.connect((err) =>{
    if(err) throw err;
    console.log ('Mysql Connected...');
});

//multer


//route for list all colleges
app.get('/clgall',(req,res) =>{
    let sql ="SELECT * FROM  clg;";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});

//route for list all location
app.get('/listloc',(req,res) =>{
    let sql ="SELECT * FROM  location;";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});

//route for list all location
app.get('/liststream',(req,res) =>{
    let sql ="SELECT * FROM  stream;";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


// //route for product update
// app.post('/trandingupdate',(req,res)=>{
   
//     let sql ="UPDATE tranding SET numbar ='"+ total+"' WHERE coursc='"+req.body.coursc+"'";
//     console.log(sql);
//     let query = conn.query(sql,(err,results)=>{
//         if(err) throw err;
//         res.json(results);
//     });


// });

// const numbar = parseFloat(req.body.numbar);
// const nm = 1;
// const total = numbar + nm; 

app.post('/trandingupdate', (req, res) => {
    
    let selectSql = "SELECT * FROM tranding WHERE coursc='" + req.body.coursc + "'";
    let selectQuery = conn.query(selectSql, (selectErr, selectResults) => {
      if (selectErr) throw selectErr;
  
     
      if (selectResults.length > 0) {
        console.log(selectResults)
        const currentNumbar = parseFloat(selectResults[0].numbar);
        // const numbar = parseFloat(req.body.numbar);
        const nm = 1;
        

        const total = currentNumbar + nm;
  console.log(total)
   
        let updateSql = "UPDATE tranding SET numbar='" + total + "' WHERE coursc='" + req.body.coursc + "'";
        let updateQuery = conn.query(updateSql, (updateErr, updateResults) => {
          if (updateErr) throw updateErr;
  
          res.json("5");
        });
      } else {
        res.json("5");
        // res.status(404).json("4");
      }
    });
  });
  
  

//route for list all location
app.get('/listsugstion',(req,res) =>{
    let sql ="SELECT * FROM  tranding;";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


app.get('/detailsall/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="SELECT * FROM clg WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});

// select tranding 



// search api
app.get('/searching/:key',function(req,res) {
    
    const name= (req.params.key);
    //console.log(name);
  
  let sql ="SELECT * FROM clg WHERE stream LIKE ?"
 let value ="%"+name+"%"
    //let sql = "select * from products where name ='"+req.params.key+"'" ;
    let query = conn.query(sql,[value],(err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});


//select clg 
//route for list products on the bases of color
app.post('/locationls',(req,res) =>{
    
    const color= (req.body.color);
    //console.log(name);
  
  let sql ="SELECT * FROM clg WHERE city LIKE ?"
 let value ="%"+color+"%"

    let query =conn.query (sql,[value],(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


//route for list clg on the bases of stream
app.post('/streamlist',(req,res) =>{
    
    const color= (req.body.color);
    //console.log(name);
  
  let sql ="SELECT * FROM clg WHERE stream LIKE ?"
 let value ="%"+color+"%"

    let query =conn.query (sql,[value],(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});
app.listen(3306,()=>{
    console.log(`express server running on 3306`);
});
