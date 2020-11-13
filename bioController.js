//Import Bio Model
Bio = require("./bioModel");
UserEntry = require("./userModel");

//For index
exports.index = function (req, res) {
  Bio.find(function (err, bio) {
    if (err)
      res.json({
        status: "error",
        message: err,
      });
    res.json({
      status: "success",
      message: "Got Bio Successfully!",
      data: bio,
    });
  });
};

//For creating new bio
exports.add = function (req, res) {
  var bio = new Bio();
  bio.name = req.body.name ? req.body.name : bio.name;
  bio.class = req.body.class;
  bio.number = req.body.number;
  bio.link = req.body.link;
  //Save and check error
  bio.save(function (err) {
    if (err) res.json(err);

    res.json({
      message: "New Bio Added!",
      data: bio,
    });
  });
};

// View Bio
exports.view = async function (req, res) {
  let requester = req.body.number;
  var userEntry = new UserEntry();
  userEntry.username = req.body.username
    ? req.body.username
    : userEntry.username;
  userEntry.number = requester;
  try{ let currentUser = await Bio.findOne({ number: requester }, function (
    err,
    bio
  ) {
    userEntry.name = bio.name;
    userEntry.class = bio.class;
    userEntry.number = bio.number;
    userEntry.link = bio.link;
    userEntry.username = req.body.username;
    
    if (err) res.send(err);
    res.json({
      message: "Bio Details",
      data: bio,
    });
  })}catch(errorAlt){console.log(errorAlt)};
  try{
  let addedEntry = await userEntry.save(function (erro) {
    if (erro) res.json(erro);
  });
  console.log("saved")}
  catch(err){console.log(err)}
};

// Update Bio
exports.update = function (req, res) {
  Bio.findById(req.params.bio_id, function (err, bio) {
    if (err) res.send(err);
    bio.name = req.body.name ? req.body.name : bio.name;
    bio.class = req.body.class;

    //save and check errors
    bio.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "Bio Updated Successfully",
        data: bio,
      });
    });
  });
};

// Delete Bio
exports.delete = function (req, res) {
  Bio.deleteOne(
    {
      _id: req.params.bio_id,
    },
    function (err, contact) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Bio Deleted",
      });
    }
  );
};

exports.deleter = function (req, res) {
  UserEntry.deleteOne(
    {
      _id: req.body._id,
    },
    function (err, contact) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Bio Deleted",
      });
    }
  );
};

exports.getinventory = async function (req, res) {
  let data = await UserEntry.find({ username: req.body.username }, function (
    err,
    entries
  ) {
    if (err) res.send(err);
    
    res.json({
      message: "Entries",
      data: entries,
    });
  });
};

// exports.getinventory = async function (req, res) {
//   var arr = [];
//   let data = await UserEntry.find({ username: req.body.username }, function (
//     err,
//     entries
//   ) {
//     entries.forEach((element) => {
//       Bio.find({ number: element.number }, function (error, proxy) {
//         arr.push(proxy[0]);
//       });
//     });
//     console.log(arr);
//     res.json({ data: arr });
//   });
// };
