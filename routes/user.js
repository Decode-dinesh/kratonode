const router = require("express").Router();

const User = require("../model/User");

router.post("/add", async (req, res) => {
  const newPost = new User(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:postId", async (req, res) => {
    try {
    const data = await User.find(req.params);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/data/:name", async (req, res) => {
    try {
    const data = await User.find(req.params);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:name/:postId", async (req,res)=> {
  try {
    const result = await User.findOne(req.params);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
    
  }
})

module.exports = router;
