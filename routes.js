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
router
  .route("/bio/:bio_id")

  .patch(bioController.update)
  .put(bioController.update)
  .delete(bioController.delete);

//Export API routes
module.exports = router;
