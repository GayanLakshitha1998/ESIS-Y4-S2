const mongoose =require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true,
        default: "patient"
    },
    register_date:{
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('users',UserSchema);
module.exports = User;