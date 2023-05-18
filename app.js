const express = require('express');
const db = require("./pkg/db/index");
const akademijaHandler = require("./handlers/akademijaHandler");
const kursHandler = require("./handlers/kursHandler");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


db.init();

app.get("/Akademija", akademijaHandler.getAll);
app.patch("/Akademija/:id", akademijaHandler.update);
app.post("/Akademija", akademijaHandler.create);
app.delete("/Akademija/:id", akademijaHandler.delete);

app.get("/Kurs", kursHandler.getAll);
app.patch("/Kurs/:id", kursHandler.update);
app.post("/Kurs", kursHandler.create);
app.delete("/Kurs/:id", kursHandler.delete);

app.listen(process.env.PORT, (err) => {
    if (err) {
      return console.log("Could not start service");
    }
    console.log("service started successfully on port 10000");
  });