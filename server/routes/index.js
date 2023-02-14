const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Howdy, partner.`);
});


module.exports = router;