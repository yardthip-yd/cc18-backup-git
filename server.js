const express = require("express");
const authRoute = require("./routes/authRoute");
const adminRoute = require("./routes/adminRoute");
const userRoute = require("./routes/userRoute");
const app = express();

app.use("/auth", authRoute);
app.use("/admin", adminRoute);
app.use("/user", userRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server on", port));
