// server.js
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.post("/messages", function(req, res) {
    console.log("req.body: ", req.body);
    res.json({status: "Message recieved!"});
});

app.listen(8080, function () {
  console.log(`Server is running on port 8080`);
});