const express = require('express');
const router = express.Router();
const apiGenresController = require('../../controllers/api/apiGenresControllers');

router.get('/api/genres', apiGenresController.list);
router.get('/api/genres/:id', apiGenresController.detail);
router.get('/api/genresFetch', apiGenresController.fetch);
router.get('/api/genresFetch2', apiGenresController.fetch2);

module.exports = router;