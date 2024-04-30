// crud apis

const express = require("express");
const router = express.Router();
const Session = require("../models/Session");

// Create api method

router.post("/session", async (req, res) => {
  try {
    console.log(req.body);

    const newSession = new Session(req.body);

    await newSession
      .save()
      .then((savedSession) => {
        console.log(savedSession);
        res.status(201).json({ msg: "Sessoin successfully saved" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Unable to create new session" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Unable to get session" });
  }
});

// Get all posts
router.get("/session", async (req, res) => {
  try {
    Session.find()
      .then((sessions) => {
        console.log(sessions);
        res.status(200).json({ sessions: sessions });
      })
      .catch((error) => {
        res.status(500).json({ msg: "Unable to get session" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Unable to get session" });
  }
});

// Get single post by Id 

// router.get("/contact/:id",async(req,res)=>{
//     try {
//       const id=req.params.id; 
//       Contact.findById(id)
//       .then((contact)=>{
//         console.log(contact);
//         res.status(200).json({contact:contact});


      
//       }).catch(error=>{
//         console.log(error);
//         res.status(500).json({msg:"Unable to get the contact"})

//       })
//     } catch (error) {
//        console.log(error);
//        res.status(500).json({msg:"Unable to get the contact"})
//     }
// })

// search method
// router.get("/search", async (req, res) => {
//   try {
//     const searchTerm = req.query.searchTerm;
//     const searchRegex = new RegExp(searchTerm, "i");
//     await Contact.find({
//       $or: [
//         { firstName: searchRegex },
//         { lastName: searchRegex },
//         { emailAddress: searchRegex },
//       ],
//     })
//       .then((contacts) => {
//         console.log(contacts);
//         res.status(200).json({ contacts: contacts });
//       })
//       .catch((error) => {
//         console.log(error);
//         res.status(500).json({ msg: "unable to find contact" });
//       });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "no match not found" });
//   }
// });

// // update method

// router.put("/contact/:id", async (req, res) => {
//   try {
    
//     const id = req.params.id;
//     const updatedContact = req.body;
//     await Contact.findOneAndUpdate({ _id: id }, updatedContact, { new: true })
//       .then((updatedContact) => {
//         console.log(updatedContact);
//         res
//           .status(200)
//           .json({
//             msg: "contact succsesfully updated",
//             contact: updatedContact,
//           });
//       })
//       .catch((error) => {
//         console.log(error);
//         res.status(500).json({ msg: "unable to update contact" });
//       });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "unable to update contact" });
//   }
// });

// // delete method
// router.delete("/contact/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     await Contact.findByIdAndDelete(id)
//       .then((deletedContact) => {
//         console.log(deletedContact);
//         res
//           .status(200)
//           .json({
//             msg: "Contact successfully deleted",
//             contact: deletedContact,
//           });
//       })
//       .catch((error) => {
//         console.log(error);
//         res.status(500).json({ msg: "unable to delete the contact" });
//       });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "unable to delete the contact" });
//   }
// });

module.exports = router;