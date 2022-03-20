const express = require('express');
const router = express.Router();
const newsController =require('../controllers/newsController');
const news = require('../models/news');



/*----------------------- APP ROUTES -----------------------*/

router.get('/', newsController.homepage);
router.get('/News/:id', newsController.News);
router.get('/categories', newsController.exploreCategories);
router.get('/categories/:id', newsController.exploreCategoriesById);
router.get('/admin', newsController.admin);
router.post('/admin', newsController.adminOnPost);







module.exports = router;