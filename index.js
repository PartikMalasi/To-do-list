import Express from "express";
import bodyParser from "body-parser";
const app = Express();
const port = 3000;
const hostname = "0.0.0.0";

const currentDate = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dates =
  currentDate.getDate() +
  " " +
  months[currentDate.getMonth() + 1] +
  ", " +
  currentDate.getFullYear();
var c = [];

app.use(Express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { htmlContant: c, date: dates });
});
 var p = 1;
app.post("/check", (req, res) => {
 
  if (req.body.task != []) {
    c.push({ task: req.body.task, id: p });
    p++;
  }
  res.redirect("/");
});

app.get("/delete", (req, res) => {
  const taskId = parseInt(req.query.taskId);
  console.log(taskId);
  c = c.filter((task) => task.id !== taskId);
  console.log("delete " + c);
  res.redirect("/");
});

app.listen(port, () => {
  console.log("done");
});
