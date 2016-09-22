import express from 'express';
import monk from 'monk';

const router = express.Router(); // TODO fix linter config or add eslint ignore
const db = monk('localhost:27017/mayankp30');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Add New User'
  });
});

/* GET Userlist page. */
router.get('/userlist', (req, res) => {
  const collection = db.get('usercollection');
  collection.find({}, {}, (e, docs) => {
    res.render('userlist', {
      userlist: docs,
      userlistLength: docs.length
    });
  });
});

/* POST to Add User Service */
router.post('/adduser', (req, res) => {
  // Get our form values. These rely on the "name" attributes
  const firstName = req.body.firstname;
  const lastName = req.body.lastname;
  const userEmail = req.body.useremail;
  const created_At = new Date();

  // Set our collection
  const collection = db.get('usercollection');

  // Submit to the DB
  collection.find({email: userEmail}, function (req, res) {
    if(res.length < 1){
      collection.insert({
        firstname: firstName,
        lastname: lastName,
        email: userEmail,
        created_at: created_At
      }, function (err, docs) {
        if(err) {
          res.send('There was a problem adding the information to the database.');
        } else {
          // console.log("NO error",docs);
          // res.status(200).json({status:"ok"})
          res.redirect('/userlist')
        }
      });
    } else {
      console.log("Email already exist");
      // res.json(req.body);
    }
  })
});


export default router;
