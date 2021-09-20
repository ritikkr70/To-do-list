//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.set("view engine", "ejs");
const items = ["Buy food","Cook food","Eat food"];
const workitems=[];
app.get("/", function(req, res){
  const day = date.getdate();

  res.render("list" , {listTitle : day , newListItems : items});
});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",newListItems:workitems})
})

app.post("/",function(req,res){
  if (req.body.list ==="Work List"){
  var workitem=req.body.newItem;
  workitems.push(workitem);
  res.redirect("/work");
  }else {
  var item= req.body.newItem ;
  items.push(item);
  res.redirect("/");
  }
});




app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
