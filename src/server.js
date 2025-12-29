// Purpose: To run the server, implementing some logging and everything else to make sure the server is running properly import express from "express";

import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
