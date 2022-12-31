var express = require('express');
var path = require('path');
var fs = require('fs');
const { Console } = require('console');
const { json } = require('express');
var app = express();

var flash = require('connect-flash');
var session = require('express-session');



//var Mongoclient = require('mongodb').MongoClient;


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret',
  cookie: {maxAge:60000},
  resave:false,
  saveUninitialized:false
}));
app.use(flash());

//app.listen (3000);






//const express = require("express");
//const app = express();
const PORT = process.env.PORT || 3030;

// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});



  app.get('/', function(req, res){


    res.render('login',{message: req.flash('message')})

    
    });

  app.get('/login', function(req, res){
    res.render('login',{message: req.flash('message')});
  });

  app.get('/home', function(req, res){

    if(req.session.username !=null && req.session.password !=null ){

    res.render('home')
    
    }
    else{
      res.redirect('/login');
    }
       });

app.get('/registration', function(req, res){
   res.render('registration',{message: req.flash('message')})
      });


app.get('/hiking', function(req, res){
if(req.session.username !=null && req.session.password !=null ){

    res.render('hiking')
    }
    else{
      res.redirect('/login');
    }
      });
app.get('/cities', function(req, res){
  if(req.session.username !=null && req.session.password !=null ){

    res.render('cities')
    }
    else{
      res.redirect('/login');
    }
      });
    
 app.get('/islands', function(req, res){
  if(req.session.username !=null && req.session.password !=null ){

    res.render('islands')
    }
    else{
      res.redirect('/login');
    }
          });

               
app.get('/wanttogo', function(req, res){

  if(req.session.username !=null && req.session.password !=null ){

  /*
  Mongoclient.connect("mongodb://0.0.0.0:27017", function (err, client) {
if (err) throw err;
var db = client.db('MyDB');

db.collection('myCollection').find().toArray(function(err,results){
  var locArr=[];
  var j=0;


    for (let i = 0; i < results.length; i++) {
      if(JSON.stringify((results[i]).username)===JSON.stringify(req.session.username)){

        var ar= []
        ar= (results[i]).location //((req.session.wanttogo)[i]).
        for(let z=0; z<(ar).length;z++){

    locArr[j]= ar[z];
j++;

  



        }
        }
      }
      

      res.render('wanttogo',{ToArr:locArr,message:"The Want To Go List is Empty"})


 // });
  
   


//});

*/


req.flash('message',"DOES NOT WORK IN DEPLOYED VERSION");
res.redirect('/wanttogo');

}
else{
  res.redirect('/login');
}

      });



app.get('/searchresults', function(req, res){

  if(req.session.username !=null && req.session.password !=null ){

    res.render('searchresults',{ToArr:[],message:""})
  }
    else{
      res.redirect('/login');
    }

      });


 app.get('/inca', function(req, res){
  if(req.session.username !=null && req.session.password !=null ){

    res.render('inca',{message: req.flash('message')})
  }
    else{
      res.redirect('/login');
    }
});

app.get('/annapurna', function(req, res){
  if(req.session.username !=null && req.session.password !=null ){

    res.render('annapurna',{message: req.flash('message')})
  }
    else{
      res.redirect('/login');
    }         
       }); 

app.get('/paris', function(req, res){
  if(req.session.username !=null && req.session.password !=null ){

    res.render('paris',{message: req.flash('message')})
  }
    else{
      res.redirect('/login');
    } 
                }); 

        
app.get('/rome', function(req, res){
  if(req.session.username !=null && req.session.password !=null ){

    res.render('rome',{message: req.flash('message')})
  }
    else{
      res.redirect('/login');
    } 
}); 

app.get('/bali', function(req, res){
  if(req.session.username !=null && req.session.password !=null ){

    res.render('bali',{message: req.flash('message')})
  }
    else{
      res.redirect('/login');
    } 
                 }); 

app.get('/santorini', function(req, res){
  if(req.session.username !=null && req.session.password !=null ){

    res.render('santorini',{message: req.flash('message')})
  }
    else{
      res.redirect('/login');
    }            }); 

//////////////////////////////////////////////////////////


app.post('/', function(req, res){
var u = req.body.username;
var p = req.body.password;
var a1= "admin";

req.session.username=req.body.username;
req.session.password=req.body.password;
req.session.wanttogo=[];

/*
  Mongoclient.connect("mongodb://0.0.0.0:27017", function (err, client) {
if (err) throw err;
var db = client.db('MyDB');

  db.collection('myCollection').find().toArray(function(err,results){
  var flag =false;
  */

  for (let i = 0; i < results.length; i++) {
    if(//(JSON.stringify(results[i].username)===JSON.stringify(u) && JSON.stringify(results[i].password)===JSON.stringify(p)) ||
     (JSON.stringify(a1)===JSON.stringify(u) &&
     JSON.stringify(a1)===JSON.stringify(p)) ){
            console.log("HEREEEE")
      flag=true;
      res.redirect('/home')
      break;
    }
    

  }
  if(flag==false){
   
  req.flash('message',"username or password are wrong, or you don't have an account");
  res.redirect('/login');

  
  }
  });
  


   //});


   // });

    



    app.post('/login', function(req, res){
      var u = req.body.username;
      var p = req.body.password;
      var a1 = "admin"

      req.session.username=req.body.username;
      req.session.password=req.body.password;
      req.session.wanttogo=[];

      
/*
        Mongoclient.connect("mongodb://0.0.0.0:27017", function (err, client) {
      if (err) throw err;
      var db = client.db('MyDB');
      
      
      db.collection('myCollection').find().toArray(function(err,results){
        var flag =false;

        */
        for (let i = 0; i < results.length; i++) {
          if(//(JSON.stringify(results[i].username)===JSON.stringify(u) && JSON.stringify(results[i].password)===JSON.stringify(p)) ||
          (JSON.stringify(a1)===JSON.stringify(u) &&
          JSON.stringify(a1)===JSON.stringify(p)) ){
            flag=true;
            res.redirect('/home')
            break;
          }
          
      
        }
        if(flag==false){
          req.flash('message',"username or password are wrong, or you don't have an account");
          res.redirect('/login');


        
        }
        });
        
      
      
     //    });
      

     
      
        // });

         





