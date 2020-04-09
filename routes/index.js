const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
    res.json({
        "Author": "Sandy Pracoyo",
        "Github": "https://github.com/sandypracoyo",
        "Project": "Online-Order"
    })
})

module.exports = router