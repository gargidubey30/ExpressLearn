//www.thapa.com-welcome to my home page
//about-welcome to my about page
//contact-welcome to my contact page
//temp-welcome to my temp page


const express= require("express");

const app= express();

const port=3000;


//send -one line
//write -multiple lines

app.get("/", (req, res) => {
  res.write("<h1>welcome to my home page<h1>");
  res.write("<h1>Hi I am Gargi Dubey<h1>");
  res.send();//close 
});

app.get("/about", (req, res) => {
  res.status(200).send("hello  world from the ABOUT page");
});

app.get("/contact", (req, res) => {
    res.send("hello  world from the CONTACT page");
  });

 app.get("/temp", (req, res) => {
    res.send("hello  world from the TEMP  page");
  });  


  //send json data
//   app.get("/json", (req, res) => {
//     res.send([
//       {
//       id:1,
//       name:"gargi",
//       age:21,
    

//     },
//     {
//       id:1,
//       name:"gargi",
//       age:21,
    

//     },
    
//     {
//       id:1,
//       name:"gargi",
//       age:21,
    

//     }
//   ]);
//  });  


// res.json
 app.get("/json", (req, res) => {
  res.json([
    {
    id:1,
    name:"gargi",
    age:21,
  

  },
  {
    id:1,
    name:"gargi",
    age:21,
  

  },
  
  {
    id:1,
    name:"gargi",
    age:21,
  

  }
]);
});  

//The methods are identical when an object or array is passed, but res.json() will also convert non-objects, such as null and undefined, which are not valid JSON.

app.listen(port,()=>{
    console.log(`listening to the port no  ${port}`);
    });
    
    