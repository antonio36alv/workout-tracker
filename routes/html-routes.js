const path = require("path")
const PUBLIC_DIR = path.resolve(__dirname, ("../public"))

module.exports = app => {

    app.get("/", (req, res) => {
        
        res.sendFile(path.join(PUBLIC_DIR, "./index.html"))
    })

    app.get("/exercise", (req, res) => {

        res.sendFile(path.join(PUBLIC_DIR, "./exercise.html"))
    })

    app.get("/stats", (req, res) => {

        res.sendFile(path.join(PUBLIC_DIR, "./stats.html"))
    })

    app.get("*", (req, res) => {
        
        res.sendFile(path.join(PUBLIC_DIR, "./index.html"))
    })
}
