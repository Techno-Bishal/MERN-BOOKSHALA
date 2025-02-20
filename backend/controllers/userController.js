import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const Signup = async(req,res) => {
  
 try{
    const {fullname, email, password} = req.body
    const user = await User.findOne({email})
    if(user){
        return res.status(404).json({error : "User already exits!"})
    }

    const hashedPassword = await bcrypt.hash(password,10)

    const createdUser = new User({
        fullname,
        email,
        password : hashedPassword
    })
    await createdUser.save()
    res.status(201).json({message : "User created successfully", user : {
        _id : createdUser._id,
        fullname : createdUser.fullname,
        email : createdUser.email
    }})
    
 }catch(error){
    console.log("Error : " , error.message)
    res.status(500).json({error : "Internal server error"})
 }
}  

export const Login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Invalid email or password" });
      }
  
      // Compare passwords only if user exists
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid email or password" });
      }
  
      // Successful login response
      res.status(200).json({
        message: "Login successful",
        user: {
          _id: user.id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Login Error:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  