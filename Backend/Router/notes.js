const express = require("express");
const router = express.Router();
const fetchuser = require("../midddleware/fetchuser");
const Note = require("../Modal/Note");
const Mail = require("../Modal/mail");
const { emailProcessor } = require("../helpers/email.helper");

//ROUTE 1 : Get login user Details using
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE 2 : Get login user Details using
router.post("/addnote", fetchuser, async (req, res) => {
  try {
    const {
      name,
      title,
      category,
      company,
      workWebsite,
      cellPhone1,
      cellPhone2,
      hqContact,
      email2,
      emailCompany,
      linkedinUrl,
      location,
      status,
      remarkMel1,
      remark2,
      remarkMelHQ,
      email,
      teamConversation,
      notes3,
    } = req.body;

    const note = new Note({
      name,
      title,
      category,
      company,
      workWebsite,
      cellPhone1,
      cellPhone2,
      hqContact,
      email2,
      emailCompany,
      linkedinUrl,
      location,
      status,
      remarkMel1,
      remark2,
      remarkMelHQ,
      email,
      teamConversation,
      notes3,
      user: req.user.id,
    });

    const savedNote = await note.save();
    res.json(savedNote);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
router.post("/excel", fetchuser, async (req, res) => {
  try {
    // Assuming req.body is an array of user objects
    const bulkOps = req.body.map((user) => ({
      updateOne: {
        filter: { cellPhone1: user.Cell_Phone_1, email2: user.Email_2 },
        update: {
          user: req.user.id,
          name: user.Name,
          title: user.TITLE,
          category: user.Category,
          company: user.COMPANY_NAME,
          workWebsite: user.Work_Website,
          cellPhone1: user.Cell_Phone_1,
          cellPhone2: user.Cell_Phone_2,
          hqContact: user.HQ_CONTACT,
          email2: user.Email_2,
          emailCompany: user.EMAIL_Company,
          linkedinUrl: user.LINKEDIN_URL,
          location: user.Location,
          status: user.Status,
          remarkMel1: user.REMARKS_MELISSA_1,
          remark2: user.Remark_2,
          remarkMelHQ: user.REMARKS_FOR_HQ_MELISSA,
          email: user.Email,
          teamConversation: user.Team_Conversation,
          notes3: user.NOTES_3,
        },
        upsert: true,
      },
    }));
    await Note.bulkWrite(bulkOps);
    res.json(bulkOps);
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "error", message: "Internal server error" });
  }
});

//ROUTE 3 : Update an existing Note using: POST "/api/notes/updatenote".Login Required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const {
    name,
    title,
    category,
    company,
    workWebsite,
    cellPhone1,
    cellPhone2,
    hqContact,
    email2,
    emailCompany,
    linkedinUrl,
    location,
    status,
    remarkMel1,
    remark2,
    remarkMelHQ,
    email,
    teamConversation,
    notes3,
  } = req.body;

  try {
    //Create a newNote object
    const newNote = {
      name: "",
      title: "",
      category: "",
      company: "",
      workWebsite: "",
      cellPhone1: "",
      cellPhone2: "",
      hqContact: "",
      email2: "",
      emailCompany: "",
      linkedinUrl: "",
      location: "",
      status: "",
      remarkMel1: "",
      remark2: "",
      remarkMelHQ: "",
      email: "",
      teamConversation: "",
      notes3: "",
    };

    if (name) {
      newNote.name = name;
    }
    if (title) {
      newNote.title = title;
    }
    if (category) {
      newNote.category = category;
    }
    if (company) {
      newNote.company = company;
    }
    if (workWebsite) {
      newNote.workWebsite = workWebsite;
    }
    if (cellPhone1) {
      newNote.cellPhone1 = cellPhone1;
    }
    if (cellPhone2) {
      newNote.cellPhone2 = cellPhone2;
    }
    if (hqContact) {
      newNote.hqContact = hqContact;
    }
    if (email2) {
      newNote.email2 = email2;
    }
    if (emailCompany) {
      newNote.emailCompany = emailCompany;
    }

    if (linkedinUrl) {
      newNote.linkedinUrl = linkedinUrl;
    }
    if (location) {
      newNote.location = location;
    }
    if (status) {
      newNote.status = status;
    }
    if (remarkMel1) {
      newNote.remarkMel1 = remarkMel1;
    }
    if (remark2) {
      newNote.remark2 = remark2;
    }
    if (remarkMelHQ) {
      newNote.remarkMelHQ = remarkMelHQ;
    }
    if (email) {
      newNote.email = email;
    }
    if (teamConversation) {
      newNote.teamConversation = teamConversation;
    }
    if (notes3) {
      newNote.notes3 = notes3;
    }

    //find the note to be updated and update it
    let note = Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (note.user && note.user.toString() !== req.params.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE 4 : Delete login user Details using
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    //find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/mail", fetchuser, async (req, res) => {
  try {
    const { email, message } = req.body;
    const note = new Mail({
      email,
      message,
      user: req.user.id,
    });
    const savedNote = await note.save();
    await emailProcessor({
      email,
      message,
      type: "new-user-confirmation-required",
    });

    res.json(savedNote);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
