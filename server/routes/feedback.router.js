const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

//POST new feedback
router.post('/', (req, res) => {
    let newfeedback = req.body;
    console.log(`Adding feedback`, newfeedback);
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newfeedback.feeling, newfeedback.understanding, newfeedback.support, newfeedback.comments])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new feedback`, error);
            res.sendStatus(500);
        });
});

module.exports = router;
