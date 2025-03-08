//require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const router = require("./router/auth-router");
//const connectDb = require("./utils/db");
//const errorMiddleware = require("./middleware/error-middlewere");

//lets tackle cors
const corsOptions = {
    origin: ["http://localhost:5173"],
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    Credential: true,
}

app.use(cors(corsOptions));

//app.use(express.json());



app.use("/api/auth", router);

//app.use(errorMiddleware);

const PORT = 4000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
