const User = require("../models/Registration") // model import
const Contact = require("../models/Contact")

const insertuser = async (request, response) => {
    try 
    {
      const input = await request.body;
      const user = new User(input);
      await user.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };

  const checkuserlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const user = await User.findOne(input)
       response.json(user)
     } 
     catch (error) 
     {
       response.send(error.message);
     }
   };

   const contactus = async(request,response) =>{
    try{
      const input = request.body
      const con = await new Contact(input)
      await con.save()
      response.send("thanks for your suggestions")
    }catch(error){
      response.send(error.message)
    }
   }

module.exports = {insertuser,checkuserlogin,contactus}