// Example file for self reference

const { Router } = require("express");
const example = Router();

const examples = ["a", "b", "c"];

exampleRouter.get("/", (req, res) => {
    res.json(examples);
});

module.exports = {
    exampleRouter
};
