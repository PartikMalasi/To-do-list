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
  //   console.log(c);
  const data = { htmlContant: c, date: dates };
  res.redirect("/");
  // res.render("index.ejs",data);
});

app.get("/delete", (req, res) => {
  const taskId = parseInt(req.query.taskId);
  console.log(taskId);
  c = c.filter((task) => task.id !== taskId);
  console.log("delete " + c);
  //    c=newArrayWithoutTask;
  const data = { htmlContant: c, date: dates };
  res.redirect("/");
  // res.render("index.ejs",data);
});

app.listen(port, () => {
  console.log("done");
});
