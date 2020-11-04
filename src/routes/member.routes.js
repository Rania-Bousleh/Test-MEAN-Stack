const express = require("express");
var cors = require("cors");

const router = express.Router();
const multer = require("multer");
const memberController = require("../controllers/member.controller");

router.use(cors());

router.get("/", memberController.findAll);

router.post("/", memberController.create);

router.delete("/:id", memberController.delete);

odule.exports = router;

const storage = multer.diskStorage({
  destination: "C:/Users/Rania/TestApp/src/assets/img",
  filename: function (req, file, cb) {
    // cb(null, Date.now()+'.'+file.mimetype.split('/')[1])
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
router.post("/file", upload.single("file"), (req, res) => {});
