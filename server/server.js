const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const mongoose = require('mongoose');

const connectParams = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}


const url =
  "mongodb+srv://root:abcd1234@anime.tpuvkvi.mongodb.net/Portfolio?retryWrites=true&w=majority";

const connection = mongoose
  .connect(url, connectParams)
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));


const team = mongoose.Schema({
  name:"String",
  image:"string"
})

const team_details = mongoose.model("team", team, "team")

const project_schema = mongoose.Schema({
  name: "String",
  image: "String",
  gitlink: "String",
});

const project = mongoose.model("project", project_schema, "project");
 

app.get("/api/team/", (req,res)=>{
  team_details.find()
              .then((data)=>res.send(data))
              .catch((error)=>console.log(error))
})



app.get("/api/projects", (req, res) => {
  project.find()
    .then((project) => res.send(project))
    .catch((err) => console.log(err));
});

app.listen(3000, () => console.log("app listening on port 3000"));


