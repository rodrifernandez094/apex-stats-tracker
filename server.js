const express = require("express");
const dotenv = require("dotenv").config({ path: `${__dirname}/config/config.env` });
const routes = require("./routes/routes");
const path = require('path');

const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use("/api/profile", routes);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./client/build")));
}

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on port ${port}`));
