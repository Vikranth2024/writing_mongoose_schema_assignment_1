const mongoose = require('mongoose')

const Schema = mongoose.Schema({

    username : {
        type : String,
        required : true,
        unique : true
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true
    },

    roles : {
        type : String,
        enum : ["user","admin"],
        default : ["user"]
    },

    profile : {

        firstName : {
            type : String
        },
    
        lastName : {
            type : String
        },
    
        age : {
            type : Number
        }

    },

    lastLogin : {
        type : Date,
        default : Date.now()
    } 

})

module.exports = mongoose.model('User', Schema);
 