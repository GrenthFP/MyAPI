//Import Bio Model
Bio = require("./bioModel");

//For index
exports.index = function async(req, res) {
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
exports.add = function async(req, res) {
  var bio = new Bio();
  bio.name = req.body.name ? req.body.name : bio.name;
  bio.class = req.body.class;
  bio.rarity = req.body.rarity;
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
  console.log(req.body.number);
  let currentUser = await Bio.findOne({ number: requester }, function (
    err,
    bio
  ) {
    if (err) res.send(err);
    res.json({
      message: "Bio Details",
      data: bio,
    });
  });
};

// Update Bio
exports.update = function async(req, res) {
  Bio.findById(req.params.bio_id, function (err, bio) {
    if (err) res.send(err);
    bio.name = req.body.name ? req.body.name : bio.name;
    bio.class = req.body.class;
    bio.rarity = req.body.rarity;

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
