require('../models/database');
const { json } = require('express/lib/response');
const { find } = require('../models/Category');
const Category = require('../models/Category');
const news = require('../models/news');




/*----------------------- GET News Page ------------------*/

exports.News = async(req, res) => {
       try{
        let NewsId = req.params.id;
        const News = await news.findById(NewsId);
        const limitNumber = 5;
        const limitNumbers = 4;
        const limitNumberone = 1;
        const limitNumbertwo = 2;
        const categories = await Category.find({}).limit(limitNumber);
        const Popular = await news.find({}).sort({_id: -1}).limit(limitNumbers);
        const Editorial = await news.find({'category': 'Editorial'}).sort({_id: -1}).limit(limitNumbers);
        const Crime = await news.find({'category': 'Crime'}).sort({_id: -1}).limit(limitNumbertwo);
        const Politics = await news.find({'category': 'Politics'}).sort({_id: -1}).limit(limitNumbertwo);
        const Technology = await news.find({'category':'Technology'}).sort({_id: -1}).limit(limitNumbers);
        const National = await news.find({'category':'National'}).sort({_id: -1}).limit(limitNumbers);
        const Recent = await news.find({'category': 'Recent'}).sort({_id: -1}).limit(limitNumbers);
        const Featured = await news.find({'category': 'Featured'}).sort({_id: -1}).limit(limitNumberone); 
        const politicsFeatured = await news.find({'category': 'politicsFeatured'}).sort({_id: -1}).limit(limitNumberone);
        const editorialFeatured = await news.find({'category': 'editorialFeatured'}).sort({_id: -1}).limit(limitNumberone);
        const crimeFeatured = await news.find({'category': 'crimeFeatured'}).sort({_id: -1}).limit(limitNumberone);
        const nationalFeatured = await news.find({'category':'nationalFeatured'}).sort({_id: -1}).limit(limitNumberone);
        const technologyFeatured = await news.find({'category':'technologyFeatured'}).sort({_id: -1}).limit(limitNumberone);
        const baatmi ={Popular, Editorial, Crime, Politics, Technology,National, Recent, Featured, politicsFeatured, editorialFeatured, nationalFeatured,technologyFeatured,crimeFeatured};
         
        
        res.render('News', {title: 'Rajya Loktantra - News', News, baatmi, categories});
       }catch (error) {
              res.status(500).send({message: error.message || "Error Occured here.."});
       }
       }
                     
/*--------------  GET HOMEPAGE--------------------- */

exports.homepage = async(req, res) => {
try{

const limitNumber = 5;
const limitNumbers = 4;
const limitNumberone = 1;
const limitNumbertwo = 2;
const categories = await Category.find({}).limit(limitNumber);
const Popular = await news.find({}).sort({_id: -1}).limit(limitNumbers);
const Editorial = await news.find({'category': 'Editorial'}).sort({_id: -1}).limit(limitNumbers);
const Crime = await news.find({'category': 'Crime'}).sort({_id: -1}).limit(limitNumbertwo);
const Politics = await news.find({'category': 'Politics'}).sort({_id: -1}).limit(limitNumbertwo);
const Technology = await news.find({'category':'Technology'}).sort({_id: -1}).limit(limitNumbers);
const National = await news.find({'category':'National'}).sort({_id: -1}).limit(limitNumbers);
const Recent = await news.find({'category': 'Recent'}).sort({_id: -1}).limit(limitNumbers);
const Featured = await news.find({'category': 'Featured'}).sort({_id: -1}).limit(limitNumberone); 
const politicsFeatured = await news.find({'category': 'politicsFeatured'}).sort({_id: -1}).limit(limitNumberone);
const editorialFeatured = await news.find({'category': 'editorialFeatured'}).sort({_id: -1}).limit(limitNumberone);
const crimeFeatured = await news.find({'category': 'crimeFeatured'}).sort({_id: -1}).limit(limitNumberone);
const nationalFeatured = await news.find({'category':'nationalFeatured'}).sort({_id: -1}).limit(limitNumberone);
const technologyFeatured = await news.find({'category':'technologyFeatured'}).sort({_id: -1}).limit(limitNumberone);
const baatmi ={Popular, Editorial, Crime, Politics, Technology,National, Recent, Featured, politicsFeatured, editorialFeatured, nationalFeatured,technologyFeatured,crimeFeatured};
       res.render('index', {title: 'Rajya Loktantra - Home', categories, baatmi});
}catch (error) {
       res.status(500).send({message: error.message || "Error Occured here.."});
}
}




/*--------------  GET Categories Page--------------------- */

exports.exploreCategories = async(req, res) => {
       try{
           
              const limitNumbertwenty = 20;
              const categories = await Category.find({}).limit(limitNumbertwenty);
              res.render('categories', {title: 'Rajya Loktantra - Categories', categories});
}catch (error) {
       res.status(500).send({message: error.message || "Error Occured here.."});
}
}


/*------------------- Get Categories by ID -------------------*/
exports.exploreCategoriesById = async(req, res) => {
       try{
           
              let CategoryId = req.params.id;
              const limitNumbertwenty = 20;
              const categoryById = await news.find({'category': CategoryId}).limit(limitNumbertwenty);
              res.render('categories', {title: 'Rajya Loktantra - Categories', categoryById});
}catch (error) {
       res.status(500).send({message: error.message || "Error Occured here.."});
}
}

exports.admin = async(req, res) => {
       const infoErrorsObj = req.flash('infoErrors');
       const infoSubmitObj = req.flash('infoSubmit');
       res.render('admin', { title: 'Admin- Rajya Loktantra', infoErrorsObj, infoSubmitObj  } );
     }





     exports.adminOnPost = async(req, res) => {
       try {
     

     const newPost = new news([{
       name: req.body.name,
       description: req.body.description,
       category: req.body.category,
   
     }]);
     
     await newPost.save();
 
     req.flash('infoSubmit', 'News has been Added!')
     res.redirect('/admin');
   } catch (error) {
    
     req.flash('infoErrors', error);
     res.redirect('/admin');
   }
 }


