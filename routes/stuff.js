const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


const stuffCtrl = require('../controllers/stuff')

router.get('/', auth, stuffCtrl.getAllStuff)
router.post('/', auth, multer, stuffCtrl.creatThing)
router.get('/:id', auth, stuffCtrl.getOneThing) 
router.put('/:id', auth, multer, stuffCtrl.updateOneThing)
router.delete('/:id', auth, stuffCtrl.deleteOneThing)




module.exports = router