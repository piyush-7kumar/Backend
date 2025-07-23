const express = require("express");
const app = express();
const currencyRoutes = require("./routes/currencies.routes");
const UsersRoutes = require("./routes/user.routes");
const blogRoutes = require("./routes/blog.routes")
const connectDB = require("./db/connect");
const port = 8081;
connectDB()

app.use(express.json())
app.use("/currencies",currencyRoutes);

app.use("/users",UsersRoutes);

app.use("/blogs",blogRoutes)

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
});