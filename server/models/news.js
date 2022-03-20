const mongoose = require ('mongoose');


const newsSchema = new mongoose.Schema({
     name:{
         type: String,
         required : 'This field is required !!'
     },
     description:{
         type: String,
         required: 'This field is required !!'
     },
     image : {
         type: String,
     },
     authorimage: {
         type: String,
     },
     authorname:{
         type: String,
     },

     date:{
         type: Date,
     },
     category : {
         type: String,
         enum : ["Maharashtra", "National","Politics", "Finance", "Crime", "Technology", "Editorial", "Sports","World" ],
         required : 'This field is required!!'
     },
});


module.exports = mongoose.model('news', newsSchema);