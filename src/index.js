//for responsive website
const path=require("path");
const hbs=require("hbs");
const express= require("express");
const app= express();
const port=8000;


const StaticPath = path.join(__dirname,"../public");
//builtin middleware
app.use(express.static(StaticPath));


//to set the view engine
app.set("view engine","hbs");

//customizing the views directory
const templatePath=path.join(__dirname,"../templates/views");
app.set("views",templatePath);



//partials path
const partialsPath=path.join(__dirname,"../templates/partials");

//using partials
hbs.registerPartials(partialsPath);






// TOP TO BOTTOM RULE
// template engine route
app.get("/",(req,res)=>{
    res.render('index',{
        channelName: "Gargi Dubey", //dynamic content
    });  
});



app.get("/",(req,res)=>{
res.send("hello world from the express server");

});

//through view
app.get("/about",(req,res)=>{
    res.render("about");
    });


// app.get("/about",(req,res)=>{
//     res.send("hello  world from the about page");
//     });


app.get("/about",(req,res)=>{
   // console.log(req.query.name)
    res.render("about");
    
    });

// app.get("*" , (req,res) => {
//     res.render("404", {
//         errorcomment: "Oops page couldn't be found",
//     });
    
// });
    
// app.get("/about/*" , (req,res) => {
//     res.render("404", {
//         errorcomment: "Oops this page doesnot exist",
//     });
    
// });

    


app.listen(port,()=>{
console.log(("listening the port at 8000"));
});










