const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: String,
    favoriteRecipes: String
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', ticketSchema);