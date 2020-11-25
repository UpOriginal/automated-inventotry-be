const express = require("express");
const neatCsv = require("neat-csv");
const router = express.Router();
const fs = require("fs");
router.get("/", (req, res) => {
  fs.readFile("./florida.csv", async (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const result = await neatCsv(data);
    res.status(200).json(await neatCsv(data));
    for (let i = 0; i < result.length; i++) {
      console.log(result[i].order, result[i].companyLink,result[i].companyName);
    }
  });
});

module.exports = router;
