const express = require("express")
const app = express()

const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true})

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

//responsible for mongo routes
require("./routes/mongo-routes")(app)
//responsible for get routes - exercise and stats
require("./routes/html-routes")(app)

app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`))