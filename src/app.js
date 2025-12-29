// Purpose of this file is to setup the application with the right middleware
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello from Acquisitions!");
});

export default app;
