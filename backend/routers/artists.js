const express = require("express");
const router = express.Router()

const { getAll, getOne, updateOne, createOne, deleteOne } = require('../controllers/artistController');

router.get('/', getAll);
router.get('/:id', getOne);
router.put('/:id', updateOne);
router.post('/', createOne);
router.delete('/:id', deleteOne);

module.exports = router;