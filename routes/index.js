var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
/*
router.post('/signup', async (req, res, next) => {

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
    name: name
  })
    .then(user => {
      if (user !== null) {
        res.render("auth/signup", {
          errorMessage: "The name already exists!"
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
    password: hashPass,
  })
  req.session.currentUser = userCreated
  res.redirect("/users/profile");
});


router.get('/login', function (req, res, next) {

  if (req.session.currentUser) { // <== if there's user in the session (user is logged in)
    res.redirect("/users/secret");
  }

  res.render('auth/login');
});

module.exports = router;*/
