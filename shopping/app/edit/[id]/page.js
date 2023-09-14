import { connectDB } from '@/until/database'
import { ObjectId } from 'mongodb'
import styles from './page.module.css'

export default async function Edit(props) {
   const client = await connectDB
   const db = client.db('shop')
   let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })
   console.log(result)

   return (
      <div>
         <div className={styles.writeWrap}>
            <h4>수정 페이지</h4>
            <form action='/api/post/edit' method='POST'>
               <input type='text' name='title' placeholder='글제목' defaultValue={result.title} />
               <textarea name='content' placeholder='글내용' cols='30' rows='10' defaultValue={result.content}></textarea>
               <input type='hidden' name='id' value={result._id}></input>
               <button type='submit'>수정 버튼</button>
            </form>
         </div>
      </div>
   )
}
