const path=require("path");
const express= require("express");

const app= express();

const port=8000;

// use the responsive webisite path
const StaticPath = path.join(__dirname,"../public");
//builtin middleware
app.use(express.static(StaticPath));

app.get("/", (req, res) => {
    res.send("Hello from the EXPRESS server");
  });


app.listen(port,()=>{
    console.log(`listening to the port no  ${port}`);
    });
    


    //app.get(route ,callback)
// call back function has two parameters , request  and response
// request  object represents the HTTP request and has properties for the request query settings , parameters , body, HTTP headers etc.

//response object represents the HTTP response that the Express app sends when it recieves the HTTP request.

// "/" represents root domain home page www.thapatechnical.com

// get -read
//post- create 
//put-update
//delete-delete