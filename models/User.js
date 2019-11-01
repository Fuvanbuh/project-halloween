<<<<<<< HEAD
/*const mongoose = require("mongoose");
const Schema = mongoose.Schema;

=======
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
>>>>>>> 863114b63a33265625280227f38461e2743c134d
const userSchema = new Schema({
    name: { type: String, required: true },
    mail: { type: String, unique: true, required: true },
    city: { type: String },
    phone: { type: Number },
<<<<<<< HEAD


=======
>>>>>>> 863114b63a33265625280227f38461e2743c134d
}, {
    timestamps: {
        createdAt: "createdAt", updatedAt:
            "updatedAt"
    }
});
<<<<<<< HEAD

const User = mongoose.model("User", userSchema);
module.exports = User;*/
=======
const User = mongoose.model("User", userSchema);
module.exports = User;
>>>>>>> 863114b63a33265625280227f38461e2743c134d
