import dbConnect from '../../../utils/dbConnect'
import Users from '../../../models/user'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

dbConnect()

export default async (req,res) =>
{
  const {method, body} = req

  switch (method) {
    case "GET":
      try {
          const posts = await
          Users.find({})
          res.status(200).json({success:true, data:posts})
      } catch(err) {
          res.status(400).json({
            success:false})
      }
      break

      case "POST":
        try {
          //defining the level of encryption
          const salt = await bcrypt.genSalt(10)

          // hashing the password
          const hashedPassword = await bcrypt.hash(req.body.password, salt)
          req.body.password = hashedPassword

            const user = await

            Users.create(body)

            const token = await jwt.sign({id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              profileImage: user.profileImage,

             }, process.env.JWTSECRET
           )

            res.status(200).json({success:true, token})
        } catch(err) {
            res.status(400).json({
              success:false, err:err.message})
        }

      default:
        res.status(400).json({
          success:false
        })
        break

  }
}
