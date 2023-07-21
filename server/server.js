const path = require("path");
const express = require('express')
const publicPath = path.join(__dirname, "view");
const port = process.env.PORT || 3000;

const app = express()
app.set('view', publicPath)
app.set("view engine", 'hbs')
app.use(express.static(publicPath))

app.listen(port, () => {
    console.log('Server is up on port 3000')
})