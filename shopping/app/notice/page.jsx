import Link from 'next/link'
import { connectDB } from '@/until/database'
import styles from './page.module.css'
import NoticeItem from './NoticeItem'


export default async function Notice() {
   const client = await connectDB
   const db = client.db('shop')
   let result = await db.collection('post').find().toArray()
   return (
      <div className={styles.notice}>
         <h4>Notice</h4>
         <table>
            <thead>
               <tr>
                  <th>번호</th>
                  <th>{result.title}</th>
                  <th>날짜</th>
                  <th>수정</th>
                  <th>삭제</th>
               </tr>
            </thead>
            <NoticeItem result={result}/>
         </table>
         <p>
            <Link href='/write'>글쓰기</Link>
         </p>
      </div>
   )
}
