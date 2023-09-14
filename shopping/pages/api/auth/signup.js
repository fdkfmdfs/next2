import { connectDB } from "@/until/database"
import bcrypt from 'bcrypt'
export default async function handler(req,res){
if(req.method==='POST'){
   const hash=await bcrypt.hash(req.body.password,10)
   req.body.password=hash

   const client = await connectDB
   const db = client.db('shop')
   let result=await db.collection('user_cred').insertOne(req.body)
   res.status(200).json('성공')
}
}