
const router = require("express").Router()
const noteController = require("../controllers/noteController")
const auth = require('../middleware/auth')




router.route("/")
.get(auth, noteController.getNotes)
.post(auth, noteController.createNote)


router.route("/:id")
    .get(auth, noteController.getNote)
    .put(auth, noteController.updateNote)
    .delete(auth, noteController.deleteNote)


module.exports = router