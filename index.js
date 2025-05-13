const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use("/dist", express.static(path.join(__dirname, "dist")));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
