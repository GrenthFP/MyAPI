//initialize express router
let router = require("express").Router();

//set default API response
router.get("/", function (req, res) {
  res.json({
    status: "API Works",
    message: "Welcome to FirstRest API",
  });
});

//Import Bio Controller
var bioController = require("./bioController");

// Bio routes
router.route("/bio").get(bioController.index).post(bioController.add);

router.route("/bio/getter").post(bioController.view);
router.route("/bio/deleter").post(bioController.deleter);
router.route("/bio/getinventory").post(bioController.getinventory);
router.route("/bio/del").post(bioController.delete);
router
  .route("/bio/:bio_id")

  .patch(bioController.update)
  .put(bioController.update)
  

//Export API routes
module.exports = router;
