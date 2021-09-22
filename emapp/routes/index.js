var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
/** GET METHOD */
router.get("/employee/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const responseObj = {
        firstname: "John",
        lastname: "Doe",
        employeeid: id,
      };
      res.status(200).send({
        data: responseObj,
      });
    }
  } catch (error) {
    return res.status(400).send({
      data: null,
    });
  }
});

module.exports = router;
