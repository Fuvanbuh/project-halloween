var express = require('express');
var router = express.Router();
const User = require("../models/User");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', async (req, res, next) => {
  console.log('estoy entrando')
  const {
    name,
    mail,
    city,
    phone
  } = req.body;
  // validamos si los valores de los inputs llegan vacíos
  if (name === "" || mail === "") {
    res.render("index", {
      errorMessage: "Indicate a name, mail and to register"
    });
    return;
  }
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
