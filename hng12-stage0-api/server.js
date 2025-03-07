const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        email: process.env.EMAIL,
        current_datetime: new Date().toISOString(),
        github_url: process.env.GITHUB_URL,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
