const express = require("express");
const app = express();
const PORT = 4001;

app.use("/", require("./routes"));

app.listen(PORT, () => console.log("\x1b[45m", `server is running on ${PORT}`));
