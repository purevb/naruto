// crud apis

const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create api method

router.post("/user", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser
      .save()
      .then((savedUser) => {
        console.log(savedUser);
        res.status(201).json({ msg: "User successfully saved" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Unable to create new user" });
      });
  } catch (error) {}
});

// Get all posts
router.get("/user", async (req, res) => {
  try {
    User.find()
      .then((users) => {
        console.log(users);
        res.status(200).json({ users: users });
      })
      .catch((error) => {
        res.status(500).json({ msg: "Unable to get user" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Unable to get user" });
  }
});


// Define a route to count users
router.get("/users/count", async (req, res) => {
  try {
    // Query the database to get the count of users
    const userCount = await User.countDocuments();

    // Send the count of users as the response
    res.status(200).json({ count: userCount });
  } catch (error) {
    // If an error occurs, send an error response
    console.error("Error counting users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//sdasasdsadsasasdaassasdaaddssadsda

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