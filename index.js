const express = require("express");
const app = express();
const currencyRoutes = require("./routes/currencies.routes");
const UsersRoutes = require("./routes/user.routes")
const port = 8081;


app.use("/currencies",currencyRoutes);

app.use("/users",UsersRoutes);


app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
});