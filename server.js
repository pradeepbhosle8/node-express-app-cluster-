const express = require("express");
const cluster = require("cluster");
const totalCPUs = require("os").cpus().length;

const fabObj = require("./math-logic/fibonacciseries");
const { request } = require("http");

if (cluster.isMaster) {
  console.log(`Total Number of CPU Counts is ${totalCPUs}`);

  for (var i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }
  cluster.on("online", (worker) => {
    console.log(`Worker ID is ${worker.id} and PID is ${worker.process.pid}`);
  });
  cluster.on("exit", (worker) => {
    console.log(
      `WOrker ID is ${worker.id} and PID is ${worker.process.pid} is offline`
    );
    console.log(`Lets Fork New Worker !`);
    cluster.fork();
  });
} else {
  const app = express();
  app.get("/", (req, res) => {
    console.log(
      `WOrker Process ID - ${cluster.worker.process.pid} has accepted the Request!`
    );
    let number = fabObj.calculateFibonacciValue(
      Number.parseInt(req.query.number)
    );
    res.send(`<h1>${number}</h1>`);
  });

  app.listen(3000, () => console.log(`Express App is running on PORT : 3000`));
}
