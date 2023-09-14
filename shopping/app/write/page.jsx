import React from 'react'
import styles from './page.module.css'
const page = () => {
  return (
    <div>
      <div className={styles.writeWrap}>
         <h4>글작성</h4>
         <form action="api/post/new" method='POST'>
            <input type="text" name='title' placeholder='글제목'/>
            <textarea name="content" placeholder='글내용' cols="30" rows="10"></textarea>
            <button type='submit'>버튼</button>
         </form>
      </div>
    </div>
  )
}

export default page