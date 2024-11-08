const express = require('express');
const { User, Show } = require("../../models");
const router = express.Router();

// get all users
router.get("/", async(req, res) =>{
    const users = await User.findAll();
    res.json(users);
});

// route to get one user by ID 
router.get("/:id", async(req, res) =>{
    const user = await User.findByPk(req.params.id);
    res.json(user);
});

// get all shows watched by a user 
router.get("/:id/shows", async (req, res)=>{
    const user = await User.findByPk(req.params.id);
    const watchedShows = await user.getShows();
    res.json(watchedShows);
});

// Route to PUT use with a show they've watched
router.put("/:userId/shows/:showId", async(req, res)=>{
   const user = await User.findByPk(req.params.userId);
   const show = await Show.findByPk(req.params.showId);
   await user.addShow(show);
});

module.exports = router;