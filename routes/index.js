var express = require('express');
var router = express.Router();
const User = require("../models/User");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

<<<<<<< HEAD
router.post('/signup', async (req, res, next) => {

=======

router.post('/signup', async (req, res, next) => {
  console.log('estoy entrando')
>>>>>>> 863114b63a33265625280227f38461e2743c134d
  const {
    name,
    mail,
    city,
    phone
  } = req.body;
<<<<<<< HEAD



  // validamos si los valores de los inputs llegan vacíos

=======
  // validamos si los valores de los inputs llegan vacíos
>>>>>>> 863114b63a33265625280227f38461e2743c134d
  if (name === "" || mail === "") {
    res.render("index", {
      errorMessage: "Indicate a name, mail and to register"
    });
    return;
  }
<<<<<<< HEAD

=======
>>>>>>> 863114b63a33265625280227f38461e2743c134d
  //busco en la BD si existe el username
  User.findOne({
    mail: mail
  })
    .then(user => {
      if (user !== null) {
        res.render("index", {
          errorMessage: "The mail already exists!"
        });
        return;
      }
    })
    .catch(error => {
      next(error);
    });
<<<<<<< HEAD

=======
>>>>>>> 863114b63a33265625280227f38461e2743c134d
  const userCreated = await User.create({
    name,
    mail,
    city,
    phone
  })
  req.session.currentUser = userCreated
  res.redirect("index");
});



module.exports = router;
