const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter company name"],
  },

  exchange: {
    type: String,
    required: [true, "Please enter company exchange"],
  },

  ticker: {
    type: String,
    required: [true, "Please enter company ticker"],
  },

  isin: {
    type: String,
    required: [true, "Please enter company isin"],
  },

  website: {
    type: String,
    required: false,
  },
});

const Company = mongoose.model("Company", CompanySchema);
module.exports = Company;
