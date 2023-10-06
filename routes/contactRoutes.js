const express = require("express")
const router = express.Router();

const { getContacts,
    CreateContact,
    getContact,
    UpdateContact,
    deleteContact
} = require('../controllers/contactControllers');
const validToken = require("../middleware/validationTokenHandler");

router.use(validToken)
router.route("/").get(getContacts).post(CreateContact)
router.route("/:id").get(getContact).put(UpdateContact).delete(deleteContact)


module.exports = router;