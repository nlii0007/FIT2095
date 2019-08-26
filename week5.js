let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let db = [];

let viewsPath = __dirname + "/views";


app.use(express.static("image"));

app.engine("html",require('ejs').renderFile);
app.set("view engine","html");

app.use(bodyParser.urlencoded({
    extended:false
}));//values can be only string or array

//Homepage
app.get("/", function(req,res){
    let filename = viewsPath + "/index.html"
    res.sendFile(filename);
});


//add new tasks
app.get("/addNewTask", function(req,res){
    let filename = viewsPath + "/addTask.html";
    res.sendFile(filename);
})


//list all tasks
app.get("/getAllTasks", function(req,res){
    let filename = viewsPath + "/allTasks.html";
    res.render(filename,{Task:db});
})


app.post("/addmyTasks", function(req,res){
    console.log(req.body);

    db.push(req.body);
    res.redirect("/getAllTasks")
});

app.listen(8000);