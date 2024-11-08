const express = require('express');
const { User, Show } = require("../../models");
const router = express.Router();

// get all shows
router.get("/", async(req, res) =>{
    const shows = await Show.findAll();
    res.json(shows);
})

// get one show by ID
router.get("/:id", async (req, res) => {
    const show = await Show.findByPk(req.params.id);
    res.json(show);
});

// get all users who watched a show
router.get("/:id/users/", async (req, res) => {
    const show = await Show.findByPk(req.params.id);
    const usersWhoWatch = await Show.getUsers();
    console.log(usersWhoWatch, "TEST");
    res.json(show.Users);
});

// update availabe property of a show
router.put(":id/available", async (req, res)=>{
    const show = await Show.findByPk(req.params.id);
    let data = req.body;
    console.log(data);
});

router.delete("/:id", async(req, res) => {
    const show = await Show.findByPk(req.params.id);s
    await show.destroy();
});

router.get('/genre', async(req, res) => {
    const genre = req.query;
    const shows = await Show.findAll({where: {genre : genre}});
    res.json(shows);
});

module.exports = router;