const Admin = require("../models/Admin")
const User = require("../models/Registration")
 
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
  module.exports = {checkadminlogin,viewusers,deleteuser}

  