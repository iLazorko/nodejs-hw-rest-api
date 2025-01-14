const express = require("express");
const router = express.Router();

const {
  getContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateContactStatus,
} = require("../../controllers/contacts");

const {
  contactValidation,
  updateContactValidation,
} = require("../../middlewares/contactValidation");

router.get("/", getContacts);
router.get("/:contactId", getContactById);
router.post("/", contactValidation, addContact);
router.delete("/:contactId", removeContact);
router.put("/:contactId", updateContactValidation, updateContact);
router.patch(
  "/:contactId/favorite",
  updateContactValidation,
  updateContactStatus
);

module.exports = router;
