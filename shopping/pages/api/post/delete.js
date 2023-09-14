import { connectDB } from "@/until/database"
import { ObjectId } from "mongodb"

export default async function handler(req,res){
   if(req.method=='DELETE'){
      const client = await connectDB
      const db = client.db('shop')
      let result = await db.collection('post').deleteOne({ _id: new ObjectId(req.body) })
      res.status(200).json('삭제완료')
   }
}