//////////////////////////////////////////////////////////////////





var GArr = ['inca trail to machu picchu','annapurna circuit','paris','rome','bali island','santorini island']

app.post('/search', function(req, res){

  if(req.session.username !=null && req.session.password !=null ){

    /*
Mongoclient.connect("mongodb://0.0.0.0:27017", function (err, client) {
if (err) throw err;
var db = client.db('MyDB');
*/
var x= (req.body.Search).toLowerCase();

if(x.length!=0){


var locArr = GArr.filter(a =>a.includes(x));



if(locArr.length==0){
 res.render('searchresults',{ToArr:locArr,message:"Destination not Found"})

}
else{
  res.render('searchresults',{ToArr:locArr,message:""})

}


}
else{
  res.render('searchresults',{ToArr:[],message:""})

}

  // });


  }
  else{
    res.redirect('/login');
  }
  
       });




////////////////////////////////////////////////////////////////

app.post('/register', function(req, res){


  req.flash('message',"DOES NOT WORK IN DEPLOYED VERSION");
  res.redirect('/registration');



  /*

var x=req.body.username;
var y =req.body.password;


Mongoclient.connect("mongodb://0.0.0.0:27017", function (err, client) {
if (err) throw err;
var db = client.db('MyDB');



db.collection('myCollection').find().toArray(function(err,results){
  var flag =false;

  for (let i = 0; i < results.length; i++) {
    if(JSON.stringify(results[i].username)===JSON.stringify(x) || (JSON.stringify(x))===JSON.stringify("")
    ||  (JSON.stringify(y))===JSON.stringify("")){

    req.flash('message',"ENTER A DIFFERENT USERNAME AND MAKE SURE TO FILL IN BOTH USERNAME AND PASSWORD");
    res.redirect('/registration');


      flag=true;
      break;
    }

  }
  if(flag==false){
  
db.collection('myCollection').insertOne({username:x,password:y, location:[]});

    req.flash('message','successfull registration');
    res.redirect('/login');

    
  }
  });
  


   });
*/
  

         });

        
 


app.post('/inca', function (req, res) {
  newFunction("inca",req,res);     
       });  







app.post('/annapurna', function (req, res) {
  newFunction("annapurna",req,res);     
       });  


////////////////////////////////////////////////////////////////






app.post('/paris', function (req, res) {
  newFunction("paris",req,res);     
       });  



app.post('/rome', function (req, res) {
  newFunction("rome",req,res);     
       });  

        

////////////////////////////////////////////////////////////////



       
 app.post('/bali', function (req, res) {
  newFunction("bali",req,res);     
       });  




       
 
  app.post('/santorini', function (req, res) {
  newFunction("santorini",req,res);     
       });  
    
     

////////////////////////////////////////////////////////////////



function newFunction(s,req,res) {
  
  req.flash('message',"DOESN'T WORK IN DEPLOYED VERISON");
  res.redirect(s);


  /*
    Mongoclient.connect("mongodb://0.0.0.0:27017", function (err, client) {
      if (err)
        throw err;
      var db = client.db('MyDB');

      db.collection('myCollection').find().toArray(function (err, results) {
        var flag = false;
        for (let i = 0; i < results.length; i++) {
          if(JSON.stringify((results[i]).username)===JSON.stringify(req.session.username)){
            for(let z=0; z<( (results[i]).location).length;z++){
          if (JSON.stringify(((results[i]).location)[z]) === JSON.stringify(s)) {


           
           req.flash('message','ALREADY EXIST IN THE WANT TO GO LIST');
           res.redirect(s);
            flag = true;
            break;
          }
        }
        }

        }

        if (flag == false) {
            for (let y = 0; y < results.length; y++) {
              if(JSON.stringify((results[y]).username)===JSON.stringify(req.session.username)){

                var myquery = { username: (results[y]).username,password:(results[y]).password };



                var newD=[];

                newD=((results[y]).location)
               newD.push(s)

                var newvalues = { $set: {username: (results[y]).username,password:(results[y]).password ,location : newD } };
                db.collection('myCollection').updateOne(myquery, newvalues, function(err, res) {
                });

             

                }
                }
              
          res.redirect(s);
          }

      });

    });
    */
}

