const express = require("express");
const Company = require("../models/company.model.js");
const router = express.Router();
const {
  getCompanies,
  getCompany,
  createCompany,
  updateCompany,
} = require("../controllers/company.controller.js");

router.get("/", getCompanies);
router.get("/:id", getCompany);

router.post("/", createCompany);

// update a Company
router.put("/:id", updateCompany);

module.exports = router;
