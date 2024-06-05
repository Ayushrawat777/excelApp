const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  company: {
    type: String,
    required: false,
  },
  workWebsite: {
    type: String,
    required: false,
  },
  cellPhone1: {
    type: Number,
    required: false,
  },
  cellPhone2: {
    type: Number,
    required: false,
  },
  hqContact: {
    type: Number,
    required: false,
  },
  email2: {
    type: String,
    required: false,
  },
  emailCompany: {
    type: String,
    required: false,
  },
  linkedinUrl: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    enum: ["interested", "follow_up", "not_interested", "wrong_data","VM","not_answered","confirmed","no_response"],
    default: "no_response",
  },
  remarkMel1: { type: String, required: false },
  remark2: { type: String, required: false },
  remarkMelHQ: { type: String, required: false }, 
  email: { type: String, required: false },
  teamConversation: { type: String, required: false },
  notes3: { type: String, required: false },
});

const Note = mongoose.model("note", DataSchema);

module.exports = Note;
