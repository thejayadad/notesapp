require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require("./routes/userRouter.js")
const noteRouter = require("./routes/noteRouter.js");

const app = express()
app.use(express.json())
app.use(cors())

//ROUTES
app.use("/users", userRouter);
app.use("/api/notes", noteRouter)


//LISTEN SERVER
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server going ${PORT}`)
})


//MONGDB CONNECTION//
const uri = process.env.ATLAS_URI;
mongoose.set("strictQuery", false);
mongoose.connect(uri, { useNewUrlParser: true }
);
mongoose.set("strictQuery", false);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})