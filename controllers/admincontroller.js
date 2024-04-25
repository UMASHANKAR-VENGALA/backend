const Admin = require("../models/Admin")
const User = require("../models/Registration")
const Song = require("../models/Song")


const multer = require('multer')
const path = require('path')
const fs = require('fs')

   const checkadminlogin = async (request, response) => 
   {
      try 
      {
        const input = request.body
        console.log(input)
        const admin = await Admin.findOne(input)
        response.json(admin)
      } 
      catch (error) 
      {
        response.send(error.message);
      }
    };

    const viewusers = async(request,response)=>{
      try 
    {
      const users = await User.find();
      if(users.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(users);
      }
    } 
    catch (error) 
    {
      response.send(error.message);
    }
    };


    const deleteuser = async (request, response) => 
  {
     try 
     {
       const email = request.params.email
       const user = await User.findOne({"email":email})
       if(user!=null)
       {
         await User.deleteOne({"email":email})
         response.send("Deleted Successfully")
       }
       else
       {
         response.send("Email ID Not Found")
       }
 
     } 
     catch (error) 
     {
       response.send(error.message);
     }
   };

   const imagestorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './media/images/'); // Destination folder
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // File naming convention
    }
  });

  const imageupload = multer({ storage: imagestorage }).single('imagefile');

  const songstorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './media/songs/'); // Destination folder
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // File naming convention
    }
  });

  const songupload = multer({ storage: songstorage, }).single('audiofile');

  const createsong = async (req, res) =>
    {
      try 
      {
        await imageupload(req, res, async function (err) 
        {
          if (err) 
          {
            console.error(err);
            return res.status(500).send(err.message);
          }
          
          await songupload(req, res, async function (err) 
          {
            if (err) 
            {
              console.error(err);
              return res.status(500).send(err.message);
            }

          const { name, singer, date } = req.body;
          const imagefileName = req.imagefile ? req.imagefile.filename : undefined; // Extracting file name
          const songfileName = req.audiofile ? req.audiofile.filename : undefined; // Extracting file name
    
          const newSong = new Song({
            name,
            singer,
            date,
            imagefile: imagefileName, // Save only the file name
            songfile: songfileName // Save only the file name
          });
    
          await newSong.save();
          res.status(200).send('Song Created Successfully');
        });
      });  
      } 
      catch (error) 
      {
        console.error(error);
        res.status(500).send(error.message);
      }
    };

  





  module.exports = {checkadminlogin,viewusers,deleteuser,createsong}

  